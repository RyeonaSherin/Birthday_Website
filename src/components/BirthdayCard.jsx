function BirthdayCard({ onContinue }) {
  return (
    <section className="birthday-section">

      <div className="birthday-glow"></div>

      <div className="birthday-card">

        <div className="birthday-top">
          <span>CHAPTER TWO</span>
          <div className="tiny-star">✦</div>
        </div>

        <div className="birthday-content">

          <p className="birthday-small">
            TODAY IS A LITTLE MORE SPECIAL
          </p>

          <h1>
            Happy Birthday,
            <br />
            <em>my Ammu.</em>
          
          </h1>

          {/* Vipin's childhood photo */}
          <div className="birthday-photo-frame">
            <img
              src="public/photos/img4.jpg"
              alt="My Ammu as a little boy"
              className="birthday-childhood-photo"
            />
          </div>

          <div className="birthday-divider">
            <span>✦</span>
          </div>

          <p className="birthday-message">
            If I could give you one thing today,
            it would be the chance to see yourself
            through my eyes — and understand just
            how special you are to me.
          </p>

          <p className="birthday-signature">
            Always yours,
            <br />
            <strong>MonAmour♡</strong>
          </p>

          <button
            className="birthday-continue"
            onClick={onContinue}
          >
            <span>There’s more for you</span>
            <span>→</span>
          </button>

        </div>

        <div className="birthday-bottom">
          <span>30 · 10 · 2005</span>
          <span>✦</span>
          <span>made with love</span>
        </div>

      </div>

    </section>
  );
}

export default BirthdayCard;