const Routes = {
  base: "/",
  AddUser: "/register",
  Login: "/login",
  Logout: "/logout",
  users:"/users",
  user: "/users/:user",
  update: "/update/:user",
  follow: "/follow",
  admin: "/admin",
  username:"/fetch"
};

const params = {
  user: "user",
};

module.exports = { Routes, params };
