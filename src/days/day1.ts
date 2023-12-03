import { data } from './data';
import { data2 } from './data2';

function calculateCalibration() {
  const list = data2;

  let result = 0;

  list.forEach((line) => {
    const numbers = line.match(/-?\d+/g)?.join() || [];
    const firstNumber = numbers[0] || '';
    const lastNumber = numbers[numbers.length - 1] || '';
    console.log(line, firstNumber, lastNumber);

    result += parseInt(firstNumber + lastNumber);
  });

  return 'Part 1: ' + result;
}

export default calculateCalibration;
