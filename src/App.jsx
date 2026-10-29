import { useState, useEffect, useRef } from "react";
import Galaxy from "./components/Galaxy";
import LockScreen from "./components/LockScreen";
import StartCard from "./components/StartCard";
import PlanetJourney from "./components/PlanetJourney";
import BirthdayCard from "./components/BirthdayCard";
import Balloons from "./components/Balloons";
import LoveLetter from "./components/LoveLetter";
import Fireflies from "./components/Fireflies";
import FinalMessage from "./components/FinalMessage";
import LoveLoop from "./components/LoveLoop";
import "./App.css";

function App() {
  const [step, setStep] = useState("lock");
const musicRef = useRef(null);

useEffect(() => {
  if (step === "unlocking" && musicRef.current) {
    musicRef.current.volume = 0.35;
    musicRef.current.play().catch(() => {});
  }
}, [step]);
  const handleUnlock = () => {
    setStep("unlocking");

    setTimeout(() => {
      setStep("start");
    }, 1200);
  };

  return (
    <div className={`app ${step === "unlocking" ? "unlocking" : ""}`}>
       <audio
      ref={musicRef}
      src="/music/Uyire-Un-Uyirena.mp3"
      loop
    />
     <Galaxy />

      {step === "lock" && (
        <LockScreen onUnlock={handleUnlock} />
      )}

      {step === "unlocking" && (
        <div className="transition-screen">
          <div className="transition-orb"></div>
          <div className="transition-text">
            <span>WELCOME TO YOUR</span>
            <strong>UNIVERSE</strong>
          </div>
        </div>
      )}

      {step === "start" && (
        <StartCard onStart={() => setStep("journey")} />
      )}

{step === "journey" && (
  <PlanetJourney
    onContinue={() => setStep("birthday")}
  />
)}

{step === "birthday" && (
  <BirthdayCard
    onContinue={() => setStep("balloons")}
  />
)}

{step === "balloons" && (
  <Balloons
    onContinue={() => setStep("letter")}
  />
)}
{step === "letter" && (
  <LoveLetter
    onContinue={() => setStep("fireflies")}
  />
)}
{step === "fireflies" && (
  <Fireflies
    onContinue={() => setStep("final")}
  />
)}
   {step === "final" && (
        <FinalMessage
          onContinue={() => setStep("loop")}
        />
      )}

     {step === "loop" && (
  <LoveLoop onRestart={() => setStep("lock")} />
)}
    </div>
  );
}

export default App;