import { Link } from "react-router-dom";
export default function App() {
  return (
    // reroute the user to "/:room" when they click the btn (mefdev)
    <div className="App">
      <Link to={"/:room"}><button>Start a timer</button></Link>
    </div>
  );
}