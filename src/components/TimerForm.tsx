import React, { useState } from "react";
import { socket } from "./socket";
import { roomName } from "../../common/common";

export function TimerForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(1000).emit(
      "startCountdown",
      {
        roomName: roomName,
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
        placeholder="Enter something"
      />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
