import "./Footer.styled";
import { StyledFooter, StyledText } from "./Footer.styled";

interface FooterProps {
	numUsers: number;
}

const Footer: React.FC<FooterProps> = ({ numUsers }) => {
	console.log(numUsers);
	return (
		<StyledFooter>
			<StyledText>
				{numUsers} users are currently using the Community Focus app
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
