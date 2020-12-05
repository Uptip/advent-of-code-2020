import {
  formatInput,
  partOne,
  partTwo,
  isValidYear,
  isValidHeight,
  isValidHexColor,
  isValidEyeColor,
  isValidPassportId,
} from '.';

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
  const testedEyeColors = [
    { color: 'amb', expectedResult: true },
    { color: 'blu', expectedResult: true },
    { color: 'brn', expectedResult: true },
    { color: 'gry', expectedResult: true },
    { color: 'grn', expectedResult: true },
    { color: 'hzl', expectedResult: true },
    { color: 'oth', expectedResult: true },
    { color: 'wll', expectedResult: false },
    { color: 'why', expectedResult: false },
  ];
  testedEyeColors.forEach(({ color, expectedResult }) => {
    expect(isValidEyeColor(color)).toBe(expectedResult);
  });
});

test('gets correct height validation results', () => {
  const testedHeights = [
    { height: 'foobar', expectedResult: false },
    { height: '190', expectedResult: false },
    { height: 'cm', expectedResult: false },
    { height: 'in', expectedResult: false },
    { height: '58in', expectedResult: false },
    { height: '77in', expectedResult: false },
    { height: '149cm', expectedResult: false },
    { height: '194cm', expectedResult: false },
    { height: '59in', expectedResult: true },
    { height: '76in', expectedResult: true },
    { height: '150cm', expectedResult: true },
    { height: '193cm', expectedResult: true },
  ];

  testedHeights.forEach(({ height, expectedResult }) => {
    expect(isValidHeight(height)).toBe(expectedResult);
  });
});

test('gets correct year validation results', () => {
  const testedYears = [
    { min: 1900, max: 2000, year: 1950, expectedResult: true },
    { min: 1960, max: 2000, year: 1950, expectedResult: false },
    { min: 1960, max: 2000, year: 2020, expectedResult: false },
    { min: 1960, max: 2000, year: 'aaaa', expectedResult: false },
  ];

  testedYears.forEach(({ min, max, year, expectedResult }) => {
    expect(isValidYear({ min, max })(year)).toBe(expectedResult);
  });
});

test('gets correct hex color validation results', () => {
  const testedColors = [
    { color: '#bada55', expectedResult: true },
    { color: '#badass', expectedResult: false },
    { color: '#e91e63', expectedResult: true },
    { color: '#000000', expectedResult: true },
    { color: '#ffffff', expectedResult: true },
  ];

  testedColors.forEach(({ color, expectedResult }) => {
    expect(isValidHexColor(color)).toBe(expectedResult);
  });
});

test('gets correct passport id validation results', () => {
  const testedPassportIds = [
    { passportId: '123456789', expectedResult: true },
    { passportId: '1234567890', expectedResult: false },
    { passportId: '00123456789', expectedResult: false },
    { passportId: '12345678', expectedResult: false },
    { passportId: '12345678a', expectedResult: false },
  ];

  testedPassportIds.forEach(({ passportId, expectedResult }) => {
    expect(isValidPassportId(passportId)).toBe(expectedResult);
  });
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
