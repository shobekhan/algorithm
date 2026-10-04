function firstRepeating(numbers: number[]): number {
  const data = new Map<number, number>()

  for (const number of numbers) {
    const count = data.get(number) || 0

    data.set(number, count + 1)
  }

  let maxCount = 0
  let mostFrequent = numbers[0]

  for (const [number, count] of data) {
    if (count > maxCount) {
      maxCount = count
      mostFrequent = number
    }
  }

  return mostFrequent
}

const dataParam = [
  44, 45, 7, 83, 21,
  56, 34, 90, 18, 62,
  39, 71, 5, 48, 27,
  64, 36, 53, 29, 44
]

console.log(firstRepeating(dataParam))