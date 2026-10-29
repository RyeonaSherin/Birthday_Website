function FinalMessage({ onContinue }) {
  return (
    <section className="final-message-section">
      <div className="final-stars"></div>

      <div className="final-content">
        <span className="final-eyebrow">THE LAST CHAPTER</span>

        <div className="final-symbol">♡</div>

        <h1>
          And if you ever<br />
          <em>wonder...</em>
        </h1>

        <p className="final-main-message">
          I would still choose you.
        </p>

        <p className="final-sub-message">
          In every version of this story,<br />
          in every universe, in every lifetime.
        </p>

        <div className="final-divider">
          <span>✦</span>
        </div>

        <p className="final-signature">
          Happy Birthday, Ammu.
          <br />
          <strong>Here's to everything still waiting for us.</strong>
        </p>

        <div className="final-name">
          Ryeona <span>♡</span>
        </div>

        <button className="final-button" onClick={onContinue}>
          <span>Stay a little longer</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default FinalMessage;