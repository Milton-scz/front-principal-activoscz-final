import { UserRole } from "./UserRole";

export class User {
  id!: number;
  username: string;
  email: string;
  role: string; // Utiliza el tipo del enumerado UserRole

  constructor(username: string, email: string, role: string) {
    this.username = username;
    this.email = email;
    this.role = role;
  }
}
