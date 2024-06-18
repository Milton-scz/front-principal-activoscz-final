import { gql } from 'apollo-angular';


const listaCategorias= gql `
query {
  getAllCategorias {
    categoriaId
    nombre
    descripcion
    }
}
`;


export { listaCategorias};
