import { StyledFooter, StyledText } from "./Footer.styled";

interface FooterProps {
	numUsers: number;
}

const Footer = ({ numUsers }: FooterProps): JSX.Element => {
	return (
		<StyledFooter>
			<StyledText>
				{numUsers} users are currently using the Community Focus app
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
