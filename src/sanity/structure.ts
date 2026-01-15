import type {StructureBuilder} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('ISP Page')
        .child(
          S.document()
            .schemaType('ispPage')
            .documentId('ispPage')
        ),
      S.listItem()
        .title('Security Page')
        .child(
          S.document()
            .schemaType('securityPage')
            .documentId('securityPage')
        ),
      S.listItem()
        .title('Planes Page')
        .child(
          S.document()
            .schemaType('planesPage')
            .documentId('planesPage')
        ),
      S.listItem()
        .title('Contact Page')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.listItem()
        .title('WiFi 6 Page')
        .child(
          S.document()
            .schemaType('wifi6Page')
            .documentId('wifi6Page')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['homePage', 'siteSettings', 'ispPage', 'securityPage', 'planesPage', 'contactPage', 'wifi6Page', 'media.tag'].includes(item.getId() as string)
      ),
    ])
