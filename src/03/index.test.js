import { formatInput, partOne, partTwo } from './';

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

const formattedInput = [
  { digitOne: 1, digitTwo: 3, letter: 'a', password: 'abcde' },
  { digitOne: 1, digitTwo: 3, letter: 'b', password: 'cdefg' },
  { digitOne: 2, digitTwo: 9, letter: 'c', password: 'ccccccccc' },
];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(2);
});

test('gets correct part two sample answer', () => {
  expect(partTwo(formattedInput)).toBe(1);
});
