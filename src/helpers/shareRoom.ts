import { toast } from "react-toastify";

export default async (): Promise<void> => {
	try {
		await navigator.clipboard.writeText(window.location.href);

		toast("Copied link to clipboard! Share it with friends!");
	} catch (err) {
		console.error(`Copy failed with error: ${err}`);
	}
};
