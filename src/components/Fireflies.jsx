import { useState } from "react";

function Fireflies({ onContinue }) {
  const [caught, setCaught] = useState([]);
  const [flying, setFlying] = useState(null);

  const messages = [
    "You make ordinary days feel special. ♡",
    "I'm so lucky that our paths crossed.",
    "Your smile will always be one of my favorite things.",
    "No distance can make you less important to me.",
    "I hope this year gives you everything you deserve.",
    "You will always have a little piece of my heart.",
    "Happy birthday to my favorite person. ✦",
  ];

const coupleGifs = [
  "/gifs/couple1.gif",
  "/gifs/couple2.gif",
  "/gifs/couple3.gif",
  "/gifs/couple4.gif",
  "/gifs/couple5.gif",
  "/gifs/couple6.gif",
  "/gifs/couple7.gif",
];
  const flies = messages.map((message, index) => ({
    id: index,
    message,
    className: `fly-${index + 1}`,
  }));

  const catchFly = (fly) => {
    if (caught.includes(fly.id) || flying !== null) return;

    setFlying(fly.id);

    setTimeout(() => {
      setCaught((prev) => [...prev, fly.id]);
      setFlying(null);
    }, 900);
  };

  const complete = caught.length === messages.length;

  return (
    <section className="firefly-section">

      <div className="firefly-intro">
        <span>CHAPTER FIVE</span>

        <h1>
          Catch a little
          <br />
          <em>magic.</em>
        </h1>

        <p>
          Every little light carries
          <br />
          something from my heart.
        </p>
      </div>


      {/* JAR */}

      <div className="collection-jar">

        <div className="jar-glow"></div>

        <div className="jar-lid"></div>

        <div className="jar-neck"></div>

        <div className="jar-glass">

          <div className="jar-fireflies">

            {caught.map((id) => (
              <span
                key={id}
                className={`jar-firefly jar-firefly-${id + 1}`}
              />
            ))}

          </div>

          <div className="jar-shine"></div>

        </div>

        <div className="jar-count">
          {caught.length} / {messages.length}
        </div>

      </div>


      {/* FLYING FIREFLIES */}

      {!complete && (
        <div className="flying-field">

          {flies.map((fly) => {

            if (caught.includes(fly.id)) return null;

            return (
              <button
                key={fly.id}
                className={`flying-firefly ${fly.className} ${
                  flying === fly.id ? "fly-catching" : ""
                }`}
                onClick={() => catchFly(fly)}
              >
                <span className="fly-core"></span>
                <span className="fly-trail"></span>
              </button>
            );
          })}

        </div>
      )}


     
{caught.length > 0 && (
  <div className="caught-message" key={caught[caught.length - 1]}>
    <img
      className="couple-gif"
      src={coupleGifs[caught[caught.length - 1]]}
      alt="Cute couple animation"
    />

    <span>✦ A LITTLE MEMORY ✦</span>

    <p>{messages[caught[caught.length - 1]]}</p>
  </div>
)}


      {!complete && (
        <div className="catch-hint">
          ✦ catch the lights ✦
        </div>
      )}


      {/* COMPLETE */}

      {complete && (
        <div className="firefly-complete">

          <span className="complete-star">✦</span>

          <p>EVERY LITTLE MESSAGE IS HOME</p>

          <h2>
            A little light
            <br />
            <em>for you.</em>
          </h2>

          <button
            className="firefly-continue"
            onClick={onContinue}
          >
            <span>One last thing</span>
            <span>→</span>
          </button>

        </div>
      )}

    </section>
  );
}

export default Fireflies;