import { gql } from 'apollo-angular';

const createCategoria = gql `
mutation createCategoria($nombre: String!, $descripcion: String!) {
  createCategoria(nombre: $nombre, descripcion: $descripcion) {
    categoriaId
    nombre
    descripcion
  }
}
`;

const deleteCategoria = gql `
mutation deleteCategoria($categoriaId: ID!) {
  deleteCategoria(categoriaId: $categoriaId)
}
`;
export { createCategoria,deleteCategoria};
