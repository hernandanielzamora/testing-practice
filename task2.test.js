import {reverseString} from "./task2";
import expect from "expect";

const mjs = 'Passed = Input: cat - Output: tac';


const reverse = reverseString('cat');

test(mjs , () => { expect(reverse).toBe('tac') });