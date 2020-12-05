import { run, range } from '../utils/index';

const getDecimalValue = (characters: string): number =>
  characters.split('').reduce((acc, curr) => {
    if (curr === 'F' || curr === 'L') {
      return acc.slice(0, acc.length / 2);
    }
    return acc.slice(acc.length / 2);
  }, range(2 ** characters.length))[0];

type BoardingPass = {
  rowCharacters: string;
  columnCharacters: string;
  row: number;
  column: number;
  seatId: number;
};

export const formatInput = (input: string): BoardingPass[] =>
  input
    .split('\n')
    .filter(Boolean)
    .map(boardingPass => ({
      rowCharacters: boardingPass.slice(0, 7),
      columnCharacters: boardingPass.slice(7),
    }))
    .map(boardingPass => ({
      ...boardingPass,
      row: getDecimalValue(boardingPass.rowCharacters),
      column: getDecimalValue(boardingPass.columnCharacters),
    }))
    .map(boardingPass => ({
      ...boardingPass,
      seatId: boardingPass.row * 8 + boardingPass.column,
    }));

export const partOne = (input: BoardingPass[]): number =>
  Math.max(...input.map(({ seatId }) => seatId));

export const partTwo = (input: BoardingPass[]): number =>
  range(partOne(input))
    .filter(
      targetSeatId =>
        !Boolean(input.find(({ seatId }) => seatId === targetSeatId)),
    )
    .filter(
      missingSeatId =>
        Boolean(input.find(({ seatId }) => seatId === missingSeatId - 1)) &&
        Boolean(input.find(({ seatId }) => seatId === missingSeatId + 1)),
    )[0];

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  run({ pathToInput: '05/input.txt', partOne, partTwo, formatInput });
}
