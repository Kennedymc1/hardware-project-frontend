import { gql } from '@apollo/client'

export const SEND_MESSAGE = gql`
    mutation($content: String!, $email: String!){
        sendMessage(content: $content,email: $email)
    }
`