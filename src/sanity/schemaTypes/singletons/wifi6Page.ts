
import { defineField, defineType } from "sanity";

export const wifi6Page = defineType({
  name: "wifi6Page",
  title: "WiFi 6 Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "problems", title: "Problem Section" },
    { name: "technology", title: "Technology Section" },
    { name: "plans", title: "Plans Section" },
    { name: "comparison", title: "Comparison Section" },
    { name: "testimonials", title: "Testimonials" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "CTA Footer" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    /* -------------------------------------------------------------------------- */
    /*                                HERO SECTION                                */
    /* -------------------------------------------------------------------------- */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string", initialValue: "WIFI 6 EARLY ADOPTER" }),
        defineField({ name: "title", title: "Main Title", type: "string", initialValue: "Internet que funciona para toda la familia" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", initialValue: "Tu hijo juega sin lag. Vos trabajás sin cortes. Todo al mismo tiempo." }),
        defineField({ name: "pingValue", title: "Ping Value", type: "string", initialValue: "4ms" }),
        defineField({ name: "ctaText", title: "CTA Button Text", type: "string", initialValue: "Verificar si llega a mi casa" }),
      ],
    }),

    /* -------------------------------------------------------------------------- */
    /*                               PROBLEM SECTION                              */
    /* -------------------------------------------------------------------------- */
    defineField({
      name: "problems",
      title: "Problem Section",
      type: "object",
      group: "problems",
      fields: [
        defineField({ name: "title", title: "Section Title", type: "string", initialValue: "¿Te pasa esto en casa?" }),
        defineField({ name: "subtitle", title: "Section Subtitle", type: "string", initialValue: "Problemas reales que WiFi 6 soluciona de verdad" }),
        defineField({
          name: "cards",
          title: "Problem Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "Alert Circle", value: "AlertCircle" },
                      { title: "Download", value: "Download" },
                      { title: "Wifi Off", value: "WifiOff" },
                    ],
                  },
                }),
                defineField({ name: "title", title: "Card Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text" }),
                defineField({ name: "statValue", title: "Stat Value (Big)", type: "string" }),
                defineField({ name: "statLabel", title: "Stat Label (Small)", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),

    /* -------------------------------------------------------------------------- */
    /*                             TECHNOLOGY SECTION                             */
    /* -------------------------------------------------------------------------- */
    defineField({
      name: "technology",
      title: "Technology Section",
      type: "object",
      group: "technology",
      fields: [
        defineField({ name: "badge", title: "Badge", type: "string", initialValue: "TECNOLOGÍA NASA/INVAP" }),
        defineField({ name: "title", title: "Title", type: "string", initialValue: "Por qué WiFi 6 no es solo \"internet más rápido\"" }),
        defineField({ name: "intro", title: "Intro Text", type: "string", initialValue: "Te lo explico como si estuviéramos tomando un mate:" }),
        defineField({
          name: "cards",
          title: "Technology Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: [
                      { title: "Cpu", value: "Cpu" },
                      { title: "Router", value: "Router" },
                      { title: "Wifi", value: "Wifi" },
                      { title: "Zap", value: "Zap" },
                      { title: "Battery", value: "BatteryCharging" },
                      { title: "Shield", value: "ShieldCheck" },
                    ],
                  },
                }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "subtitle", title: "Subtitle (Optional)", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text" }),
                defineField({ 
                    name: "stat", 
                    title: "Stat (Optional)", 
                    type: "object",
                    fields: [
                        defineField({ name: "value", title: "Value", type: "string" }),
                        defineField({ name: "label", title: "Label", type: "string" }),
                    ]
                }),
              ],
            },
          ],
        }),
      ],
    }),

    /* -------------------------------------------------------------------------- */
    /*                             COMPARISON SECTION                             */
    /* -------------------------------------------------------------------------- */
    defineField({
        name: "comparison",
        title: "Comparison Section",
        type: "object",
        group: "comparison",
        fields: [
          defineField({ name: "title", title: "Title", type: "string", initialValue: "WiFi 5 VS WiFi 6" }),
          defineField({ name: "badge", title: "Badge", type: "string", initialValue: "Comparación honesta sin marketing" }),
          defineField({
            name: "features",
            title: "Features List",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({ name: "name", title: "Feature Name", type: "string" }),
                  defineField({ name: "wifi5", title: "WiFi 5 Value", type: "string" }),
                  defineField({ name: "wifi6", title: "WiFi 6 Value", type: "string" }),
                ]
              }
            ]
          })
        ]
    }),

    /* -------------------------------------------------------------------------- */
    /*                            TESTIMONIALS SECTION                            */
    /* -------------------------------------------------------------------------- */
    defineField({
        name: "testimonials",
        title: "Testimonials Section",
        type: "object",
        group: "testimonials",
        fields: [
            defineField({ name: "title", title: "Title", type: "string", initialValue: "Lo que dicen los que ya tienen WiFi 6 en Bariloche" }),
            defineField({
                name: "reviews",
                title: "Reviews",
                type: "array",
                of: [
                    {
                        type: "object",
                        fields: [
                           defineField({ name: "name", title: "Name", type: "string" }), 
                           defineField({ name: "role", title: "Role/Location", type: "string" }), 
                           defineField({ name: "text", title: "Review Text", type: "text" }), 
                           defineField({ name: "stars", title: "Stars", type: "number", initialValue: 5 }), 
                        ]
                    }
                ]
            })
        ]
    }),

    /* -------------------------------------------------------------------------- */
    /*                                 FAQ SECTION                                */
    /* -------------------------------------------------------------------------- */
    defineField({
        name: "faqs",
        title: "FAQs",
        type: "object",
        group: "faq",
        fields: [
            defineField({ name: "title", title: "Title", type: "string", initialValue: "Preguntas Frecuentes" }),
            defineField({
                name: "items",
                title: "Questions",
                type: "array",
                of: [
                    {
                        type: "object",
                        fields: [
                            defineField({ name: "question", title: "Question", type: "string" }),
                            defineField({ name: "answer", title: "Answer", type: "text" }),
                        ]
                    }
                ]
            })
        ]
    }),

    /* -------------------------------------------------------------------------- */
    /*                                 CTA FOOTER                                 */
    /* -------------------------------------------------------------------------- */
    defineField({
        name: "cta",
        title: "CTA Footer",
        type: "object",
        group: "cta",
        fields: [
           defineField({ name: "badge", title: "Badge", type: "string" }),
           defineField({ name: "title", title: "Title", type: "text" }),
           defineField({ name: "description", title: "Description", type: "text" }),
        ]
    }),

    /* -------------------------------------------------------------------------- */
    /*                                     SEO                                    */
    /* -------------------------------------------------------------------------- */
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
        defineField({ name: "ogImage", title: "Open Graph Image", type: "image" }),
      ],
    }),
  ],
});
