import { loadFile } from '../utils/index';

type Passport = {
  byr?: string;
  iyr?: string;
  eyr?: string;
  hgt?: string;
  hcl?: string;
  ecl?: string;
  pid?: string;
  cid?: string;
};

type PassportValidityInput = {
  passport: Passport;
  shallValidateFields?: boolean;
};

const formatPassport = (input: string): Passport =>
  input
    .replace(/\s/gi, '\n')
    .split('\n')
    .filter(Boolean)
    .map(passportChunk => passportChunk.split(':'))
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr[0]]: curr[1],
      }),
      {},
    );

export const formatInput = (input: string): Array<Passport> =>
  input.split('\n\n').map(formatPassport);

const isValidYear = ({ value, min, max }): boolean => {
  const regex = /^\d{4}$/;
  if (!regex.test(value)) {
    return false;
  }
  return Number(value) >= min && Number(value) <= max;
};

const isValidHeight = ({ value }): boolean => {
  if (value.includes('in')) {
    const parsedValue = Number(value.replace('in', ''));
    return parsedValue >= 59 && parsedValue <= 76;
  }
  if (value.includes('cm')) {
    const parsedValue = Number(value.replace('cm', ''));
    return parsedValue >= 150 && parsedValue <= 193;
  }
  return false;
};

const isValidHexColor = ({ value }): boolean => /^#[0-9a-f]{6}$/.test(value);

const isValidEyeColor = ({ value }): boolean =>
  ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);

const isValidPassportId = ({ value }): boolean => /^\d{9}$/.test(value);

const requiredFields = ['iyr', 'hcl', 'byr', 'eyr', 'hgt', 'ecl', 'pid'];

const fieldsValidations = {
  byr: (value: string) => isValidYear({ value, min: 1920, max: 2002 }),
  iyr: (value: string) => isValidYear({ value, min: 2010, max: 2020 }),
  eyr: (value: string) => isValidYear({ value, min: 2020, max: 2030 }),
  hgt: (value: string) => isValidHeight({ value }),
  hcl: (value: string) => isValidHexColor({ value }),
  ecl: (value: string) => isValidEyeColor({ value }),
  pid: (value: string) => isValidPassportId({ value }),
};

const isFieldValid = ({ field, value }) => fieldsValidations[field](value);

const isPassportValid = ({
  passport,
  shallValidateFields,
}: PassportValidityInput) => {
  for (const requiredField of requiredFields) {
    if (!passport[requiredField]) {
      return false;
    }
    if (!shallValidateFields) {
      continue;
    }
    if (
      !isFieldValid({ field: requiredField, value: passport[requiredField] })
    ) {
      return false;
    }
  }
  return true;
};

export const partOne = (input: Array<Passport>): number =>
  input.filter((passport: Passport) => isPassportValid({ passport })).length;

export const partTwo = (input: Array<Passport>): number =>
  input.filter((passport: Passport) =>
    isPassportValid({ passport, shallValidateFields: true }),
  ).length;

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    const fileContent = await loadFile('04/input.txt');
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
