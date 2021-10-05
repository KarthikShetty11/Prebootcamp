//A Simple Hello World
//console.log("Hello World");


// Getting input via STDIN
//const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// inp.on("line", (data) => {
//   const inputString = data.toString();
//   const userArray = inputString.split(",");
//  console.log(inputArray);// array of given inputs
//Your code goes here
//});

const readline = require('readline');

const inp = readline.createInterface({input: process.stdin});

const userInput = [];inp.on("line", (data) => {userInput.push(data);});

inp.on("close", () => 

{
//start-here
    
    //  var a = "karthik shetty";
    //  console.log(a);
    //  var b = a.split(" ");
    //  console.log(b);
    
    // var something = userInput[0];
    // something = something.split(" ");
    // console.log(something);

    // var something1 =userInput[0].split(" ");
    // var something2 =userInput[1].split(" ");
    // var something3 =userInput[2].split(" ");
    // console.log(userInput);
    // console.log(something1);
    // console.log(something2);
    // console.log(something3);
    // var sum1 = + +something1[0] + +something1[1]+ +something1[2];
    // var sum2 = + +something2[0] + +something2[1]+ +something2[2]; 
    // var sum3 = + +something3[0] + +something3[1]+ +something3[2]; 
    // console.log(sum1+sum2+sum3);
    
    var sum = 0;
    
    for(i=0;i<3;i++)
    {
        var something = userInput[i].split(" ");
        //console.log(something);
        
        for(j=0;j<3;j++)
    {
        var sum = sum + +something[j];
        
    }
    
    }
    
    console.log(sum);
    
    
  

//end-here


});
