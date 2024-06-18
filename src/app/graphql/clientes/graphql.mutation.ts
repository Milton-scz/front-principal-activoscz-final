import { gql } from 'apollo-angular';

const createCliente = gql`
  mutation createCliente( $nombre: String!,$cedula: String!, $celular: String!,$fechaNacimiento: String!,$direccion: String! ) {
    createCliente(nombre: $nombre,cedula: $cedula,celular: $celular,fechaNacimiento: $fechaNacimiento,direccion: $direccion) {
      clienteId
      nombre
      cedula
      celular
      fechaNacimiento
      direccion
    }
  }
`;

const deleteCliente = gql`
  mutation deleteCliente($clienteId: ID!) {
    deleteCliente(clienteId: $clienteId)
  }
`;


export { createCliente, deleteCliente};
