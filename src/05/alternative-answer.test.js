import { formatInput, partOne } from './alternative-answer';

const input = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

const formattedInput = [567, 119, 820];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(820);
});
