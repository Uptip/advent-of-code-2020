import { formatInput, partOne, partTwo } from './';

const input = `1721
979
366
299
675
1456
`;

const formattedInput = [1721, 979, 366, 299, 675, 1456];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(514579);
});

test('gets correct part two sample answer', () => {
  expect(partTwo(formattedInput)).toBe(241861950);
});
