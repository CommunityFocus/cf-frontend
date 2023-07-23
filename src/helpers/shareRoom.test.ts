import shareRoom from "./shareRoom";

describe("shareRoom", () => {
	describe("When shareRoom function is called", () => {
		it("Should call the navigator.clipboard.writeText method", async () => {
			const mockClipboard = jest.fn();

			Object.assign(navigator, {
				clipboard: {
					writeText: mockClipboard,
				},
			});

			await shareRoom();

			expect(mockClipboard).toHaveBeenCalled();
		});

		describe("When navigator.clipboard.writeText method throws an error", () => {
			it("Should log an error in console.error", async () => {
				const mockConsoleError = jest.fn();
				const mockClipboard = jest.fn().mockRejectedValueOnce("Error");

				Object.assign(console, {
					error: mockConsoleError,
				});

				Object.assign(navigator, {
					clipboard: {
						writeText: mockClipboard,
					},
				});

				await shareRoom();

				expect(mockConsoleError).toHaveBeenCalledWith(
					`Copy failed with error: Error`
				);
			});
		});
	});
});
