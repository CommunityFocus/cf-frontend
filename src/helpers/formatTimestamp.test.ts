import formatTimestamp from "./formatTimestamp"

describe('formatTimestamp', () => {
    describe('Given the number of seconds under 3600', () => {
        it('should return the timestamp in MM:SS', () => {
            const timeValues: Record<number, string> = {
                0: "00:00",
                1: "00:01",
                9: "00:09",
                59: "00:59",
                60: "01:00",
                599: "09:59",
                600: "10:00",
                3599: "59:59",
            }

            for (const seconds in timeValues) {
                const expected = timeValues[seconds]
                const actual = formatTimestamp(Number(seconds))

                expect(actual).toBe(expected)
            }
        })
    })

    describe('Given the number of seconds between 3599 and 360000', () => {
        it('should return the timestamp in "HHHH:MM:SS" padding the zeros at 2 digits', () => {
            const timeValues: Record<number, string> = {
                3600: "01:00:00",
                35999: "09:59:59",
                36000: "10:00:00",
                36059: "10:00:59",
                359999: "99:59:59",
            }

            for (const seconds in timeValues) {
                const expected = timeValues[seconds]
                const actual = formatTimestamp(Number(seconds))

                expect(actual).toBe(expected)
            }
        })
    })

    describe('Given the number of seconds over 359999', () => {
        it('should return the timestamp in "HHHH:MM:SS" with additional place values as needed', () => {
            const timeValues: Record<number, string> = {
                360000: "100:00:00",
                360059: "100:00:59",
                360060: "100:01:00",
                3599999: "999:59:59",
                3600000: "1000:00:00",
                35999999: "9999:59:59",
                36000000: "10000:00:00",
            }

            for (const seconds in timeValues) {
                const expected = timeValues[seconds]
                const actual = formatTimestamp(Number(seconds))

                expect(actual).toBe(expected)
            }
        })
    })
})