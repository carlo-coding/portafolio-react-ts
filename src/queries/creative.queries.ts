import { gql } from "@apollo/client";

export const GET_CREATIVES = gql`
  query getCreatives {
    creatives {
      id
      title
      front {
        url
      }
      items {
        id
        content {
          document
        }
        image {
          url
        }
      }
      author {
        name
        email
      }
      tags {
        id
        name
      }
      createdAt
    }
  }
`;

export const GET_CREATIVE = gql`
  query getCreative($id: ID!) {
    creative(where: { id: $id }) {
      title
      front {
        url
      }
      items {
        id
        content {
          document
        }
        image {
          url
        }
      }
      tags {
        id
        name
      }
      createdAt
    }
  }
`;
