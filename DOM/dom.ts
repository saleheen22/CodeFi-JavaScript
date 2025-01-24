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
//Exercise 3
const btn = document.querySelector("#btn-america") as HTMLButtonElement;
document.addEventListener('click', function(){
    if(btn){
        btn.style.backgroundColor = 'red';

    }
    
})