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

// Activity:1

// function Circle(radius=0,x=0,y=0) {
//     this.radius = radius;
//     this.location = {
//         x : x,
//         y : y,
//     };
//     this.draw = function (){   
//         console.log(this.location);
//     }
//     this.move = function(nextx,nexty){
//         this.location = {
//             x: nextx,
//             y: nexty,
//         }
//     }   
// }

// let myCircle = new Circle("20degree",5,8)

// const circleObj = new Circle (0,0,0)

// for (let i=0;i<=10;i++){
//     circleObj.move(i,i)
//     circleObj.draw()
// }

// Activity 2: playing with "this"
// function User(obj){
//     this.obj =obj
//     this.friend = [];
//     this.addfriend = function (friendsName){
//         this.friend.push(friendsName);
//         return this.friend
//     }
// }

// const vivek = new User("vivek")
// console.log(vivek.addfriend("harish"));
// console.log(vivek.addfriend("chaitu"));

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
class Person {
    constructor(name,age) {
        // properties
        this.name = name;
        this.age = age;
    }
    // method
    canWalk() {
        console.log(this.name + " can walk.");
    }

}
const person1 = new Person("chaitu",30)
const person2 = new Person("Adi",32)
console.log(person1)
console.log(person1)
person1.canWalk()