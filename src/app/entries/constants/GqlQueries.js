import { gql } from '@apollo/client'

export const GET_ENTRIES = gql`
query{
  entries{
    time
  }
}
`

export const GET_ENTRY = gql`
query{
  entry{
    time
    image{
      name
      data
      contentType
    }
  }
}
`