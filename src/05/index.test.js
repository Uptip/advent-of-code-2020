import { formatInput, partOne, partTwo } from './';

const input = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

const formattedInput = [
  {
    rowCharacters: 'BFFFBBF',
    columnCharacters: 'RRR',
    row: 70,
    column: 7,
    seatId: 567,
  },
  {
    rowCharacters: 'FFFBBBF',
    columnCharacters: 'RRR',
    row: 14,
    column: 7,
    seatId: 119,
  },
  {
    rowCharacters: 'BBFFBBF',
    columnCharacters: 'RLL',
    row: 102,
    column: 4,
    seatId: 820,
  },
];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(820);
});
