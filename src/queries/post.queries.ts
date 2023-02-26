import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
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

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(where: { id: $id }) {
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
