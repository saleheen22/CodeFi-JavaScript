// const a: number[] = [2,33,4, 345, 54, 19, 234, 234]

// for (let i = 0; i<a.length; i=i+1){
//     a[i] = 5;
//     console.log(a[i]);
// }

// console.log(a);

// exercise 1
const todoList: string[] = ['do assignment', 'hit the gym', 'go to work'];

todoList.push('learn mongoose');
todoList.shift();
console.log(todoList);

// exercise 2

const evenNumber: number[] = [1,2,3,4,5,6];
let totalEven = 0;
for (const number of evenNumber){
    if(number%2 === 0){
        totalEven += 1;
    }
}
console.log(totalEven);

// exercise 3
let reverse: number[] = [1,2,3,4,5,6];
for (let i = 0, j= reverse.length-1; i<j; i++, j--){
    [reverse[i], reverse[j]] = [reverse[j], reverse[i]];
    console.log(reverse[i], reverse[j]);
    
}
console.log(reverse);

// exercise 4

let numbers : number[] = [1,2,345,6];
let largestNumber: number = numbers[0];
for(let i = 0; i< numbers.length; i++){
    if(largestNumber< numbers[i]){
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);

function greetUser(array: string[]){
    for (const arr of array){
        console.log(`Hello welcome to CodeFi World ${arr}!!!!!!`);
    }
}
greetUser(['Abrar', 'roy', 'yousha', 'a']);