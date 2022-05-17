import { gql } from 'apollo-boost'

export const LOG_IN = gql`
   mutation($email: String!,$password: String!){
    login(user: { email: $email, password: $password}){
        email
        token
    }
   }

`
export const IS_LOGGED_IN = gql`
  query{
      isLoggedIn
  }
`

export const IS_VALID_RESET_TOKEN = gql`
    query($token: String!){
        isPasswordResetValid(token: $token)
    }
`

export const RESET_PASSWORD = gql`
mutation($email: String!){
  resetPassword(email: $email)
}
`

export const IS_PASSWORD_RESET_VALID = gql`
query($token: String!){
  isPasswordResetValid(token: $token)
}
`

export const CHANGE_TOKEN_PASSWORD = gql`
  mutation($token: String!,$password:String!){
changeTokenPassword(token:$token,password: $password){
    token
  }
  }
`


export const REGISTER = gql`
   mutation($email: String!,$password: String!,$platform: String, $utm_source: String,
    $utm_medium: String,$utm_campaign: String,$utm_content: String,$utm_term: String){
    
      register(user: { email: $email, password: $password,platform: $platform},
         utm: {source: $utm_source,medium: $utm_medium,campaign: $utm_campaign,
        content: $utm_content, term: $utm_term}){
        email
        token
    }
   }

`