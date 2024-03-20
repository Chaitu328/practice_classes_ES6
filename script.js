// -------------creating function parameter
// function Car(make,model,color) {
//     this.make= make;
//     this,model = model;
//     this.color = color;

//     // start function
//     this.start = function(){
//         console.log("start")
//     }
// }

// let mycar = new Car()

//---------------------callback function

// const person = {
//     name : "chaitu",
//     greet : function (){
//         console.log("hi, "+this.name)
//     }
//  }

//  function executeObjectFunction(callback){
//     callback();
//  }
 
//  executeObjectFunction(person.greet); // hi
// person.greet() //hi, chaitu
/*
i am not getting outout as hi,chaitu
Observe that when we pass the method as callback, the value of this is lost 
and when the executor function executes the callback, this is not pointing to 
the student object anymore.
*/

// ----------object program assignment
// function methodOnObject(name, age, college, city, country) {
//     // You need to implement this function.
//    const person = {
//         name :name,
//         city :city,
//         getCity : function (){
//             return person.name + " lives in " + person.city +"."
//         }
//    }
//    return person
   
//   }


//   if ((methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India").getCity() === "Abhinav lives in Patna.")){
//   console.log("Sample test case 1 passed!");
//   }

// -----------constructor program assignment----------


// function constructorArgument(name, age, occupation) {
//     // You only need to implement this function and also create a constructor.
//     function constructorFunction(name,age,occupation) {
//         this.name = name;
//         this.age = age;
//         this.occupation = occupation;
    
//     }
//     const newObj = new constructorFunction(name,age,occupation)
//     return newObj
//   }
// try {
//     if (constructorArgument("John", 25, "Engineer").name === 'John')
//     {
//     console.log("passed!")
//     }
// }
// catch{
//     throw new Error("check code again")
// }

//  converting above code to obj without using constrictor class

// function constructorArgument(name, age, occupation) {
//     // You only need to implement this function and also create a constructor.
//     const person = {
//         name : name,
//         age : age,
//         occupation : occupation,
//     }
//     return person
//   }
// try {
//     if (constructorArgument("John", 25, "Engineer").name === 'John')
//     {
//     console.log("passed!")
//     }
// }
// catch{
//     throw new Error("check code again")
// }

// deconstruction function for many persons
// function constructing(name,age) {
//     // properties
//     this.name = name;
//     this.age = age;
//     // method
//     this.canWalk = function(){ // here we are writing "this" keyword in method 
//         console.log(this.name+" can walk.")
//     }
// }

// const obj1 = new constructing("chaitu",30)
// const obj2 = new constructing("Adi",32)
// console.log(obj1)
// console.log(obj2)
// obj1.canWalk()

// Now we convert above code to class function 
// class Person {
//     constructor(name,age) {
//         // properties
//         this.name = name;
//         this.age = age;
//     }
//     // method
//     canWalk() {
//         console.log(this.name + " can walk.");
//     }

// }
// const person1 = new Person("chaitu",30)
// const person2 = new Person("Adi",32)
// console.log(person1)
// console.log(person1)
// person1.canWalk()

// --------------- FEAR OF THIS KEYWORD -----------------

// callsite

/*
function sum() {

}

const copySum = sum; // this is NOT A CALL SITE

copySum() // CALL SITE

// if you want to determine value of this keyword 
// it can be determined by CALL SITE ONLY.

*/

// ---------------- rule 1: default binding.
// "use strict";
/*
function sum() {
  // context -> this -> window / undefined
  console.log(this, "adsad"); // window / undefined (for strict mode)
}

sum(); // is this call site ? YES
// DO I have any extra information ? NO

*/

//------------ RULE 2 -> Implicit binding (JS itself determines the Context) ---------------

// EXAMPLE 1:
/*
let obj = {
  name: "utkarsh",
  standard: 9,
  func: function () {
    // context -> this -> obj
    console.log(this, "func");
  },
};

obj.func(); // is this a call site ? YES
// DO I have any extra information ? YES (obj)

*/

// EXAMPLE 2:

/*
let obj2 = {
  name: "akash",
  func: function () {
    // context -> this -> obj2
    console.log(this.name);
  },
};

let obj = {
  name: "ankit",
  obj2: obj2,
};

obj.obj2.func(); // akash // is this a call site ? YES
// DO I have any extra information ? YES (obj)

*/

// EXAMPLE 3
/*
let obj = {
  name: "akash",
  func: function () {
    // context - this  -> window
    // console.log("hello");
    console.log(this); //
    console.log(this.name);
  },
};

setTimeout(obj.func, 3000); //  is this a call site ? NO

// BROWSER PEOPLE
// function setTimeout(callBack, delay) {
//   // delay it for delay seconds

//   callBack(); // is this call site for func function ? YEs
//   // ANy extra info? NO
// }

*/

// ---------- RULE 3 Explicit Binding  -------------

// 1. call
// 2. apply
// 3. bind
/*
let obj2 = {
  name: "akash",
  func: function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },
};

let obj = {
  name: "ankitsss",
  obj2: obj2,
};

let utkarshPerson = {
  name: "utkarsh",
};

obj.obj2.func(9, 9); //  akash   // is thsi a call site ? // YES

obj.obj2.func.call(obj, 123, 12, 66); // ankitsss
// obj.obj2.func.apply(obj, [123, 12, 66]); // ankitsss

// obj.obj2.func();

const bindedFunction = obj.obj2.func.bind(utkarshPerson);

/*
func:

function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },


*/

/*
setTimeout(bindedFunction, 3000); //

function setTimeout(callBack, delay) {
  // delay it for delay seconds

  callBack(); // is this call site for func function ? YEs
  // ANy extra info? NO
}

*/

// ------------- Rule 4-> New Keyword --------------

/*
class Car {
  // context -> this -> new -> {}
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  start() {

  }
}

const wanagr = new Car("w8", "green"); {}

*/

/*
function Car(model, color) {
  // context -> this -> new -> {}
  this.model = model;
  this.color = color;

  this.start = function () {
    // contex - this -> ferrari
    console.log("car is in start mode " + this.model);
  };
}

const ferrrari = new Car("v8", "red");
console.log(ferrrari);

ferrrari.start();

*/

// new keyword -> {},
// and this blank object is given to CLASSES and CONSTRUCTOR FUNCTION as the CONTEXT(this).

// RULE PRECEDENCE -----------> Increasing power

// default binding <<<< Implicit <<<<<< Explicit<<<<< new

/// ---- activity

/*
function Circle(radius, location) {
  this.radius = radius;
  this.location = location;

  this.draw = function () {
    console.log(this.location);
  };

  this.move = function (nextX, nextY) {
    this.location = {
      x: nextX,
      y: nextY,
    };
  };
}

const circle = new Circle(10, { x: 10, y: 10 });
console.log(circle);

circle.draw();
circle.move(100, 200);
circle.draw();
*/

// ---- Activity

// Create a new constructor User(fullName) with two properties fullName and friendList = [] and three methods
// addFriend(friendName): void - Adds a new friend to friend list
// printFriendList(): void - Prints names of the friends from the friendList

function User(fullName){
    this.fullName = fullName,
    this.freiendList = [],

    this.addFriend = function (friendName){
        this.freiendList.push(friendName)
    }
    this.printFriendList = function(){
        console.log(this.freiendList)
    }
    // findMutualsWith(userObj): string[] - finds mutual (common) friends between the current user and the user passed as the argument. Here user is another object created using the User constructor.

    this.friendMutualsWith = function (userObj){
      //context->this->vivek
    const PersonFriend = this.freiendList
     const personFriendList = userObj.freiendList
     const filter = PersonFriend.filter((item)=> personFriendList.includes(item));
     return filter
    }
}

const vivek = new User("Vivek Nigam");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Abhijay");


const varun = new User("Varun Verma");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Abhijay");

vivek.printFriendList()
varun.printFriendList()

const mutualfriend = vivek.friendMutualsWith(varun)
console.log(mutualfriend)
