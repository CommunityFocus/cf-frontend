import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../common/common";
export default function App() {
  const [slugName, setSlugName] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/v1/getslug`)
      .then((res) => {
        setSlugName(res.data.string);
      })
      .catch((e) => {
        console.error("getSlug:", e);
      });
  }, []);
  return (
    // reroute the user to a random slug when they click a btn
    <div className="App">
      <Link to={`/${slugName}`}>
        <button>Start a timer</button>
      </Link>
    </div>
  );
}
