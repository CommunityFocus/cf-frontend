import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../../common/common";
import { Title, Center, Button } from "./LandingPage.styled";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const LandingPage = (props: { globalUsersConnected: number }): JSX.Element => {
	const { globalUsersConnected } = props;
	const [slugName, setSlugName] = useState<string>("");
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${SERVER_URL}/api/v1/getSlug`)
			.then((res) => {
				setSlugName(res.data.slug);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Header />
			<Center>
				<Title>Community Focus</Title>
				<Button
					type="button"
					onClick={(): void => {
						navigate(`/${slugName}`);
						window.location.reload();
					}}
				>
					Join a room
				</Button>
				<Footer numUsers={globalUsersConnected} />
			</Center>
		</>
	);
};

export default LandingPage;
