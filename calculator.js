class calculator {
    add (a, b) {
      return a + b;
    }
  
    subtract (a, b) {
      return a - b;
    }
  
    divide (a, b) {
      return a / b;
    }
  
    multiply (a, b) {
      return a * b;
    }
  }
  
  module.exports = calculator;

const calc = new calculator;
console.log(calc.add(2,6)); 