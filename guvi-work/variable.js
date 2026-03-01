// var fullname="prathap";
// function greet(){
//     var age=25;
//     console.log(age)
//     console.log(fullname);
// }

// function greet2(){
//     fullname="ragava"
//     console.log(fullname);
//     // console.log(age)
// }

// greet()
// greet2()
// greet()
function num1(number1){
    const result=number1*2
    function num2(){
        return result*3
    }
    const resp=num2()
    console.log(resp)
}
num1(10)