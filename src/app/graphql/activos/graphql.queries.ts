import { gql } from 'apollo-angular';

const listaActivos= gql `
query {
  getAllActivos {
    activoId
    nombre
    descripcion
    fechaAdquisicion
    precio
    estado
          categoria{
              categoriaId
              nombre
              descripcion
          }
    }
}
`;



export { listaActivos };
