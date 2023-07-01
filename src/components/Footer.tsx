import { StyledFooter, StyledText } from "./Footer.styled";

interface FooterProps {
	numUsers: number;
}

const Footer = ({ numUsers }: FooterProps): JSX.Element => {
	return (
		<StyledFooter>
			<StyledText>
				{`${numUsers} ${
					numUsers === 0 || numUsers > 1 ? "users are" : "user is"
				} currently using the Community Focus app`}
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
