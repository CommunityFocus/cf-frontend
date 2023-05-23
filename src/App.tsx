import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  
  const [randomURL, setRandomURL] = useState("")
   useEffect(() => {
      axios.get("http://localhost:4000/randomid")
     .then((res) => {
      setRandomURL(res.data.string)
     }).catch(e => {
       console.log(e)
     });
  
 }, [])
 
   
  return (
    
    // reroute the user to a random url when they click a btn
    <div className="App">
      <Link to={`/${randomURL}`}><button >Start a timer</button></Link>
    </div>
  );
}