export function Events({ events }: { events: string }) {
  console.log("events", events);
  return (
    <div>
      <h2>{events}</h2>
    </div>
  );
}
