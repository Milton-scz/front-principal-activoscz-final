import { Alquiler } from "./alquiler";
import { PageInfo } from "./pageInfo";

export class AlquilerPage {
  pageInfo: PageInfo;
  alquileres: Alquiler[];

  constructor(pageInfo: PageInfo, alquileres: Alquiler[]) {
    this.pageInfo = pageInfo;
    this.alquileres = alquileres;
  }
}

