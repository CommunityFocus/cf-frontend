
import { socket } from "./socket";

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect} className="btn btn-secondary">Connect</button>
      <button onClick={disconnect} className="btn btn-secondary">Disconnect</button>
    </>
  );
}
