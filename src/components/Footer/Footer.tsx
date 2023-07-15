import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { StyledFooter, StyledText } from "./Footer.styled";

interface FooterProps {
	numUsers: number;
}

const Footer = ({ numUsers }: FooterProps): JSX.Element => {
	const { workAccent } = useContext(ThemeContext);

	return (
		<StyledFooter backColor={workAccent}>
			<StyledText>
				{`${numUsers} ${
					numUsers === 0 || numUsers > 1 ? "users are" : "user is"
				} currently using the Community Focus app`}
			</StyledText>
		</StyledFooter>
	);
};
export default Footer;
