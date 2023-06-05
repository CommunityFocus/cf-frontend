import "./Footer.styled";
import { StyledFooter, StyledText } from "./Footer.styled";

interface FooterProps {
	numUsers: number;
}

const Footer: React.FC<FooterProps> = ({ numUsers }) => {
	return (
		<StyledFooter>
			<StyledText>
				{numUsers} members are currently using the Community Focus app
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
