const bcrypt = require('bcryptjs')

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: "Sercan Deveci",
    email: "sercan@example.com",
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: "Sinem Melda Azitepe",
    email: "sinmela@example.com",
    password: bcrypt.hashSync('12345', 10),
  },
];

module.exports = users;
