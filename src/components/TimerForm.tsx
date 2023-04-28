import React, { useState } from "react";
import { socket } from "./socket";

export function TimerForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(1000).emit("startCountdown", {
      roomName: window.location.href.split("/")[4],
      durationInSeconds: parseInt(value),
    }, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} 
        // has to be a number
        value={value}
        type="number"
        placeholder="Enter something"


      />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
