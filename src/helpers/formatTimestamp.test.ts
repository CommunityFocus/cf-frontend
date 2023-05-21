import formatTimestamp from "./formatTimestamp"

describe('formatTimestamp', () => {

 describe('Given the number of seconds', () => {
    it('should return the number of seconds', () => {
        const seconds = 5
        const expected = 5
        const actual = formatTimestamp(seconds)
        expect(actual).toBe(expected)
    })
 })
})