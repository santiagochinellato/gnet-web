import { type SchemaTypeDefinition } from 'sanity'

import iconSelect from './schemaTypes/objects/iconSelect'
import seo from './schemaTypes/objects/seo'
import link from './schemaTypes/objects/link'
import heroContent from './schemaTypes/objects/hero'
import featureItem from './schemaTypes/objects/featureItem'

import homePage from './schemaTypes/singletons/homePage'
import siteSettings from './schemaTypes/singletons/siteSettings'
import ispPage from './schemaTypes/singletons/ispPage'
import securityPage from './schemaTypes/singletons/securityPage'
import planesPage from './schemaTypes/singletons/planesPage'
import contactPage from './schemaTypes/singletons/contactPage'
import { wifi6Page } from './schemaTypes/singletons/wifi6Page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    iconSelect,
    seo,
    link,
    heroContent,
    featureItem,
    homePage,
    siteSettings,
    ispPage,
    securityPage,
    planesPage,
    contactPage,
    wifi6Page
  ],
}
