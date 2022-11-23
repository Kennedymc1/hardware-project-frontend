import { gql } from '@apollo/client'

export const GET_ENTRIES = gql`
query($fromDate: String, $toDate: String){
  entries(fromDate: $fromDate, toDate: $toDate){
    _id
    time
    age 
    gender
    image
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