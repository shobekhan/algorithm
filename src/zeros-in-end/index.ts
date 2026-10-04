function zerosInEnd(numbers: number[]): number[] {
  let position = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      numbers[position] = numbers[i]
      position++
    }
  }

  while (position < numbers.length) {
    numbers[position] = 0
    position++
  }

  return numbers
}

const numbers = [4, 0, 7, 0, 2, 9]

console.log(zerosInEnd(numbers))