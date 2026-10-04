function firstDuplicate(numbers: number[]): number | undefined {
  const seen = new Set<number>()

  for (const currentValue of numbers) {
    if (seen.has(currentValue)) {
      return currentValue
    }

    seen.add(currentValue)
  }

  return undefined
}

const data = [
  12, 45, 7, 83, 21,
  56, 34, 90, 18, 62,
  39, 71, 5, 48, 27,
  64, 36, 53, 29, 44, 12
]

console.log(firstDuplicate(data))