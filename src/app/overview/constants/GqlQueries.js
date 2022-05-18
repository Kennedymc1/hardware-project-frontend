import { gql } from '@apollo/client'

export const GET_OVERVIEW = gql`
query{
  sensorData{
    date
    time
    temperature
    humidity
  }
}
`

export const GET_RECORDS = gql`
query{
  records{
    data
  }
}
`