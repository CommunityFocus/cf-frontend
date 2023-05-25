import shareRoom from "./shareRoom";

describe('shareRoom', () => {
    describe('When shareRoom function is called', () => {
        it('Should call the navigator.clipboard.writeText method', async () => {
            const mockClipboard = jest.fn();

            Object.assign(navigator, {
                clipboard: {
                    writeText: mockClipboard
                },
            });

            await shareRoom();

            expect(mockClipboard).toHaveBeenCalled();
        })

        describe('When navigator.clipboard.writeText method throws an error', () => {
            it('Should log an error in console.error', async () => {
                const mockConsoleError = jest.fn();
                const mockClipboard = jest.fn().mockRejectedValueOnce('Error');

                Object.assign(console, {
                    error: mockConsoleError,
                });

                Object.assign(navigator, {
                    clipboard: {
                        writeText: mockClipboard,
                    },
                });

                await shareRoom();

                expect(mockConsoleError).toHaveBeenCalledWith(`Copy failed with error: Error`);
            })
        })

        describe("When the navigator.clipboard.writeText method resolves", () => {

            beforeEach(async () => {
                const mockClipboard = jest.fn().mockResolvedValueOnce("Success");

                Object.assign(navigator, {
                    clipboard: {
                        writeText: mockClipboard,
                    },
                });
            });

            afterEach(() => {
                document.body.innerHTML = "";
            });

            it("should append a span to the document body", async () => {
                await shareRoom();

                const span = document.getElementById('copiedUrlAlert');

                expect(span).not.toBeNull();
            });

            it("should be appended to the document body", async () => {
                await shareRoom();

                const span = document.getElementById('copiedUrlAlert') as HTMLSpanElement;

                expect(span.parentElement).toBe(document.body);
            });

            it("should have the correct innerText", async () => {
                await shareRoom();

                const span = document.getElementById('copiedUrlAlert') as HTMLSpanElement;

                expect(span.innerText).toBe("URL Copied to Clipboard!");
            });

            it("should remove the span after 500ms", async () => {
                jest.useFakeTimers();
                
                await shareRoom();

                const span = document.getElementById('copiedUrlAlert') as HTMLSpanElement;

                expect(span).not.toBeNull();

                jest.advanceTimersByTime(500);

                expect(span.parentElement).toBeNull();
            });

            describe('When the span already exists', () => {

                let span = document.getElementById('copiedUrlAlert') as HTMLSpanElement;

                beforeEach(() => {
                    span = document.createElement('span')
                    span.id = 'copiedUrlAlert'
                    span.innerText = 'URL Copied to Clipboard'

                    document.body.appendChild(span)
                });

                afterEach(() => {
                    document.body.removeChild(span)
                })

                it('Should not append more spans', async () => {
                    //jest.useFakeTimers(); - is this needed

                    await shareRoom();
                    await shareRoom();
                    await shareRoom();

                    const spans = document.querySelectorAll('#copiedUrlAlert');

                    //jest.advanceTimersByTime(500); - is this needed

                    expect(spans.length).toBe(1);
                })
            })

        });
    });

})







