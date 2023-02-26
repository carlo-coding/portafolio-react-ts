import { gql } from "@apollo/client";

export const GET_HOBBIES = gql`
  query getHobbies {
    hobbies {
      id
      title
      image {
        url
      }
    }
  }
`;
