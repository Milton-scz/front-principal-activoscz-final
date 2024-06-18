import { gql } from 'apollo-angular';


const createAlquiler = gql`
  mutation CreateAlquiler(
  $clienteId: ID!,
  $activoInput: ActivoInput!,
  $fechaInicio: String!,
  $fechaFin: String!,
  $monto: String!,
  $descripcion: String!
) {
  createAlquiler(
    clienteId: $clienteId,
    activoInput: $activoInput,
    fechaInicio: $fechaInicio,
    fechaFin: $fechaFin,
    monto: $monto,
    descripcion: $descripcion
  ) {
    alquilerId
    cliente {
      clienteId
      nombre
      cedula
      celular
      fechaNacimiento
      direccion
    }
    activo {
      _id
      nombre
      descripcion
      fechaAdquisicion
      precio
      estado
      categoria {
        _id
        nombre
        descripcion
      }
    }
  }
}

`;

const deleteAlquiler = gql`
  mutation deleteAlquiler($alquilerId: ID!) {
    deleteAlquiler(alquilerId: $alquilerId)
  }
`;

export { createAlquiler, deleteAlquiler };
