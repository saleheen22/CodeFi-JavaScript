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
car.getInfo();
