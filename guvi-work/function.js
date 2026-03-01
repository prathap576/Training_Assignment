// function ready(){
//     console.log("Document is ready");
// }
// ready()
// ready()

// function greetcustomer(customername="customer"){
//     console.log("hello"+customername)
// }
// greetcustomer()
// greetcustomer("tom1")
// greetcustomer("ragava")
// greetcustomer("kishore")

// function checkvalidage(age) {
//     return age>18 ? true : false;
// }
// var person1=checkvalidage(14)
// console.log(person1)
// var person2=checkvalidage(20)
// console.log(person2)

// var test=function(marks){
//     return marks%2===0 ? "pass": "fail"
// }
// console.log(test(100))
// console.log(test(101))

// function fullname(firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
// fullname("ashok", "kumar");

// const fullname = (firstName, lastName) => console.log(firstName + " " + lastName);
// fullname("ashok", "kumar");

function providenumber1(number1){
    return function providenumber2(number2){
        return parseInt(number1)+parseInt(number2)
    }
}
const result=providenumber1(10)
const finalresult=result(20)
console.log(finalresult)