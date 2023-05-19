export function Events({ events }: { events: string }) {
  console.log("events", events);
  return (
    <div>
      <h2 data-testid="timestamp">{events}</h2>
    </div>
  );
}
