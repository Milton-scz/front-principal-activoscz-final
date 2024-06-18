import { gql } from 'apollo-angular';

const getAlquilers= gql `
query GetAllAlquileres ($page: Int, $size: Int) {
    getAllAlquileres(page:$page, size:$size) {
        pageInfo {
            totalPaginas
            totalElementos
            paginaActual
            pageSize
        }
        alquileres {
            alquilerId
            fechaInicio
            fechaFin
            monto
            descripcion
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
}

`;


export { getAlquilers };
