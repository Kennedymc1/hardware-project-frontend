import { gql } from '@apollo/client'

export const GET_ENTRIES = gql`
query{
  entries{
    _id
    time
  }
}
`

export const GET_ENTRY = gql`
query($id: String){
  entry(id: $id){
    time
    image{
      name
      data
      contentType
    }
  }
}
`