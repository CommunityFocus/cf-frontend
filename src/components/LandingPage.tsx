function LandingPage() {
  function randomRoom() {
    const room = Math.random().toString(36).substring(2, 7);
    window.location.href = `/${room}`;
  }
  
  return (
    <div className="App">
      <h1>Welcome to CommunityFocus.app</h1>
      <button onClick={randomRoom} className="btn btn-primary">
        Go to a room
      </button>
    </div>
  );
}

export default LandingPage;
