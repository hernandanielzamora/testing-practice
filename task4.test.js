import { capitalizeFirstLetter } from "./task4";

const word = 'cat';
const msj = 'Capitalize the first letter of the word';

const capitalizedWord = capitalizeFirstLetter(word);

test(msj, () => {expect(capitalizedWord).toBe('Cat')})