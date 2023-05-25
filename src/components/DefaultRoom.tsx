import { useNavigate } from "react-router-dom";

function DefaultRoom() {
    const Navigate = useNavigate();
  return (
    <>
      <h1>This room is not available.</h1>
      <button
        onClick={() => {
            Navigate('/')
        }}
      >Back</button>
    </>
  );
}

export default DefaultRoom;
