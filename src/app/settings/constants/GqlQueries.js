import { gql } from '@apollo/client'


export const GET_SETTINGS = gql`
query{
  settings{
    facemaskMode
  }
}
`


export const SET_SETTINGS = gql`
mutation($settings: SettingsInput){
  setSettings(settings: $settings)
}
`
