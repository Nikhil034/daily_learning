let c=10;
function outerFunction(){
    let b=2;
    function innerFunction(){
        let a=5;
        console.log(a,b,c);
    }
    console.log("Inside outerFunction:");
    innerFunction();
}

//This is example of lexical scoping
outerFunction();


//Walkthrough of closures
console.log("----------Closure Example----------");

function Counter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}

Counter(); //Output: 1
Counter();  //This every time will print 1 because it assign temporary memory for count variable


const fn= Counter(); //Here Counter function is called once and returned function is assigned to fn
fn(); //Output: 1
fn(); //Output: 2

//Persistent memory for the executed function

console.log("---------Walkthrough of function currying----------");

function sm(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }       
        }    
    }
}


console.log("-------This keyword example-------");

const person={
    name:"Alice",
    age:30,
    greet:function(){
        console.log("Hello, my name is " + this.name);
    }
};

function greet(){
    console.log("Hello, my name is " + this.name);
}

//explicit binding and implicit binding of this keyword

person.greet(); //Output: Hello, my name is Alice
greet.call({name:"Bob"}); //Output: Hello, my name is Bob(explicit binding)

function person2(name){
    this.name=name;
}

const p=new person2("Charlie");
console.log(p.name); //Output: Charlie(implicit binding)    
const p1=new person2("David");
console.log(p1.name); //Output: David(implicit binding)


console.log("-------Example of prototype functions-------");

function Animal(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

const dog=new Animal("Dog","Brown");
const cat=new Animal("Cat","White");

dog.getFullname=function(){
    return this.fname + " " + this.lname;
}

console.log(dog.getFullname()); //Output: Dog Brown
//console.log(cat.getFullname()); //Error: cat.getFullname is not a function

Animal.prototype.getFullname=function(){
    return this.fname + " " + this.lname;
}

//share properties and methods using prototype 
console.log(cat.getFullname()); //Output: Cat White

console.log("-------Example of Prototype Inheritance-------");

class Vehicle{
    constructor(brand){
        this.brand=brand;
    }   
    getBrand(){
        return this.brand;
    }
}

class Car extends Vehicle{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }   
    getModel(){
        return this.model;
    }
}

const myCar=new Car("Toyota","Corolla");
console.log(myCar.getBrand());
console.log(myCar.getModel());


console.log("-------Examle of Iterator protocol-------");

const myArray=[10,20,30];

const myIterator=myArray[Symbol.iterator]();    
console.log(myIterator.next()); //Output: {value: 10, done: false}
console.log(myIterator.next()); //Output: {value: 20, done: false}
console.log(myIterator.next()); //Output: {value: 30, done: false}
console.log(myIterator.next()); //Output: {value: undefined, done: true}


console.log("-------Example of Generators-------");

function* myGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
const generaterObject=myGenerator();
for(const value of generaterObject){
    console.log(value); //Output: 1 2 3
}