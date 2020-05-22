// class Methods

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  //   class method we define inside the class and outside the constructor
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userOne = new User("shaikhmuzaker@gmail.com", "Muzaker");
var userTwo = new User("adil@gmail.com", "adil");

userOne.login();
userTwo.logout();

// class methods to avoid the object literals which called objects multiple time
