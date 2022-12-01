import fs from 'fs';


const data = fs.readFileSync(new URL('input.txt', import.meta.url), 'utf8');
const lines = data.split('\n');

const calories = lines.reduce((acc, line) => {
  if (line === "") { return acc.concat([0]) }
  const calories = parseInt(line, 10)
  acc[acc.length - 1] += calories
  return acc
}, [0])

// Part 1
const maxCal = Math.max(...calories)
console.log("Max calories:", maxCal)

// Part 2
const top3 = calories.sort((a, b) => b - a).slice(0, 3)
const sumTop3 = top3.reduce((acc, c) => acc + c, 0)
console.log("Sum of top 3:", sumTop3)
