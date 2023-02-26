import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($email: String!) {
    user(where: { email: $email }) {
      name
      about {
        document
      }
    }
  }
`;
