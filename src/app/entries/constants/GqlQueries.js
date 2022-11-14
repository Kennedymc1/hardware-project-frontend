import { gql } from '@apollo/client'

export const GET_ENTRIES = gql`
query{
  entries{
    _id
    time
    banned
  }
}
`


export const BAN_ENTRY = gql`
mutation($id: String,$banned: Boolean){
  banEntry(id: $id, banned: $banned)
}
`

export const GET_ENTRY = gql`
query($id: String){
  entry(id: $id){
    age
    gender
    banned
    time
    temperature
    image
  }
}
`