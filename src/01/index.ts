import { loadFile } from '../utils';

export const formatInput = (input: string): Array<number> =>
  input.split('\n').filter(Boolean).map(Number);

export const partOne = (input: Array<number>): number => {
  for (let i = 0; i < input.length; i++) {
    const one = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const two = input[j];
      if (one + two === 2020) {
        return one * two;
      }
    }
  }
};

export const partTwo = (input: Array<number>): number => {
  for (let i = 0; i < input.length; i++) {
    const one = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const two = input[j];
      for (let k = j + 1; k < input.length; k++) {
        const three = input[k];
        if (one + two + three === 2020) {
          return one * two * three;
        }
      }
    }
  }
};

(async () => {
  const fileContent = await loadFile('01/input.txt');
  const input = formatInput(fileContent);

  console.log('Answer one is', partOne(input));
  console.log('Answer two is', partTwo(input));
})();
