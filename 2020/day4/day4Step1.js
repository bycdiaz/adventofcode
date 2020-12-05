const { sampleInput } = require('./day4SampleInput');
const { puzzleInput } = require('./day4PuzzleInput');

function parsePassport(passports) {
  const parsedPassports = [];

  passports.forEach(passport => {
    const passportData = {};
    const splitPassport = passport.replace( /\n/g," ").split(" ");

    splitPassport.forEach(dataPoint => {
      const data = dataPoint.split(':');
      passportData[data[0]] = data[1];
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
// 208

console.log(processPassports(sampleInput));
// 2
