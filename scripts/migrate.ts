
import { createClient } from 'next-sanity'
import defaultContent from '../src/data/site-content.json'
import { projectId, dataset, apiVersion } from '../src/sanity/env'
import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'

// Client mapping
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error("Error: SANITY_API_TOKEN is missing. Please provide it in .env.local or environment.")
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || apiVersion || '2024-02-01',
  useCdn: false,
  token: token
})

const PUBLIC_DIR = path.join(process.cwd(), 'public')

// Helper to upload image
async function uploadImage(imagePath: string): Promise<{ _type: 'image'; asset: { _type: 'reference'; _ref: string } } | undefined> {
  if (!imagePath) return undefined

  // Handle potential URL paths (remove leading slash)
  const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  const fullPath = path.join(PUBLIC_DIR, relativePath)

  if (!fs.existsSync(fullPath)) {
    // Suppress warning for known external URLs or just ignore
    // console.warn(`Warning: Image not found at ${fullPath}`)
    return undefined
  }

  try {
    const buffer = fs.readFileSync(fullPath)
    const asset = await client.assets.upload('image', buffer, {
      filename: path.basename(imagePath)
    })
    console.log(`Uploaded image: ${imagePath} -> ${asset._id}`)
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error)
    return undefined
  }
}

// Helper to add keys to array items
function withKeys(items: any[]) {
  return items.map(item => ({ ...item, _key: randomUUID() }))
}

async function migrate() {
  console.log("Starting migration...")

  const {
    navigation,
    hero,
    features,
    pricing,
    coverage,
    faq,
    testimonials,
    ctaHighlight,
    footer,
    homeSeo,
    isp,
    security,
    planes,
    contact
  } = defaultContent

  // --- HOME PAGE ---
  console.log("Migrating Home Page...")
  const homeHeroImage = await uploadImage(hero.imageSrc)
  
  const testimonialsReviews = await Promise.all(testimonials.reviews.map(async (r: any) => ({
    ...r,
    _key: randomUUID(),
    img: await uploadImage(r.img)
  })))

  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    seo: homeSeo,
    hero: {
      title: hero.title,
      highlight: hero.highlight,
      description: hero.description,
      ctaText: hero.ctaText,
      ctaLink: hero.ctaLink,
      image: homeHeroImage
    },
    features: {
        ...features,
        items: withKeys(features.items)
    },
    pricing: {
        ...pricing,
        plans: withKeys(pricing.plans)
    },
    coverage: coverage, // barrios is string array, no keys needed for primitives usually
    faq: {
        ...faq,
        items: withKeys(faq.items)
    },
    testimonials: {
      title: testimonials.title,
      reviews: testimonialsReviews
    },
    ctaHighlight: ctaHighlight
  }

  await client.createOrReplace(homePage)

  // --- SITE SETTINGS ---
  console.log("Migrating Site Settings...")
  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    navigation: withKeys(navigation), // navigation is array of objects (NavLink)
    footer: {
        ...footer,
        servicesLinks: withKeys(footer.servicesLinks),
        companyLinks: withKeys(footer.companyLinks),
        legalLinks: withKeys(footer.legalLinks)
    }
  }
  await client.createOrReplace(siteSettings)

  // --- ISP PAGE ---
  console.log("Migrating ISP Page...")
  const ispCaseStudies = await Promise.all(isp.caseStudies.items.map(async (item: any) => ({
    ...item,
    _key: randomUUID(),
    image: await uploadImage(item.image)
  })))

  const ispPage = {
    _id: 'ispPage',
    _type: 'ispPage',
    seo: isp.seo, // mapped from site-content, might be undefined in JSON but schema expects it.
    hero: isp.hero,
    stats: withKeys(isp.stats),
    services: {
        ...isp.services,
        items: withKeys(isp.services.items)
    },
    caseStudies: {
      title: isp.caseStudies.title,
      description: isp.caseStudies.description,
      linkText: isp.caseStudies.linkText,
      items: ispCaseStudies
    },
    cta: isp.cta
  }
  await client.createOrReplace(ispPage)

  // --- SECURITY PAGE ---
  console.log("Migrating Security Page...")
  const securityHeroBg = await uploadImage(security.hero.backgroundImage)
  const securitySolutionsTabs = await Promise.all(security.solutions.tabs.map(async (t: any) => ({
    ...t,
    _key: randomUUID(),
    image: await uploadImage(t.image)
  })))
  const securityGalleryItems = await Promise.all(security.gallery.items.map(async (g: any) => ({
    ...g,
    _key: randomUUID(),
    image: await uploadImage(g.image)
  })))

  const securityPage = {
    _id: 'securityPage',
    _type: 'securityPage',
    seo: security.seo,
    hero: {
      ...security.hero,
      backgroundImage: securityHeroBg
    },
    solutions: {
      tabs: securitySolutionsTabs
    },
    services: {
        ...security.services,
        items: withKeys(security.services.items)
    },
    gallery: {
      title: security.gallery.title,
      linkText: security.gallery.linkText,
      items: securityGalleryItems
    },
    comparison: {
        ...security.comparison,
        rows: withKeys(security.comparison.rows)
    }
  }
  await client.createOrReplace(securityPage)

  // --- PLANES PAGE ---
  console.log("Migrating Planes Page...")
  // Need to deep map categories
  const planesCategories = {
      hogar: {
          ...planes.categories.hogar,
          plans: withKeys(planes.categories.hogar.plans),
          benefits: withKeys(planes.categories.hogar.benefits)
      },
      turista: {
          ...planes.categories.turista,
          plans: withKeys(planes.categories.turista.plans),
          benefits: withKeys(planes.categories.turista.benefits)
      },
      comercios: {
          ...planes.categories.comercios,
          plans: withKeys(planes.categories.comercios.plans),
          benefits: withKeys(planes.categories.comercios.benefits)
      }
  }

  const planesPage = {
    _id: 'planesPage',
    _type: 'planesPage',
    seo: planes.seo,
    hero: planes.hero,
    tabs: planes.tabs,
    categories: planesCategories,
    faq: {
        ...planes.faq,
        items: withKeys(planes.faq.items)
    },
    cta: planes.cta
  }
  await client.createOrReplace(planesPage)

  // --- CONTACT PAGE ---
  console.log("Migrating Contact Page...")
  const contactPage = {
    _id: 'contactPage',
    _type: 'contactPage',
    seo: contact.seo,
    hero: contact.hero,
    cards: withKeys(contact.cards),
    sidebar: {
        ...contact.sidebar,
        emails: withKeys(contact.sidebar.emails)
    }
  }
  await client.createOrReplace(contactPage)

  console.log("Migration Complete! Keys added.")
}

migrate().catch((err) => {
  console.error("Migration failed:", err)
  process.exit(1)
})
