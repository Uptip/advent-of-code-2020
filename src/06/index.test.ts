import { formatInput, partOne, partTwo } from './';

const input = `abc

a
b
c

ab
ac

a
a
a
a

b
`;

const formattedInput = [
  ['abc'],
  ['a', 'b', 'c'],
  ['ab', 'ac'],
  ['a', 'a', 'a', 'a'],
  ['b'],
];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(11);
});

test('gets correct part two sample answer', () => {
  expect(partTwo(formattedInput)).toBe(6);
});
