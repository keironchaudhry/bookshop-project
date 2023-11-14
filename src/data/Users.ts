// src/mockData/users.ts

export interface User {
  id: number;
  name: string;
  email: string;
}

const mockUsers: User[] = [
  { id: 1, name: "Jody Murray", email: "jody@example.com" },
  { id: 2, name: "Keiron Chaudhry", email: "keiron@example.com" },
  { id: 3, name: "Yoda Murray", email: "yoda@example.com" },
];

export default mockUsers;
