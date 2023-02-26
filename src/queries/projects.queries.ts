import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      content {
        document
      }
      link
      image {
        url
      }
      tags {
        id
        name
      }
    }
  }
`;
