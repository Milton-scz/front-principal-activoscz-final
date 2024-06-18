import { gql } from 'apollo-angular';

const getUsers= gql `
query {
  getUsers {
    id
    username
    email
    role
    }
}
`;



export { getUsers };
