export function Timestamp({ timestamp }: { timestamp: string }) {
  return (
    <div>
      <h2 data-testid="timestamp">{timestamp}</h2>
    </div>
  );
}
