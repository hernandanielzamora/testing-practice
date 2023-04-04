import stringLength from "./task1";

/* Arrange */
const msj = {
  passed: 'Length = 3',
  failed: 'The length of the string must be > 0 and < 11'
}

/* Act */
const countSuccessFunc = stringLength('cat');
const countFailFunc = () => stringLength('');

//Assert
test(msj.passed, () => { expect(countSuccessFunc).toBe(3); });
test(msj.failed, () => { expect(countFailFunc).toThrow('Error') });