// src/mockData/users.ts

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

let mockUsers: User[] = [
  { id: 1, name: "Jody Murray", email: "jody@example.com", password: "123" },
  { id: 2, name: "Keiron Chaudhry", email: "keiron@example.com", password: "123" },
  { id: 3, name: "Yoda Murray", email: "yoda@example.com", password: "123" },
];

export const addMockUser = (newUser: User): void => {
  newUser.id = mockUsers.length + 1;
  mockUsers.push(newUser);
};

export default mockUsers;
