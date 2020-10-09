import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Diogo Verde",
    email: "diogoverde@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Rhaeg",
    email: "rhaeg@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
