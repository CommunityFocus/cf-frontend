import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SERVER_URL } from "../../../common/common";
import {
	ContributorImg,
	ContributorName,
	ContributorsListContainer,
	ContributorsListItem,
	ContributorsTitle,
	ContributorsWidgetContainer,
} from "./ContributorsWidget.styled";
import { theme } from "../../../common/theme";

interface Contributor {
	login: string;
	avatar_url: string;
	url: string;
	contributions: number;
}

const ContributorsWidget = (): JSX.Element => {
	const navigate = useNavigate();
	const [contributors, setContributors] = useState<Contributor[]>([]);

	const { themeGroup } = useContext(ThemeContext);

	const { workGrey } = theme[themeGroup as keyof typeof theme];

	const navigateToContributors = (): void => {
		navigate("/contributors");
	};

	const getContributors = async (): Promise<void> => {
		axios
			.get(`${SERVER_URL}/api/v1/getContributors`)
			.then((res) => {
				// randomize the order of the contributors
				res.data.contributors.sort(() => Math.random() - 0.5);
				setContributors(res.data.contributors);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getContributors();
	}, []);

	// infinite scroll animation for the contributors widget
	const infiniteScroll = (): void => {
		const contributorsListContainer = document.getElementById(
			"contributorsListContainer"
		);
		if (contributorsListContainer) {
			contributorsListContainer.scrollTop += 0.5;
		}

		// When the list has scrolled to the bottom, add the first element to the end and remove the first element
		if (
			contributorsListContainer &&
			contributorsListContainer.scrollHeight ===
				contributorsListContainer.scrollTop +
					contributorsListContainer.clientHeight
		) {
			const contributorsListItem = document.getElementById(
				"contributorsListItem"
			);
			if (contributorsListItem) {
				contributorsListContainer.appendChild(contributorsListItem);
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			infiniteScroll();
		}, 10);
		return () => clearInterval(interval);
	}, []);

	return (
		<ContributorsWidgetContainer>
			<ContributorsTitle
				color={workGrey}
				onClick={(): void => navigateToContributors()}
			>
				Project Contributors
			</ContributorsTitle>

			<ContributorsListContainer id="contributorsListContainer">
				{contributors.map((contributor) => {
					return (
						<ContributorsListItem
							id="contributorsListItem"
							key={contributor.login}
							onClick={(): void => {
								window.open(contributor.url, "_blank");
							}}
						>
							<ContributorImg
								src={contributor.avatar_url}
								alt={contributor.login}
							/>
							<ContributorName color={workGrey}>
								{contributor.login}
							</ContributorName>
						</ContributorsListItem>
					);
				})}
			</ContributorsListContainer>
		</ContributorsWidgetContainer>
	);
};

export default ContributorsWidget;
