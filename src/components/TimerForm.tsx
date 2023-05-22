import React, { useState } from "react";
import { socket } from "./socket";

export function TimerForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(1000).emit(
      "startCountdown",
      {
        roomName: window.location.href.split("/")[3],
        durationInSeconds: parseInt(value),
      },
      () => {
        setIsLoading(false);
      }
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="number"
        placeholder="Enter a number"
        className="input input-bordered w-full max-w-xs"
      />

      <button type="submit" disabled={isLoading} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
