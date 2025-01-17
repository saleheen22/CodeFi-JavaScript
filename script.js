// console.log(`I am getting better everyday, ain't I`);
// let firstName = "abrar";
// let lastName = "Saleheen";
// console.log(`My first name is ${firstName} and the lastname is ${lastName}`);
// function showModal(message) {
//     const modal = document.createElement('div');
//     modal.style.position = 'fixed';
//     modal.style.top = '50%';
//     modal.style.left = '50%';
//     modal.style.transform = 'translate(-50%, -50%)';
//     modal.style.padding = '20px';
//     modal.style.backgroundColor = 'red';
//     modal.style.boxShadow = '0 4px 8px rgba(58, 4, 4, 0.2)';
//     modal.innerText = message;
  
//     document.body.appendChild(modal);
//     setTimeout(() => document.body.removeChild(modal), 3000);
//   }
  
//   showModal('Hello, this is a custom modal!');
//Greeting Message
// let username = prompt('Please give me your username');
// let favoriteColor = prompt('Please give me your favorite color');
// console.log(`Hi ${username}, your favorite color is ${favoriteColor}, and welcome to CodeFi JS class`);

//Tax Rate Calculate
// let price = 100;
// let taxRate = .7;
// let priceAfterTax = price - (price + (price*taxRate));
// console.log(`The Total Price after applying discount is ${priceAfterTax}`);
let firstName = 'Abrar';
let lastName = 'Saleheen'
console.log(firstName+ " " + lastName);

//Inventory

let inventory = 100 - 15 + 20;
console.log(inventory);

//Tax with discount

let price = 120;
let tax = .10;
let discount = .15;
let priceWithTax = price + price*tax;
let finalPrice = price - discount*priceWithTax;
console.log('Price after adding Tax: ' + priceWithTax);
console.log('Final Price: '+ finalPrice);
