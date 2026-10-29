import { useState } from "react";

function Balloons({ onContinue }) {
  const [popped, setPopped] = useState([]);
  const [bursting, setBursting] = useState(null);
  const [memory, setMemory] = useState(null);

  const balloons = [
    {
      id: 1,
      symbol: "♡",
      className: "balloon-one",
      type: "image",
      src: "/photos/img1.jpeg",
    },
    {
      id: 2,
      symbol: "✦",
      className: "balloon-two",
      type: "video",
      src: "/videos/video1.mp4",
    },
    {
      id: 3,
      symbol: "∞",
      className: "balloon-three",
      type: "image",
      src: "/photos/img2.jpeg",
    },
    {
      id: 4,
      symbol: "♡",
      className: "balloon-four",
      type: "video",
      src: "/videos/video2.mp4",
    },
    {
      id: 5,
      symbol: "✦",
      className: "balloon-five",
      type: "image",
      src: "/photos/img3.jpeg",
    },
  ];

  const popBalloon = (id) => {
    if (popped.includes(id) || bursting !== null) return;

    const selectedMemory = balloons.find(
      (balloon) => balloon.id === id
    );

    setBursting(id);

    setTimeout(() => {
      setPopped((prev) => [...prev, id]);
      setBursting(null);
      setMemory(selectedMemory);
    }, 400);
  };

  const allPopped = popped.length === balloons.length;

  return (
    <section className="balloon-section">

      {/* HEADING */}
      <div className="balloon-heading">
        <span>CHAPTER THREE</span>

        <h1>
          Pop a little
          <br />
          <em>love.</em>
        </h1>

        <p>
          There are a few surprises
          <br />
          hiding up there.
        </p>
      </div>


      {/* BALLOONS */}
      <div className="balloon-field">

        {balloons.map((balloon) => {

          if (popped.includes(balloon.id)) {
            return null;
          }

          return (
            <button
              key={balloon.id}
              className={`balloon ${balloon.className} ${
                bursting === balloon.id
                  ? "balloon-popping"
                  : ""
              }`}
              onClick={() => popBalloon(balloon.id)}
            >

              <span className="balloon-shine"></span>

              <span className="balloon-symbol">
                {balloon.symbol}
              </span>

              <span className="balloon-string"></span>

              {bursting === balloon.id && (
                <span className="balloon-burst">
                  {Array.from({ length: 12 }).map(
                    (_, index) => (
                      <i key={index}></i>
                    )
                  )}
                </span>
              )}

            </button>
          );
        })}

      </div>


      {/* MEMORY POPUP */}
      {memory && (
        <div
          className="memory-overlay"
          onClick={() => setMemory(null)}
        >

          <div
            className="memory-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="memory-close"
              onClick={() => setMemory(null)}
            >
              ×
            </button>

           <div className="memory-media">

  {memory.type === "image" ? (
    <img
      src={memory.src}
      alt="A special memory"
      onLoad={() => console.log("IMAGE LOADED:", memory.src)}
      onError={() => console.log("IMAGE FAILED:", memory.src)}
    />
 
) : (
  <video
    key={memory.src}
    src={memory.src}
    autoPlay
    muted
    controls
    playsInline
    preload="auto"
    onCanPlay={() =>
      console.log("VIDEO READY:", memory.src)
    }
    onError={(e) =>
      console.error(
        "VIDEO ERROR:",
        memory.src,
        e.currentTarget.error
      )
    }
  />
)}

</div>

            <div className="memory-caption">

              <span>
                ✦ A LITTLE MEMORY
              </span>

              <p>
                A moment I'll always keep close. ♡
              </p>

            </div>

          </div>

        </div>
      )}


      {/* COUNTER */}
      {!allPopped && (
        <div className="balloon-counter">
          {popped.length} / {balloons.length} popped
        </div>
      )}


      {/* COMPLETION */}
      {allPopped && (
        <div className="balloons-complete">

          <span className="complete-star">
            ✦
          </span>

          <p>
            YOU FOUND THEM ALL
          </p>

          <h2>
            One more little
            <br />
            <em>surprise.</em>
          </h2>

          <button
            className="letter-button"
            onClick={onContinue}
          >
            <span>Open it</span>
            <span>→</span>
          </button>

        </div>
      )}

    </section>
  );
}

export default Balloons;