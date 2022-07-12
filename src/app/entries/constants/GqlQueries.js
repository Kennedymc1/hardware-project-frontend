import { gql } from '@apollo/client'

export const GET_STATS = gql`
query{
  entries{
    time
  }
}
`