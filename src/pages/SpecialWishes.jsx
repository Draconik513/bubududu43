import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import vidioWishes from "../assets/images/Wishes.jpg";
import fotoHeart from "../assets/images/fotoheart.jpg";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);
  const [showPhotoFull, setShowPhotoFull] = useState(false);
  const [sparks, setSparks] = useState([]);
  const confettiRef = useRef(null);

  const launchEffects = () => {
    // confetti burst
    confetti({ particleCount: 120, spread: 100, origin: { y: 0.6 }, colors: ["#f472b6","#e879f9","#fb7185","#fbbf24","#fff"] });
    setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { x: 0.2, y: 0.5 }, colors: ["#f472b6","#c084fc","#fff"] }), 300);
    setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { x: 0.8, y: 0.5 }, colors: ["#fb7185","#fbbf24","#fff"] }), 500);
    // hearts confetti
    const heart = confetti.shapeFromText({ text: "💖", scalar: 2 });
    confetti({ shapes: [heart], particleCount: 30, spread: 160, origin: { y: 0.4 }, scalar: 2 });
    // sparks
    setSparks(Array.from({ length: 18 }, (_, i) => ({ id: i, angle: (i / 18) * 360 })));
    setTimeout(() => setSparks([]), 1200);
  };

  const handleOpen = () => {
    setShowHeart(true);
    launchEffects();
  };

  const wishes = `
Boleh yaaa, aku merayakan hari spesial mu ini lewat tulisan ini?
katanya makin dewasa, ulang tahun bukan lagi seberapa ramai pesta, tapi siapaaa yg tetap tinggal saat dunia lagi gak baik baik ajaaa 🥺....
dan lewaatt moment ini aku mau jadi orang yang tetep tinggal pas kamu lagi baik baik aja atau gak lagi baik baik ajaaa semogaa terus begitu....
Isi tulisannn ini gak lebih dari sekedar harapan dan doa...
Makasih yaaaa udaah izinin aku kenal kamu lebih deket dan jadi bagian ceritamu di sepanjang taun ini....
Semogaa di usia inii Jalaa tangki cintanya terisi penuh, duniamu terasaa lebih teduhh, dan perlahan mimpi mimpi itu tumbuh menjadi utuh🤍 aku sayang jalaa🥰
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <img
            src={vidioWishes}
            alt="wishes"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => showHeart ? setShowHeart(false) : handleOpen()}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan" : "Pacarmu😙"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              {/* background glow */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ background: "radial-gradient(ellipse at center, rgba(244,114,182,0.5) 0%, rgba(0,0,0,0.85) 70%)" }}
              />

              {/* cahaya rays */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    width: "50vw",
                    height: "3px",
                    background: "linear-gradient(to right, rgba(255,182,193,0.8), transparent)",
                    rotate: `${i * 30}deg`,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: [0, 1.2, 1], opacity: [0, 0.7, 0.3] }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                />
              ))}

              {/* spark burst */}
              {sparks.map((s) => (
                <motion.div
                  key={s.id}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-yellow-300"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((s.angle * Math.PI) / 180) * 160,
                    y: Math.sin((s.angle * Math.PI) / 180) * 160,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              ))}

              {/* floating hearts */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  style={{ left: `${10 + i * 11}%`, bottom: "10%" }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -300, opacity: 0 }}
                  transition={{ duration: 2 + i * 0.3, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {["💖","💗","💕","🌸","✨","💫","🎀","💝"][i]}
                </motion.div>
              ))}

              {/* foto */}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                {/* glow ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{ width: 280, height: 280, background: "radial-gradient(circle, rgba(244,114,182,0.6) 0%, transparent 70%)" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <img
                  src={fotoHeart}
                  alt="foto"
                  onClick={() => setShowPhotoFull(true)}
                  className="w-64 h-64 rounded-full object-cover border-4 border-pink-300 shadow-2xl cursor-pointer relative z-10"
                />
              </motion.div>

              {/* close */}
              <button
                className="absolute top-4 right-4 z-20 text-white text-3xl font-bold"
                onClick={() => setShowHeart(false)}
              >✕</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen foto */}
        <AnimatePresence>
          {showPhotoFull && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center"
              onClick={() => setShowPhotoFull(false)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
              <div className="absolute left-0 top-0 h-full w-1/4" style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.3)" }} />
              <div className="absolute right-0 top-0 h-full w-1/4" style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.3)" }} />
              <motion.img
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                src={fotoHeart}
                alt="foto"
                className="relative z-10 max-h-screen w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-4 right-4 z-20 text-white text-3xl font-bold"
                onClick={() => setShowPhotoFull(false)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
