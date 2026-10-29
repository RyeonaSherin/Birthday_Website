function StartCard({ onStart }) {
  return (
    <div className="start-screen">

      <div className="start-glow"></div>

      <div className="start-card">

        <div className="start-eyebrow">
          ✦ FOR YOU, ALWAYS ✦
        </div>

        <h1>
          Hey,<br />
          <span>you.</span>
        </h1>

        <p>
          I made a little universe for you.
          Every star, every planet, every little
          moment inside has a piece of us.
        </p>

        <button
          className="start-button"
          onClick={onStart}
        >
          <span>Begin the journey</span>
          <span>→</span>
        </button>

        <div className="start-hint">
          take your time · there's no rush
        </div>

      </div>

    </div>
  );
}

export default StartCard;