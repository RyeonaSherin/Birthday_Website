import { useState } from "react";

function LockScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const correctPassword = import.meta.env.VITE_BIRTHDAY_PASSWORD || "30102005";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correctPassword && password === correctPassword) {
      setError(false);
      onUnlock();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="lock-screen">

      <div className="lock-orbit orbit-one"></div>
      <div className="lock-orbit orbit-two"></div>

      <div className="lock-card">

        <div className="lock-icon">
          <span>♡</span>
        </div>

        <div className="lock-label">
          A PRIVATE UNIVERSE
        </div>

        <h1>
          Only you<br />
          can enter.
        </h1>

        <p className="lock-description">
          There’s a little world waiting for you inside.
        </p>

        <form onSubmit={handleSubmit}>

          <div className={`password-box ${error ? "error" : ""}`}>

            <span className="key-icon">✦</span>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter the secret date"
              maxLength="8"
            />

          </div>

          {error && (
            <p className="error-message">
              Hmm... that's not the right date ✦
            </p>
          )}

          <button type="submit" className="unlock-button">
            <span>Unlock my universe</span>
            <span className="arrow">→</span>
          </button>

        </form>

        <div className="lock-footer">
          made with love · just for you
        </div>

      </div>

    </div>
  );
}

export default LockScreen;