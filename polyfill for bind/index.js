// 1.what is polyfill ?
// polyfill is sort of browser fallback if browser not having bind function polyfill help to write the bind function

let name = {
  firstName: "Muzaker",
  lastName: "Shaikh",
};

let printNewName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " , " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

// bind() method
let printValueBind = printNewName.bind(name, "Vellore", "Tamilnadu", "India");
printValueBind();

// creating own bind() method implementaion

// func prototype is have access to each method we try to define
Function.prototype.mybind = function (...args) {
  let obj = this, // this is defining the printNewName to access overhere
    params = args.slice(1); //remove the firstvalue to show the params
  return function (...args2) {
    // obj.call(args[0]);
    obj.apply(args[0], [...params, ...args2]); //concat params and arg value
  };
};

// printNewName is getting access to func prototype method

let customBind = printNewName.mybind(name, "Vellore", "Tamilnadu");
customBind("India");
