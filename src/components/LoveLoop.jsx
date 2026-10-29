function LoveLoop({ onRestart }) {
  return (
    <section className="love-loop-section">

      <div className="loop-orbit loop-orbit-one"></div>
      <div className="loop-orbit loop-orbit-two"></div>
      <div className="loop-orbit loop-orbit-three"></div>

      <div className="loop-content">

        <span className="loop-eyebrow">
          THE END ISN'T REALLY THE END
        </span>

        <div className="infinity-symbol">∞</div>

        <h1>
          Our story<br />
          <em>goes on.</em>
        </h1>

        <p>
          Until the next adventure,<br />
          the next birthday, the next little memory...
        </p>

        <div className="loop-line">
          <span>✦</span>
        </div>

        <div className="loop-love">
          Always you.
        </div>

        <div className="loop-name">
          Ryeona ♡ Vipin
        </div>

        <button className="restart-button" onClick={onRestart}>
          <span>Start from the beginning</span>
          <span>↻</span>
        </button>

        <div className="loop-footer">
          made with love · 30.10.2026
        </div>

      </div>

    </section>
  );
}

export default LoveLoop;