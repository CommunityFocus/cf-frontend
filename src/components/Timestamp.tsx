import formatTimestamp from "../helpers/formatTimestamp";

export function Timestamp({ timestamp }: { timestamp: number }): JSX.Element {

  return (
    <div>
      <h2>{formatTimestamp(timestamp)}</h2>
    </div>
  );
}
