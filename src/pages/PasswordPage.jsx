import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PasswordPage = ({ isIOS }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlePress = (val) => {
    if (input.length >= 4) return;
    const newInput = input + val;
    setInput(newInput);
    setError(false);

    if (newInput.length === 4) {
      if (newInput === "2306") {
        sessionStorage.setItem("unlocked", "true");
        setTimeout(() => navigate("/countdown"), 300);
      } else {
        setTimeout(() => {
          setError(true);
          setInput("");
        }, 300);
      }
    }
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    setError(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <p className="text-5xl mb-4">🔐</p>
        <h1 className="text-2xl font-bold text-pink-600">Masukkan Password</h1>
        <p className="text-pink-400 text-sm mt-1">Hanya untuk orang spesial 🤍</p>
      </motion.div>

      {/* Dots */}
      <div className="flex gap-4 mb-8">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: input.length > i ? 1.2 : 1,
              backgroundColor: error
                ? "#f87171"
                : input.length > i
                ? "#ec4899"
                : "#fbcfe8",
            }}
            className="w-5 h-5 rounded-full border-2 border-pink-300"
          />
        ))}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-sm mb-4"
          >
            Password salah, coba lagi 💔
          </motion.p>
        )}
      </AnimatePresence>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <motion.button
            key={num}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePress(String(num))}
            className="w-20 h-20 rounded-full bg-white border-2 border-pink-200 text-pink-600 text-2xl font-bold shadow-md"
          >
            {num}
          </motion.button>
        ))}
        <div />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePress("0")}
          className="w-20 h-20 rounded-full bg-white border-2 border-pink-200 text-pink-600 text-2xl font-bold shadow-md"
        >
          0
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
          className="w-20 h-20 rounded-full bg-white border-2 border-pink-200 text-pink-400 text-xl font-bold shadow-md"
        >
          ⌫
        </motion.button>
      </div>
    </div>
  );
};

export default PasswordPage;
