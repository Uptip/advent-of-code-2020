const loadFile = require('../utils').loadFile;

const answerOne = input => {
  for (let i = 0; i < input.length; i++) {
    const one = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const two = input[j];
      if (one + two === 2020) {
        return one * two;
      }
    }
  }
};

const answerTwo = input => {
  for (let i = 0; i < input.length; i++) {
    const one = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const two = input[j];
      for (let k = j + 1; k < input.length; k++) {
        const three = input[k];
        if (one + two + three === 2020) {
          return one * two * three;
        }
      }
    }
  }
};

(async () => {
  const input = await loadFile('01/input.txt');
  console.log('1. Answer is ', answerOne(input));
  console.log('2. Answer is ', answerTwo(input));
})();
