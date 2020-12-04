import {
  formatInput,
  partOne,
  partTwo,
  isValidYear,
  isValidHeight,
  isValidHexColor,
  isValidEyeColor,
  isValidPassportId,
} from './';

const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

const formattedInput = [
  {
    ecl: 'gry',
    pid: '860033327',
    eyr: '2020',
    hcl: '#fffffd',
    byr: '1937',
    iyr: '2017',
    cid: '147',
    hgt: '183cm',
  },
  {
    iyr: '2013',
    ecl: 'amb',
    cid: '350',
    eyr: '2023',
    pid: '028048884',
    hcl: '#cfa07d',
    byr: '1929',
  },
  {
    hcl: '#ae17e1',
    iyr: '2013',
    eyr: '2024',
    ecl: 'brn',
    pid: '760753108',
    byr: '1931',
    hgt: '179cm',
  },
  {
    hcl: '#cfa07d',
    eyr: '2025',
    pid: '166559648',
    iyr: '2011',
    ecl: 'brn',
    hgt: '59in',
  },
];

test('formats input correctly', async () => {
  expect(formatInput(input)).toStrictEqual(formattedInput);
});

test('gets correct part one sample answer', () => {
  expect(partOne(formattedInput)).toBe(2);
});

test('gets correct eye color validation results', () => {
  const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  const invalidEyeColors = ['wll', 'wht'];
  for (const validEyeColor of validEyeColors) {
    expect(isValidEyeColor(validEyeColor)).toBe(true);
  }
  for (const invalidEyeColor of invalidEyeColors) {
    expect(isValidEyeColor(invalidEyeColor)).toBe(false);
  }
});

test('gets correct height validation results', () => {
  expect(isValidHeight('foobar')).toBe(false);
  expect(isValidHeight('190')).toBe(false);
  expect(isValidHeight('cm')).toBe(false);
  expect(isValidHeight('in')).toBe(false);
  expect(isValidHeight('58in')).toBe(false);
  expect(isValidHeight('59in')).toBe(true);
  expect(isValidHeight('76in')).toBe(true);
  expect(isValidHeight('77in')).toBe(false);
  expect(isValidHeight('149cm')).toBe(false);
  expect(isValidHeight('150cm')).toBe(true);
  expect(isValidHeight('193cm')).toBe(true);
  expect(isValidHeight('194cm')).toBe(false);
});

test('gets correct year validation results', () => {
  expect(isValidYear({ min: 1900, max: 2000 })(1950)).toBe(true);
  expect(isValidYear({ min: 1960, max: 2000 })(1950)).toBe(false);
  expect(isValidYear({ min: 1960, max: 2000 })(2020)).toBe(false);
  expect(isValidYear({ min: 1960, max: 2000 })('aaaa')).toBe(false);
});

test('gets correct hex color validation results', () => {
  expect(isValidHexColor('#bada55')).toBe(true);
  expect(isValidHexColor('#badass')).toBe(false);
  expect(isValidHexColor('#e91e63')).toBe(true);
  expect(isValidHexColor('#000000')).toBe(true);
  expect(isValidHexColor('#ffffff')).toBe(true);
});

test('gets correct passport id validation results', () => {
  expect(isValidPassportId('123456789')).toBe(true);
  expect(isValidPassportId('1234567890')).toBe(false);
  expect(isValidPassportId('00123456789')).toBe(false);
  expect(isValidPassportId('12345678')).toBe(false);
  expect(isValidPassportId('12345678a')).toBe(false);
});

test('gets correct part two sample answer', () => {
  const invalidPassportsInput = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

  const validPassportsInput = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;

  expect(partTwo(formatInput(invalidPassportsInput))).toBe(0);
  expect(partTwo(formatInput(validPassportsInput))).toBe(
    formatInput(validPassportsInput).length,
  );
});
