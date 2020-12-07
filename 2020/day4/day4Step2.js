const { sampleInput } = require('./day4SampleInput');
const { puzzleInput } = require('./day4PuzzleInput');

function parsePassport(passports) {
  const parsedPassports = [];

  passports.forEach(passport => {
    const passportData = {};
    const splitPassport = passport.replace( /\n/g," ").split(" ");

    splitPassport.forEach(dataPoint => {
      const data = dataPoint.split(':');
      const key = data[0];
      const value = data[1];

      if (key === 'byr' && value.length === 4) {
        const birthYear = Number(value);
        if (birthYear >= 1920 && birthYear <= 2002) {
          passportData[key] = value;
        }
      } else if (key === 'iyr' && value.length === 4) {
        const issueYear = Number(value);
        if (issueYear >= 2010 && issueYear <= 2020) {
          passportData[key] = value;
        }
      } else if (key === 'eyr' && value.length === 4) {
        const expirationYear = Number(value);
        if (expirationYear >= 2020 && expirationYear <= 2030) {
          passportData[key] = value;
        }
      } else if (key === 'hgt') {
        let numbers = '';
        let letters = '';
        
        for (character of value.split('')) {
          if (/[0-9]/.test(character)) {
            numbers += character;
          } else {
            letters += character;
          }
        }

        const number = Number(numbers);
        if (letters === 'cm') {
          if (number >= 150 && number <= 193) {
            passportData[key] = value;
          }
        } else if (letters === 'in') {
          if (number >= 59 && number <= 76) {
            passportData[key] = value;
          }
        }
      } else if (key === 'hcl') {
        if (value.charAt(0) === '#') {
          if (value.slice(1).split('').every(currentValue => {
            return /[0-9]/.test(currentValue) || /[A-z]/.test(currentValue);
          })) {
            passportData[key] = value;
          }
        }
      } else if (key === 'ecl') {
        const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
        if (validColors.includes(value)) {
          passportData[key] = value;
        }
      } else if (key === 'pid') {
        const allNumbers = value.split('').every(currentValue => /[0-9]/.test(currentValue));

        if (allNumbers && value.length === 9) {
          passportData[key] = value;
        }
      }
    })

    parsedPassports.push(passportData)
  })
  return parsedPassports;
}

function processPassports(passports) {
  let numberValid = 0;
  const parsedPassports = parsePassport(passports.split('\n\n'));

  for (passport of parsedPassports) {
    const passportDataPoints = Object.keys(passport);
    const allDataPresent = passportDataPoints.length === 8;
    const optionalDataMissing = passportDataPoints.length === 7 && !passportDataPoints.includes('cid');

    if (allDataPresent || optionalDataMissing) {
      numberValid++;
    }
  }

  return numberValid;
}

console.log(processPassports(puzzleInput));
// 167

console.log(processPassports(sampleInput));
// 2
