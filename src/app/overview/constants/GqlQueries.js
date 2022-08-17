import { gql } from '@apollo/client'

export const GET_STATS = gql`
query{
  stats{
    peopleToday,
    peopleYesterday,
    people7Days,
    people30Days
  }
}
`


export const GET_MILLIS = gql`
query{
  time{
    data
  }
}
`

export const GET_IMAGE = gql`
query{
  image{
    name
    data
    contentType
  }
}
`