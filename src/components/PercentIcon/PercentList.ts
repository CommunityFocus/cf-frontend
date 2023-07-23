const path = "/src/images/percentIcons/";
const ext = ".svg";

const percents = [5, 10, 25, 35, 50, 65, 75, 80, 95, 100];

interface PercentIconProps {
	percentRemaining: number;
	color: "green" | "red";
}

export const PercentRemaining = ({
	secondsRemaining,
	originalDuration,
}: {
	secondsRemaining: number;
	originalDuration: number;
}): number => {
	const roundedPercent = Math.round(
		((originalDuration - secondsRemaining) / originalDuration) * 100
	);

	console.log("roundedPercent", roundedPercent);
	// find the next percent in the array.
	const nextPercent = percents.find((percent) => percent >= roundedPercent);
	if (!nextPercent) {
		return 0;
	}
	return nextPercent;
};

export const PercentIcon = ({
	percentRemaining,
	color,
}: PercentIconProps): string => {
	if (percentRemaining === 0) {
		return `/src/images/communityFocus.png`;
	}
	if (!["green", "red"].includes(color)) {
		console.error("Invalid color of percent icon");
	}
	if (!percents.includes(percentRemaining)) {
		console.error("Invalid percent complete for icon");
	}

	return `${path}${color}${percentRemaining}${ext}`;
};
