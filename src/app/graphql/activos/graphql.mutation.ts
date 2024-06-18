import { gql } from 'apollo-angular';

const createActivo = gql`
  mutation createActivo( $nombre: String!,$descripcion: String!,$categoriaId: ID!, $fechaAdquisicion: String!,$precio: String!,$estado: String! ) {
    createActivo(nombre: $nombre,descripcion: $descripcion,categoriaId: $categoriaId,fechaAdquisicion: $fechaAdquisicion,precio: $precio,estado: $estado) {
      activoId
      nombre
      descripcion
      fechaAdquisicion
      precio
      estado
      categoria {
        categoriaId
        nombre
        descripcion
      }
    }
  }
`;

const deleteActivo = gql`
  mutation deleteActivo($activoId: ID!) {
    deleteActivo(activoId: $activoId)
  }
`;

export { createActivo, deleteActivo };
