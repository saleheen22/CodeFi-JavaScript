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

//Tax Rate Calculate
let price = 50;
let taxRate = .10;
let discount = .15;
let priceAfterDiscount = price + (price*taxRate) - (price*discount);
console.log(`The Total Price after applying discount is ${priceAfterDiscount}`);