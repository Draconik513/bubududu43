import { useState, useEffect, useRef } from "react";
import laguUltah from "../assets/audio/laguultah.mp3";

const BackgroundMusic = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMusicPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isMusicPlaying]);

  // listen sinyal mute dari GiftWrapper
  useEffect(() => {
    const check = () => {
      const muted = sessionStorage.getItem("muteBg") === "true";
      setIsMusicPlaying(!muted);
    };
    window.addEventListener("storage", check);
    window.addEventListener("muteBgChanged", check);
    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("muteBgChanged", check);
    };
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Audio Tersembunyi */}
      <audio
        ref={audioRef}
        src={laguUltah}
        loop
        autoPlay
      />

      {/* Tombol Kontrol */}
      <div className="fixed bottom-20 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg flex items-center border border-pink-200">
          <button
            onClick={toggleMusic}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            {isMusicPlaying ? "🔊" : "🔇"}
          </button>
          <span className="ml-2 text-sm text-pink-600 font-medium">
            {isMusicPlaying ? "Music ON" : "Music OFF"}
          </span>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;