import startCountdown from "./startCountdown";

describe("startCountdown", () => {
	const clientTimerStore: Record<string, ReturnType<typeof setInterval>> = {
		timer: null as unknown as ReturnType<typeof setInterval>,
	};
	const durationInSeconds = 10;
	let clearIntervalSpy: jest.SpyInstance;
	let setIntervalSpy: jest.SpyInstance;
	let mockSetTimestamp: React.Dispatch<React.SetStateAction<number>>;

	beforeEach(() => {
		jest.useFakeTimers();
		clearIntervalSpy = jest.spyOn(global, "clearInterval");
		setIntervalSpy = jest.spyOn(global, "setInterval");
		mockSetTimestamp = jest.fn();
	});

	afterEach(() => {
		jest.clearAllTimers();
	});

	describe("when the timer is already running", () => {
		it("should clear the timer", () => {
			clientTimerStore.timer = jest.fn() as unknown as ReturnType<
				typeof setInterval
			>;

			startCountdown({
				durationInSeconds,
				clientTimerStore,
				setTimestamp: mockSetTimestamp,
			});

			expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
		});

		it("should start another setInterval", () => {
			clientTimerStore.timer = jest.fn() as unknown as ReturnType<
				typeof setInterval
			>;

			startCountdown({
				durationInSeconds,
				clientTimerStore,
				setTimestamp: mockSetTimestamp,
			});

			expect(setIntervalSpy).toHaveBeenCalledTimes(1);
		});
		it("should start the setInterval with 1000 ms", () => {
			clientTimerStore.timer = jest.fn() as unknown as ReturnType<
				typeof setInterval
			>;

			startCountdown({
				durationInSeconds,
				clientTimerStore,
				setTimestamp: mockSetTimestamp,
			});

			expect(setIntervalSpy).toHaveBeenCalledTimes(1);
			expect(setIntervalSpy).toHaveBeenCalledWith(
				expect.any(Function),
				1000
			);
		});

		describe("when the durationInSeconds is 0 or less", () => {
			it("should set the timestamp to 0", () => {
				startCountdown({
					durationInSeconds: 0,
					clientTimerStore,
					setTimestamp: mockSetTimestamp,
				});

				expect(mockSetTimestamp).toHaveBeenCalled();
				expect(mockSetTimestamp).toHaveBeenCalledWith(0);
				expect(mockSetTimestamp).toHaveBeenCalledTimes(1);
			});
			it("should clear the timer", () => {
				clientTimerStore.timer = jest.fn() as unknown as ReturnType<
					typeof setInterval
				>;
				startCountdown({
					durationInSeconds: 0,
					clientTimerStore,
					setTimestamp: mockSetTimestamp,
				});

				expect(clearIntervalSpy).toHaveBeenCalledTimes(2);
			});
		});

		describe("when the durationInSeconds is greater than 0", () => {
			it("should clear the timer", () => {
				clientTimerStore.timer = jest.fn() as unknown as ReturnType<
					typeof setInterval
				>;
				startCountdown({
					durationInSeconds,
					clientTimerStore,
					setTimestamp: mockSetTimestamp,
				});

				expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
			});

			it("should set the timestamp to the durationInSeconds with the decremented value by 1", () => {
				startCountdown({
					durationInSeconds,
					clientTimerStore,
					setTimestamp: mockSetTimestamp,
				});
				jest.advanceTimersByTime(1000);

				expect(mockSetTimestamp).toHaveBeenCalledWith(9);
			});

			describe("when the durationInSeconds changes multiple times", () => {
				it("should set the timestamp to the durationInSeconds with the decremented value by 1", () => {
					startCountdown({
						durationInSeconds,
						clientTimerStore,
						setTimestamp: mockSetTimestamp,
					});
					jest.advanceTimersByTime(1000);
					expect(mockSetTimestamp).toHaveBeenCalledWith(9);

					jest.advanceTimersByTime(1000);
					expect(mockSetTimestamp).toHaveBeenCalledWith(8);

					jest.advanceTimersByTime(1000);
					expect(mockSetTimestamp).toHaveBeenCalledWith(7);
				});
			});
		});
	});
});
