import { useState } from "react";

function PlanetJourney({ onContinue }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planets = [
    {
      id: 1,
      name: "THE BEGINNING",
      subtitle: "where it all started",
      message:
        "Somewhere between two people and a simple hello, something beautiful began.",
      className: "planet-one",
    },
    {
      id: 2,
      name: "US",
      subtitle: "the little things",
      message:
        "The laughs, the random conversations, the silly moments — somehow they became my favorite memories.",
      className: "planet-two",
    },
    {
      id: 3,
      name: "DISTANCE",
      subtitle: "still connected",
      message:
        "Different places never changed the little universe we created between us.",
      className: "planet-three",
    },
    {
      id: 4,
      name: "FOREVER",
      subtitle: "where we're going",
      message:
        "Maybe the best part of our story is that we haven't reached the ending yet.",
      className: "planet-four",
    },
  ];

  return (
    <section className="planet-journey">

      <div className="journey-heading">
        <span>CHAPTER ONE</span>

        <h1>
          Our little
          <br />
          <em>universe.</em>
        </h1>

        <p>
          Four little worlds.
          <br />
          One story.
        </p>
      </div>

      <div className="orbit-system">

        <div className="orbit orbit-large"></div>
        <div className="orbit orbit-medium"></div>
        <div className="orbit orbit-small"></div>

        <div className="sun">
          <span>♡</span>
        </div>

        {planets.map((planet) => (
          <button
            key={planet.id}
            className={`planet ${planet.className}`}
            onClick={() => setSelectedPlanet(planet)}
          >
            <span className="planet-glow"></span>
            <span className="planet-surface"></span>

            <span className="planet-number">
  {planet.id}
</span>

<span className="planet-label">
  {planet.name}
</span>
          </button>
        ))}

      </div>

      <div className="journey-hint">
        ✦ tap a planet to explore ✦
      </div>

      {selectedPlanet && (
        <div
          className="planet-modal"
          onClick={() => setSelectedPlanet(null)}
        >
          <div
            className="planet-modal-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedPlanet(null)}
            >
              ×
            </button>

            <span className="modal-number">
              0{selectedPlanet.id}
            </span>

            <h2>{selectedPlanet.name}</h2>

            <span className="modal-subtitle">
              {selectedPlanet.subtitle}
            </span>

            <p>{selectedPlanet.message}</p>

            <div className="modal-line"></div>

            <button
  className="continue-button"
  onClick={() => {
    if (selectedPlanet.id === 4) {
      onContinue();
    } else {
      setSelectedPlanet(null);
    }
  }}
>
              Continue exploring
              <span>→</span>
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default PlanetJourney;