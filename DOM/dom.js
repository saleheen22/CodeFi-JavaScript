;
var car = {
    make: "japan",
    model: "Toyota Camry",
    year: 2025,
    getInfo: function () {
        console.log("The car is made in ".concat(this.make, " and the model is ").concat(this.model, ", and the year is ").concat(this.year));
    },
};
var student = {
    name: 'Abrar',
    age: 25,
    grades: [90, 94, 34, 23],
    avgGrade: function () {
        return this.grades.reduce(function (sum, grade) { return sum + grade; }, 0) / this.grades.length;
    }
};
// console.log(student.avgGrade());
//Exercise 3
var btn = document.querySelector("#btn-america");
document.addEventListener('click', function () {
    if (btn) {
        btn.style.backgroundColor = 'red';
    }
});
