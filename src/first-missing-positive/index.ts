function firstMissingPositive(numbers: number[]): number {
  const dataSet = new Set(numbers)

  for (let i = 1; i <= numbers.length + 1; i++) {
    if (!dataSet.has(i)) {
      return i
    }
  }

  return 1
}

const dataSet = [3, 4, 5, 1, 2]

console.log(firstMissingPositive(dataSet))