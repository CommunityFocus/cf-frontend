import PercentList from "./PercentList";

interface PercentIconProps {
	percent: number;
	color: string;
}
const PercentIcon = ({ percent, color }: PercentIconProps): JSX.Element => {
	console.log("PercentIcon.tsx: PercentIconProps: percent: ", PercentList);

	return <div>1</div>;
};
export default PercentIcon;
