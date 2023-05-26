import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../common/common";

const App = (): JSX.Element => {
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
    <div className="App">
      <h1>Community Focus</h1>
      <button
        onClick={() => {
          navigate(`/${slugName}`);
          window.location.reload();
        }}
      >
        Join a room
      </button>
    </div>
  );
}
