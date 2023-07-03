export const queryHome = `
query MyQuery {
  home_(where: {id: "cljmf1xz719030alga8hp2l0o"}) {
    id
    title
    description
    hero {
      title
      role
      description
      image {
        id
        url
      }
      callToAction {
        id
        text
        url
        external
        download
      }
    }
    about {
      title
      description
      image{
        id
        url
      }
      experiences {
        id
        label
        number
      }
      callToAction {
        id
        text
        url
        external
        download
      }
    }
    skills {
      title
      description
      skills {
        id
        title
        svg
        color
      }
      callToAction {
        id
        text
        url
        external
        download
      }
    }
    experience {
      title
      description
      items {
        id
        date
        title
        at
        description
        education
      }
    }
    portfolio {
      title
      description
      projects {
        id
        title
        image {
          id
          url
        }
        description
        callToAction {
          id
          text
          url
          external
          download
        }
      }
    }
  }
}
`
