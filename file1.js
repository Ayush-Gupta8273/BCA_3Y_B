let a=10;
document.write(a, "<br>")
let b=5;
document.write(b,"<br>")
let sum = a+b;                  //15
document.write(sum,"<br>")
let difference=a-b;             //5
document.write(difference,"<br>")
let product=a*b;                //50
document.write(product,"<br>")
let quotient =a/b;
document.write(quotient,"<br>")
let remainder = a%b;
document.write(remainder,"<br>")
let isEqual = (a==b);
document.write(isEqual,"<br>")
let isNotEqual = (a!=b);
document.write(isNotEqual,"<br>")
let isGreater = (a>b);
document.write(isGreater,"<br>")
let logicalAnd=(a>b && b<10);
document.write(logicalAnd,"<br>")

//-------------------------------------------------------


let fname="John";
document.write("Hello ",fname,"<br>")
let age= 30;
document.write("Age ",age,"<br>")
let isStudent=true;
document.write(`Student - ${isStudent? "Yes":"No"} <br>`);
let emptyValue="I'm Developer";
document.write(`About Us  ${emptyValue || "Write Something"} <br>`);
let uninitialized;
document.write(!uninitialized && "Fill detail completely","<br>")

//-------------------------------------------------------------------------------

let aage = 18;

if(aage>17){
    document.write("Eligible for vote ","<br>");
} else{
    document.write("Not Eligible for Vote","<br>");
}


