import { Cliente } from "./cliente";
import { PageInfo } from "./pageInfo";

export class ClientePage {
  pageInfo: PageInfo;
  clientes: Cliente[];

  constructor(pageInfo: PageInfo, clientes: Cliente[]) {
    this.pageInfo = pageInfo;
    this.clientes = clientes;
  }
}

