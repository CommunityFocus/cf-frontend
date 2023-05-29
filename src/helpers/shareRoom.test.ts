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

		describe("When the navigator.clipboard.writeText method resolves", () => {
			beforeEach(async () => {
				document.body.innerHTML = "";

				const mockClipboard = jest.fn();

				Object.assign(navigator, {
					clipboard: {
						writeText: mockClipboard,
					},
				});
			});

			it("Should create a span element with ID copiedUrlAlert", async () => {
				await shareRoom();

				const span = document.getElementById(
					"copiedUrlAlert"
				) as HTMLSpanElement;

				expect(span).not.toBeNull();
			});

			it("Should be appended to the document body", async () => {
				await shareRoom();

				const span = document.getElementById(
					"copiedUrlAlert"
				) as HTMLSpanElement;

				expect(document.body.children).toContain(span);
			});

			it("Should have the correct innerText", async () => {
				await shareRoom();

				const span = document.getElementById(
					"copiedUrlAlert"
				) as HTMLSpanElement;

				expect(span.innerText).toBe("URL Copied to Clipboard!");
			});

			it("Should not remove the span before 499ms", async () => {
				jest.useFakeTimers();

				await shareRoom();

				const span = document.getElementById(
					"copiedUrlAlert"
				) as HTMLSpanElement;

				expect(document.body.children).toContain(span);

				jest.advanceTimersByTime(499);

				expect(document.body.children).toContain(span);
			});

			it("Should remove the span after 500ms", async () => {
				jest.useFakeTimers();

				await shareRoom();

				const span = document.getElementById(
					"copiedUrlAlert"
				) as HTMLSpanElement;

				expect(document.body.children).toContain(span);

				jest.advanceTimersByTime(500);

				expect(document.body.children).not.toContain(span);
			});

			describe("When the span already exists", () => {
				let existingSpan: HTMLSpanElement;

				beforeEach(() => {
					document.body.innerHTML = "";

					existingSpan = document.createElement("span");
					existingSpan.id = "copiedUrlAlert";
					existingSpan.innerText = "URL Copied to Clipboard";

					document.body.appendChild(existingSpan);
				});

				it("Should not append more spans", async () => {
					await shareRoom();
					await shareRoom();
					await shareRoom();

					const spans = document.querySelectorAll("#copiedUrlAlert");

					expect(spans.length).toBe(1);
				});

				// TODO: 'Should not run setTimeout'
			});
		});
	});
});
