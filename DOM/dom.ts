//Exercise 1
interface Car {
    make: string,
    model: string,
    year: number,
    getInfo: ()=> void


};
const car : Car = {
    make: "japan",
    model: "Toyota Camry",
    year: 2025,
    getInfo() {
        console.log(`The car is made in ${this.make} and the model is ${this.model}, and the year is ${this.year}`);
    },
}
// car.getInfo();

//Exercise 2
interface Student {
    name: string,
    age: number,
    grades: Array<Number>;
    avgGrade: () => number;
}

const student = {
    name: 'Abrar',
    age: 25,
    grades: [90,94,34,23],
    avgGrade() : number {
        return this.grades.reduce((sum,grade) => sum + grade, 0)/this.grades.length;
        
    }
}
// console.log(student.avgGrade());
// Exercise 1: Change the background color of #btn-america when it's clicked
const btn = document.querySelector("#btn-america") as HTMLButtonElement;

if (btn) {
    btn.addEventListener("click", function (event) {
        event.stopPropagation(); 
        btn.style.backgroundColor = "red";
    });
}

// Exercise 4: 
const btnChng = document.querySelector("#chng-para") as HTMLButtonElement;
const pargraph = document.querySelector(".para") as HTMLParagraphElement;

if (btnChng && pargraph) {
    btnChng.addEventListener("click", function (event) {
        event.stopPropagation(); 
        pargraph.innerText = "America is Great. Go America Go!!!";
    });
}
