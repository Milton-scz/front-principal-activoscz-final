import { gql } from 'apollo-angular';

const listaClientes= gql `

 query getAllClientes($page: Int, $size: Int) {
    getAllClientes(page: $page, size: $size) {
      pageInfo {
        totalPaginas
        totalElementos
        paginaActual
        pageSize
      }
      clientes {
        clienteId
        nombre
        cedula
        celular
        fechaNacimiento
        direccion
      }
    }
  }
`;
const findByClienteId = gql`
query findByClienteId($clienteId: ID!){
  findByClienteId(clienteId: $clienteId){
    clienteId
    nombre
    cedula
    celular
    fechaNacimiento
    direccion
  }
}
`;
const existsClienteId = gql`
query existsClienteId($clienteId: ID!){
  existsClienteId(clienteId: $clienteId)
}
`;


export { listaClientes,findByClienteId ,existsClienteId};
