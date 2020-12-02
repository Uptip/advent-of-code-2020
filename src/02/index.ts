import { loadFile } from '../utils';

type Entry = {
  digitOne: number;
  digitTwo: number;
  letter: string;
  password: string;
};

export const formatInput = (input: string): Array<Entry> =>
  input
    .split('\n')
    .filter(Boolean)
    .map(line => {
      const [rule, password] = line.split(': ');
      const [digits, letter] = rule.split(' ');
      const [digitOne, digitTwo] = digits
        .split('-')
        .map(Number)
        .filter(Boolean);

      return {
        digitOne,
        digitTwo,
        letter,
        password,
      };
    });

export const partOne = (input: Array<any>): number =>
  input.filter(({ digitOne, digitTwo, letter, password }) => {
    const regEx = new RegExp(letter, 'gi');
    const occurencesCount = (password.match(regEx) || []).length;
    return occurencesCount >= digitOne && occurencesCount <= digitTwo;
  }).length;

export const partTwo = (input: Array<any>): number =>
  input.filter(({ digitOne, digitTwo, letter, password }) => {
    return (
      (password.charAt(digitOne - 1) === letter) !==
      (password.charAt(digitTwo - 1) === letter)
    );
  }).length;

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    const fileContent = await loadFile('02/input.txt');
    const input = formatInput(fileContent);

    console.time('Total time');

    console.time('Part one time');
    console.log('Answer one is', partOne(input));
    console.timeEnd('Part one time');

    console.log('—');

    console.time('Part two time');
    console.log('Answer two is', partTwo(input));
    console.timeEnd('Part two time');

    console.log('—');
    console.timeEnd('Total time');
  })();
}
