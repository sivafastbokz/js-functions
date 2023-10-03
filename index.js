//function statement aka function declaration
function a(){
    console.log('a called')
}
a()
//function expression

var b = function (){
 console.log('b called')
}
b()
// the diffrence between a function statement and a function expression is hoisting

//anonymous function is just a function without a name
// function (){

// }

//named function expression
var c = function d(){
    console.log('c called')
    // console.log(d)
    // d()
}
c();
// d(); //it will throw an erorr as d() is not defined because d() is  not assigned to the global scope but it can be accessed
// inside the  var c block console it and invoke it otherwise it will run on loop

//firstClass function is nothing but the ability to have functions as values and passing a function as an argument and
// can a return a function this is also known as firstClass citizens

//what is callback function

function x(){
    console.log('this is x')
}

function y(){
    console.log('this is y')
}
x()

