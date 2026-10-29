function LoveLetter({ onContinue }) {
  return (
    <section className="letter-section">

      <div className="letter-glow"></div>

      <div className="letter-heading">
        <span>CHAPTER FOUR</span>
        <p>A little something<br />from my heart.</p>
      </div>

      <div className="letter-envelope">

        <div className="envelope-top">
          <span>FOR MY AMMU</span>
          <span>✦</span>
        </div>

        <div className="letter-paper">

          <div className="letter-date">
            30 · 10 · 2026
          </div>

          <h1>
            To my
            <br />
            <em>favorite person.</em>
          </h1>

          <div className="letter-line"></div>

          <p>
            I don't think I could ever fit everything
            I feel for you into one letter.
          </p>

          <p>
            But if there's one thing I want you to
            remember today, it's this —
          </p>

          <p>
            No matter how many miles are between us,
            you will always have a little piece of my
            heart with you.
          </p>

          <p className="letter-final">
            Happy Birthday, Ammu.
            <br />
            I love you more than words can hold.
          </p>

          <div className="letter-sign">
            <span>with all my love,</span>
            <strong>Ryeona ♡</strong>
          </div>

        </div>

        <button
          className="letter-continue"
          onClick={onContinue}
        >
          <span>Keep going</span>
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default LoveLetter;