function longestConsecutive(numbers: number[]): number[] | undefined {
    const dataSet = new Set(numbers)

    let longest: number[] = []

    for (const activeNumber of dataSet) {

        const check = activeNumber - 1

        // Only start when this is the beginning of a sequence
        // iterates for 6 and 7 in this example
        if (dataSet.has(check)) {
            continue
        }

        const current: number[] = []
        let value = activeNumber

        while (dataSet.has(value)) {
            current.push(value)
            value++
        }

        if (current.length > longest.length) {
            longest = current
        }
    }

    return longest
}

const data = [12, 5, 6, 7, 48, 27]

console.log(longestConsecutive(data))