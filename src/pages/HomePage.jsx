import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConfettiBackground from "../components/ConfettiBackground";
import FloatingHearts from "../components/FloatingHearts";
import fotoku from "../assets/images/fotoku.jpeg";

const HomePage = ({ isIOS }) => {
  const navigate = useNavigate();
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ConfettiBackground />
      <FloatingHearts />

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-pink-600 pt-4">Ucapan sekali</p>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
            lagiii 🤍
          </h1>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="mb-8"
        >
          <div
            className="w-64 h-64 mx-auto rounded-full border-4 border-pink-300 shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setShowPhoto(true)}
          >
            <img src={fotoku} alt="Foto" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-pink-600">
            Selamat Ulang Tahun Sayang!
          </h2>
          <p className="text-xl text-pink-600">🎉 22 Juni 2026  🎉</p>

          <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-lg max-w-md mx-auto border border-pink-200">
            <p className="text-pink-800 italic">
              "Karena kita Masih jauh gapapa yaa dalam bentuk virtual dulu huhu 🥹
kadonya otw jepang ditungguin yaa sayaaaang
Semoga Jala happy yaaa biar aku ikutan happy juga 😁🥰🫶🤗😍"
            </p>
            <p className="mt-4 text-right text-pink-600 font-medium">- Mahaa </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/gift")}
            className="relative overflow-hidden bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg text-xl font-bold"
          >
            <span className="button-text flex items-center">
              <span className="mr-2">🎁</span>
              Buka Hadiah Spesial
              <span className="ml-2">🎁</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setShowPhoto(false)}
          >
            {/* blur kiri kanan */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
              className="absolute left-0 top-0 h-full w-1/4 backdrop-blur-md bg-black/30"
              style={{ backdropFilter: "blur(12px)" }}
            />
            <div
              className="absolute right-0 top-0 h-full w-1/4 backdrop-blur-md bg-black/30"
              style={{ backdropFilter: "blur(12px)" }}
            />

            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              src={fotoku}
              alt="Foto"
              className="relative z-10 max-h-screen w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-4 right-4 z-20 text-white text-3xl font-bold"
              onClick={() => setShowPhoto(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
