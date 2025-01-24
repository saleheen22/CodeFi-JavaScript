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
// Exercise 1: Change the background color of #btn-america when it's clicked
var btn = document.querySelector("#btn-america");
if (btn) {
    btn.addEventListener("click", function (event) {
        event.stopPropagation();
        btn.style.backgroundColor = "red";
    });
}
// Exercise 4: 
var btnChng = document.querySelector("#chng-para");
var pargraph = document.querySelector(".para");
if (btnChng && pargraph) {
    btnChng.addEventListener("click", function (event) {
        event.stopPropagation();
        pargraph.innerText = "America is Great. Go America Go!!!";
    });
}
