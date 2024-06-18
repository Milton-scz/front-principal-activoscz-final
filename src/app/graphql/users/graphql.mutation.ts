import { gql } from 'apollo-angular';

const authenticateUser = gql`
  mutation getToken($email: String!, $password: String!) {
    getToken(email: $email, password: $password)
  }
`;

const createUser = gql`
      mutation CreateUser($username: String!, $email: String!, $password: String!, $role: Role!) {
  createUser(user: { username: $username, email: $email, password: $password, role: $role }) {
    id
    username
    email
    role
  }
}
      `;
      const deleteUser = gql`
      mutation deleteUser($id: ID!) {
        deleteUser(id: $id)
      }
    `;


export { authenticateUser, createUser,deleteUser };
