import { groq } from 'next-sanity'

export const queryHome = groq`
*[_type == "home"][0]{
  ...,
  skills{
    ...,
    items[]->{
      _id,
      label,
      icon,
      color,
    }
  },
  portfolio{
    ...,
    items[]->{
      ...,
      _id,
      description,
      skills{
        ...,
        items[]->{
          _id,
          label,
          icon,
          color,
        }
      }
    }
  }
}
`
