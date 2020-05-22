// example for call(), apply(), bind() method

let name = {
  firstName: "Muzaker",
  lastName: "Shaikh",
};

let printFullName = function (homeTown) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown);
};

let name2 = {
  firstName: "Adil",
  lastName: "Shaikh",
};

// call method is function borrowing we can use function from other object and use it data from other object...
// call method use to invoke the func directly which points to the variable as refernce to pass in the argument.
printFullName.call(name, "Vellore");

printFullName.call(name2, "Mumbai");

// apply() method is same as call() method only difference is the way of passinf argument.
printFullName.apply(name, ["Vellore"]); // apply() used to pass second argument as an array.

// bind method looks exactly as call method, only the difference is calling directly the [this] method,
// bind() method binds the given function with the object and returns the copy of that method

// bind() method cannot able to call direclty like we use in call() method, bind() method return as a method which call later
let printmyName = printFullName.bind(name, "Vellore");
// when we console it will print as a function which can be invoke later.
console.log(printmyName);
// if we want to invoke this method we can invoke this like method define below.
printmyName(); // it use to bind and keep a copy of a method

// the diff between call() and bind() , bind() method getting a copy which can be invoke it later.
