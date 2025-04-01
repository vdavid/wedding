import { RandomGenerator } from './RandomGenerator'
import { describe, expect, it } from 'vitest'

describe('RandomGenerator', () => {
    it('should generate the same sequence of numbers for the same seed', () => {
        const seed = 12345
        const generator1 = new RandomGenerator(seed)
        const generator2 = new RandomGenerator(seed)

        const numbers1 = Array.from({ length: 5 }, () => generator1.random())
        const numbers2 = Array.from({ length: 5 }, () => generator2.random())

        expect(numbers1).toEqual(numbers2)
    })

    it('should generate different sequences of numbers for different seeds', () => {
        const seed1 = 12345
        const seed2 = 67890
        const generator1 = new RandomGenerator(seed1)
        const generator2 = new RandomGenerator(seed2)

        let areAllEqual = true
        for (let i = 0; i < 1000; i++) {
            if (generator1.random() !== generator2.random()) {
                areAllEqual = false
                break
            }
        }
        expect(areAllEqual).toBe(false)
    })

    it('should generate numbers in the range [0,1)', () => {
        const seed = 12345
        const generator = new RandomGenerator(seed)

        for (let i = 0; i < 1000; i++) {
            const random = generator.random()
            expect(random).toBeGreaterThanOrEqual(0)
            expect(random).toBeLessThan(1)
        }
    })
})
