import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import fotoAtas from "../assets/images/atas.jpg";
import fotoKenangan from "../assets/images/couple.jpg";
import fotoBunga from "../assets/images/bunga.jpg";

const Memories = ({ isIOS }) => {
  const [flowerBloom, setFlowerBloom] = useState(false);
  const [showBungaFull, setShowBungaFull] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full text-center"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          私たちのことだけ 🤍
        </h1>

        <motion.div whileHover={{ scale: isIOS ? 1 : 1.02 }} className="mb-8">
          <img
            src={fotoKenangan}
            alt="Kita Berdua"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-white"
            style={{ transform: "translateZ(0)" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8 border border-pink-100"
        >
         <h2 className="text-2xl font-semibold text-rose-600 mb-4">
  Permintaan Maafku di Hari Ulang Tahunmu
</h2>

<div className="text-left text-pink-800 space-y-4 leading-relaxed">
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Di hari yang seindah ini...
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    Maafkan tanganku yang belum bisa menggenggammu dan raga yang belum bisa memelukmu....
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    Maafkan aku yang hadir hanya dalam bentuk doa bukan pelukan.....
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.5 }}
  >
    yang harus kamu tau, aku slalu rinduuuuuu 🥺
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.8 }}
  >
    tapi semogaaa semua itu cepat berlalu....
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2.1 }}
  >
    agar rindunya terobati 🥲
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2.4 }}
  >
    satu lagiii Semangaaat Buat ujiannya yaaa sayaang 🤗 Semogaaa di permudah di lancarkan semuanya aamiin.....
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2.7 }}
  >
    Aku sayang jalaaa🤍
  </motion.p>
</div>

        </motion.div>

        <motion.button
          whileHover={{ scale: isIOS ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFlowerBloom(!flowerBloom)}
          className="relative overflow-hidden bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-white/30"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="button-text">
            {flowerBloom ? "Close Picture" : "Picture about us"}
          </span>
        </motion.button>

        {flowerBloom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
          >
            {/* Foto atas */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-rose-200"
            >
              <img
                src={fotoAtas}
                alt="atas"
                className="w-72 h-72 object-cover"
              />
            </motion.div>

            {/* Bunga dari gambar dengan animasi keren */}
            <div className="relative flex items-center justify-center w-72 h-72">
              {/* glow background */}
              <motion.div
                className="absolute rounded-full"
                style={{ width: 260, height: 260, background: "radial-gradient(circle, rgba(251,113,133,0.35) 0%, rgba(244,114,182,0.15) 50%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* partikel kelopak beterbangan */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-lg"
                  style={{ left: "50%", top: "50%" }}
                  animate={{
                    x: [0, Math.cos((i / 8) * 2 * Math.PI) * 90],
                    y: [0, Math.sin((i / 8) * 2 * Math.PI) * 90 - 20],
                    opacity: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                >
                  🌸
                </motion.div>
              ))}

              {/* foto bunga utama - bisa diklik */}
              <motion.img
                src={fotoBunga}
                alt="Bunga"
                className="relative z-10 w-56 h-56 object-cover rounded-full border-4 border-rose-300 shadow-2xl cursor-pointer"
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 120 }}
                style={{ filter: "drop-shadow(0 0 18px rgba(244,114,182,0.7))" }}
                onClick={() => setShowBungaFull(true)}
              />

              {/* shine sweep */}
              <motion.div
                className="absolute z-20 rounded-full pointer-events-none"
                style={{
                  width: 220, height: 220,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)",
                  borderRadius: "50%",
                }}
                animate={{ opacity: [0, 0.8, 0], rotate: [0, 30] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>
          </motion.div>
        )}

        {flowerBloom && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center text-pink-600 mt-6 italic text-lg"
          >
            🌸 bunga ini , gak perlu aku jelasin lagi yaah 😂 udah ku spill dan bahas di chat hehe..... tolong di terimaaa yaa sayaang🥰
          </motion.p>
        )}

        {/* Modal fullscreen bunga */}
        <AnimatePresence>
          {showBungaFull && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden"
              onClick={() => setShowBungaFull(false)}
            >
              {/* bg gelap dengan gradient pink */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ background: "radial-gradient(ellipse at center, rgba(244,114,182,0.5) 0%, rgba(0,0,0,0.85) 70%)" }}
              />

              {/* cahaya rays berputar */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-left pointer-events-none"
                  style={{
                    width: "60vw", height: "2px",
                    background: "linear-gradient(to right, rgba(255,182,193,0.6), transparent)",
                    translateX: "-50%", translateY: "-50%",
                  }}
                  animate={{ rotate: [i * 22.5, i * 22.5 + 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              ))}

              {/* partikel kelopak melayang */}
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl pointer-events-none"
                  style={{ left: `${Math.random() * 90 + 5}%`, top: "110%" }}
                  animate={{ y: ["-10vh", "-110vh"], x: [0, (i % 2 === 0 ? 40 : -40)], opacity: [0, 1, 0], rotate: [0, 360] }}
                  transition={{ duration: 4 + i * 0.4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {["🌸", "🌺", "🌷", "✨", "🌹", "💮", "🏵️"][i % 7]}
                </motion.div>
              ))}

              {/* bintang berkelip */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
                  style={{ left: `${(i * 37) % 95 + 2}%`, top: `${(i * 53) % 90 + 5}%` }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                  transition={{ duration: 1.5 + (i % 4) * 0.5, delay: i * 0.1, repeat: Infinity }}
                />
              ))}

              {/* gambar bunga dengan efek bergerak */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.3, rotate: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                {/* glow ring berputar */}
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: "92vmin", height: "92vmin",
                    background: "conic-gradient(from 0deg, rgba(244,114,182,0.5), rgba(251,207,232,0.2), rgba(217,70,239,0.5), rgba(244,114,182,0.5))",
                    borderRadius: "50%",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                {/* ring berdetak */}
                <motion.div
                  className="absolute rounded-full border-2 border-pink-400 pointer-events-none"
                  style={{ width: "86vmin", height: "86vmin" }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* gambar bunga — goyang kecil */}
                <motion.img
                  src={fotoBunga}
                  alt="Bunga"
                  className="object-cover rounded-full border-4 border-rose-300 shadow-2xl"
                  style={{
                    width: "60vmin", height: "60vmin",
                    filter: "drop-shadow(0 0 30px rgba(244,114,182,0.9)) brightness(1.08) saturate(1.2)"
                  }}
                  animate={{
                    scale: [1, 1.04, 1],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* sparkle pojok */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} text-xl pointer-events-none`}
                    animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0], rotate: [0, 180] }}
                    transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 1 }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>

              {/* tombol tutup */}
              <button
                className="absolute top-4 right-4 z-20 text-white text-3xl font-bold"
                onClick={() => setShowBungaFull(false)}
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

export default Memories;
