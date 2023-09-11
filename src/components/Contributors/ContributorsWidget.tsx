import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SERVER_URL } from "../../../common/common";
import {
	ContributionGraphLinks,
	ContributorImg,
	ContributorName,
	ContributorsListContainer,
	ContributorsListItem,
	ContributorsTitle,
	ContributorsWidgetContainer,
	StyledList,
} from "./ContributorsWidget.styled";
import { theme } from "../../../common/theme";

interface Contributor {
	login: string;
	avatar_url: string;
	url: string;
	contributions: number;
}

const ContributorsWidget = (props: { isHomePage: boolean }): JSX.Element => {
	const { isHomePage } = props;
	const navigate = useNavigate();
	const [contributors, setContributors] = useState<Contributor[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const { themeGroup } = useContext(ThemeContext);

	const { workGrey } = theme[themeGroup as keyof typeof theme];

	const navigateToContributors = (): void => {
		navigate("/contributors");
	};

	const repoContributorsLink = [
		"https://github.com/CommunityFocus/cf-frontend/graphs/contributors",
		"https://github.com/CommunityFocus/cf-backend/graphs/contributors",
		"https://github.com/CommunityFocus/CommunityFocus/graphs/contributors",
	];

	const getContributors = async (): Promise<void> => {
		setIsLoaded(false);
		axios
			.get(`${SERVER_URL}/api/v1/getContributors`)
			.then((res) => {
				// randomize the order of the contributors
				res.data.contributors.sort(() => Math.random() - 0.5);
				setContributors(res.data.contributors);
				setIsLoaded(true);
			})
			.catch((err) => {
				console.error(err);
				setIsLoaded(true);
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
			// clone the first element and append it to the end of the list
			const contributorsListItemClone =
				contributorsListItem?.cloneNode(true);

			if (contributorsListItemClone) {
				contributorsListContainer.removeChild(
					contributorsListItem as Node
				);
				contributorsListContainer.appendChild(
					contributorsListItemClone as Node
				);
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
				{!isHomePage || contributors.length > 0
					? "Project Contributors"
					: ""}
			</ContributorsTitle>

			{isLoaded && !isHomePage && contributors.length === 0 ? (
				<>
					<ContributionGraphLinks color={workGrey}>
						Unable to load contributors. Please check the links
						below.
					</ContributionGraphLinks>

					<StyledList color={workGrey}>
						{repoContributorsLink.map((link) => {
							return (
								<li
									key={link}
									style={{
										listStyleType: "none",
										margin: "0 10px",
									}}
								>
									<a
										href={link}
										target="_blank"
										rel="noreferrer"
										style={{
											color: workGrey,
											textDecoration: "none",
										}}
									>
										{link}
									</a>
								</li>
							);
						})}
					</StyledList>
				</>
			) : (
				""
			)}

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
