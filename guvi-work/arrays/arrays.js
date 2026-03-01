// const names = ["prathap", "ragava","kishore"];
// names[0]="mahesh";
// console.log(names);
// console.log(names[0]);
// names.forEach((item,index) =>{
// // console.log(item,index);
// if (item === "kishore") {
//     names[index] = "mahesh";
// }
// });
// console.log(names)

// const movies=new Array(2);
// movies[0]="bahubali";
// movies[1]="rrr";
// movies[2]="varanasi"
// console.log(movies);

// const movies = new Array("bahubali", "rrr", "varanasi");
// const age=new Array("19", "20", "21");
// const mixed=new Array(movies, age,["jyothi","vaishnavi"]);
// console.log(mixed)

// const fruits=["apple","orange","banana",]
// console.log(fruits)
// fruits.sort()
// console.log(fruits)
// fruits.reverse()
// console.log(fruits)

// const axis=[10.1,1.2,9,5,7]
// console.log(axis)
// axis.sort(function(a, b) {
//     console.log(a, b,a-b)
//     return a - b;
// })
// console.log(axis)

// const num1=[1,2,3]
// const num2=[5,6,7]
// console.log(num1+num2)  //it shows error
// console.log(num1.concat(num2))  // correct method

const numbers=[1,2,3,4,5];
// numbers.splice(3,0,6,7,8)
// numbers.splice(3,0,4,5)
// numbers.splice(0,1)
// numbers.splice(1,1)
// const z = numbers.slice(3);
const z = numbers.slice(1,3);
console.log(z)