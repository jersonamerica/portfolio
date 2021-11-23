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

export const getExperiences = async () => {
  const query = gql`
    query GetExperiences {
      experiences(orderBy: jobDate_DESC) {
        id
        company
        position
        jobDate
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.experiences;
};
