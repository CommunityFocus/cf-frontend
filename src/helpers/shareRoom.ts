export default async (): Promise<void> => {
	try {
		await navigator.clipboard.writeText(window.location.href);

		let copiedUrlAlert = document.getElementById(
			"copiedUrlAlert"
		) as HTMLSpanElement;

		if (!copiedUrlAlert) {
			copiedUrlAlert = document.createElement("span");
			copiedUrlAlert.id = "copiedUrlAlert";
			copiedUrlAlert.innerText = "URL Copied to Clipboard!";

			document.body.appendChild(copiedUrlAlert);

			setTimeout(() => {
				document.body.removeChild(copiedUrlAlert);
			}, 500);
		}
	} catch (err) {
		console.error(`Copy failed with error: ${err}`);
	}
};
