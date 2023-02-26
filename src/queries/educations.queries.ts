import { gql } from "@apollo/client";

export const GET_EDUCATIONS = gql`
  query getEducations {
    educations {
      id
      title
      image {
        url
      }
    }
  }
`;
