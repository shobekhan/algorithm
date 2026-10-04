function firstNonRepeating(numbers: number[]): number | undefined {
  const data = new Map<number, number>()

  for (const number of numbers) {
    const count = data.get(number) || 0

    data.set(number, count + 1)
  }

  for (const [number, count] of data) {
    if (count === 1) {
      return number
    }
  }

  return undefined
}

const param = [
  44, 45, 7, 83, 21,
  56, 34, 90, 18, 62,
  39, 71, 5, 48, 27,
  64, 36, 53, 45, 44
]

console.log(firstNonRepeating(param))