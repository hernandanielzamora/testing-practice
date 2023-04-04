import { calculator } from "./task3";

const msj = {
  substract: 'The rest is: ',
  add: 'The final sum is: ',
  multiply: 'The multiplication is: '
};

const substract = calculator.subtract(2, 1);
const sum = calculator.add(1, 1);
const mult = calculator.multiply(2, 1);

describe('calculate', () => {
  test(msj.substract, () => { expect(substract).toBe(1) })
  test(msj.add, () => { expect(sum).toBe(2)})
  test(msj.multiply, () => {expect(mult).toBe(2)})
});