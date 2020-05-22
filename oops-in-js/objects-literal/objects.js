// object literals

var userOne = {
  email: "shaikhmuzaker@gmail.com",
  name: "Muzaker",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

console.log(userOne.name);
console.log(userOne.login());
console.log(userOne.logout());
