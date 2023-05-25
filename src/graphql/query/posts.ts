import { gql } from 'graphql-tag';

export const GET_ALL_POST = gql`
  query Posts($where: PostWhereInput) {
    posts(where: $where) {
      id
      newsTitle
      author
      publishDate
      categories
    }
  }
`;

export const GET_POST = gql`
  query Post($id: ID!) {
    post(where: {id: $id}) {
        id
        newsTitle
        author
        publishDate
        subtitle
        imageUrl
        news {
          text
        }
        newsPart2 {
          text
        }
        newsPart3 {
          text
        }
        categories
    }
  }
`;