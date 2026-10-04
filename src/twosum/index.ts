function twoSum(numbers: number[], target: number): number[] {
  const seen = new Map<number, number>()

  for (let i = 0; i < numbers.length; i++) {
    const currentValue = numbers[i]
    const complement = target - currentValue

    if (seen.has(complement)) {
        console.log(seen)
        return [seen.get(complement)!, i]
    }

    seen.set(currentValue, i)
  }

  return []
}

const numbers = [
  12, 45, 7, 83, 21,
  56, 34, 90, 18, 62,
  39, 71, 5, 48, 27,
  64, 36, 53, 29, 44
]

console.log(twoSum(numbers, 100))