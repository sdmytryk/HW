const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


//1
const getMyTaxes = function(salary) {
  return this.tax * salary;
};


//2
const getMiddleTaxes = function () {
  return this.tax * this.middleSalary;
}


//3
const getTotalTaxes = function() {
  return this.tax * this.middleSalary * this.vacancies;
};


//4
const getMeSalary = function (country) {
  const salary = Math.random () * (2000 - 1500) + 1500;
  return {
      salary: salary.toFixed(0),
      taxes: (this.tax * salary).toFixed(0),
      profit: (salary - (this.tax * salary)).toFixed(0),
  }
};


console.log(`Податок з зарплати 1000 в Литві: ${getMyTaxes.call(litva, 1000)}`);
console.log(`Податок з середньої зарплати в Україні: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Скільки всього податків платять IT-спеціалісти у Литві: ${getMiddleTaxes.call(litva)}`);
console.log(`Податок з згенерованої зарплати в Україні`);
setInterval(() => console.log (getMeSalary.call(ukraine)), 10000);