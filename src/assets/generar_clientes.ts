
export interface Cliente {
  id: number;
  nombre: string;
  fechaNacimiento: string;
  cedula: string;
  celular: string;
  direccion: string;
}

const nombres = [
  "Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Javier", "Elena",
  "Diego", "Paula", "Miguel", "Valeria", "José", "Lucía", "Francisco", "Carmen", "Antonio", "Martina",
  "Manuel", "Isabella", "Jorge", "Emma", "Rafael", "Julia", "Alejandro", "Valentina", "Daniel", "Camila",
  "Pablo", "Luisa", "Santiago", "Adriana", "Emilio", "Raquel", "Fernando", "Clara", "Andrés", "Gabriela",
  "Ricardo", "Natalia", "Guillermo", "Eva", "Gabriel", "Victoria", "José Luis", "Paulina", "Mario", "Daniela"
];

const apellidos = [
  "Gómez", "Rodríguez", "López", "Martínez", "Pérez", "García", "Sánchez", "Fernández", "González", "Álvarez",
  "Díaz", "Torres", "Ruiz", "Ramírez", "Suárez", "Cruz", "Flores", "Molina", "Ortega", "Herrera",
  "Jiménez", "Moreno", "Castro", "Romero", "Álvarez", "Mendoza", "Rojas", "Medina", "Aguilar", "Silva",
  "Ramos", "Vargas", "Morales", "Benítez", "Ortiz", "Navarro", "Guerrero", "Castillo", "Delgado", "Campos",
  "Vásquez", "Soto", "Cabrera", "Chávez", "Mendez", "Juárez", "Guerrero", "Padilla", "Fuentes", "Hernández",
  "Luna", "Lara", "León", "Chavez", "Peña", "Sosa", "Salazar", "Valdez", "Arias", "Cordova",
  "Maldonado", "Estrada", "Gallardo", "Villa", "Zamora", "Mercado", "Orozco", "Rojas", "Santos", "Figueroa",
  "Reyes", "Quintero", "Olivera", "Ibarra", "Villalobos", "Arroyo", "Pacheco", "Rosales", "Valencia", "Amaya",
  "Valenzuela", "Bautista", "Calderón", "Barrera", "Zúñiga", "Escobar", "Duarte", "Cuevas", "Guerra", "Salinas",
  "Escobedo", "Verdugo", "Galindo", "Mata", "Valencia", "Serrano", "Cárdenas", "Cisneros", "Cruz", "Olivares",
  "Aguirre", "Nava", "Montes", "Cervantes", "Escamilla", "Peñaloza", "Esquivel", "Urbina", "Montiel", "Bermúdez",
  "Corona", "Felix", "Valdez", "Mejía", "Peralta", "Leyva", "Cárdenas", "Uribe", "Alvarado", "Aguayo"
];


const ciudades = ["Ciudad A", "Ciudad B", "Ciudad C", "Ciudad D", "Ciudad E"];
const paises = ["País A", "País B", "País C", "País D", "País E"];


const direccionesSet = new Set();

function generarDireccionAleatoriaUnica() {
  let direccion;
  do {
    const calle = `Calle ${Math.floor(Math.random() * 100) + 1}`;
    const numero = Math.floor(Math.random() * 100) + 1;
    const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
    const pais = paises[Math.floor(Math.random() * paises.length)];
    direccion = `${calle} ${numero}, ${ciudad}, ${pais}`;
  } while (direccionesSet.has(direccion));
  direccionesSet.add(direccion);
  return direccion;
}


const clientes: Cliente[]=[];


for (let i = 0; i < 1000; i++) {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  const fechaNacimiento = `${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970}`;
  const cedula = Math.floor(Math.random() * 9000000) + 1000000;
  const celular = `300${Math.floor(Math.random() * 900000000) + 100000000}`;
  const direccion = generarDireccionAleatoriaUnica();

  clientes.push({
    id: i + 1,
    nombre: `${nombre} ${apellido}`,
    fechaNacimiento: fechaNacimiento,
    cedula: `${cedula}`,
    celular: celular,
    direccion: direccion
  });
}


console.log("Primeros 10 registros de clientes:");
console.log(clientes.slice(0, 10));

export default clientes;
