import { request, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_API_URL!;

export const getProjects = async () => {
  const query = gql`
    query GetProjects {
      projects {
        id
        name
        image {
          url
        }
        url
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.projects;
};
