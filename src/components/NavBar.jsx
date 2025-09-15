import { useState } from 'react';
import BuyCrystalsModal from './BuyCrystalsModal';
import { GiCrystalGrowth } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <nav className="fixed z-20 w-full bg-gradient-to-r from-[#27232b] via-[#372a44] to-[#6441a5] text-white px-4 py-2 flex flex-wrap items-center justify-between border-b-4 border-purple-500 shadow-[0_0_20px_rgba(128,0,255,0.6)]">
      <div className="flex items-center space-x-4">
        <a href='/' className="text-4xl animate-pulse ml-4">🔮</a>
        <div>
          <a href='/' className="hidden sm:block shadow-text text-2xl font-bold ml-3 hover:text-purple-300 transition-colors duration-300 font-mono text-white shadow-text">
            SHAPESHOP
          </a>
          <p className="ml-3 text-xs font-mono text-purple-200 hidden sm:block ">
            Cosmic Geometry Emporium
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-1 mt-1 py-4 inline-flex items-center justify-center bg-[#1a002e] p-4 border-2 border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] w-fit mx-auto">
          <GiCrystalGrowth className="text-blue-300 text-sm mr-2" />
          <span className="flex text-purple-300 font-bold text-xs tracking-wide">
            CRYSTALS: <span className="text-purple-400 ml-2">0</span>
          </span>
        </div>

        <button onClick={() => setShowModal(true)} className="card-button text-xs tracking-wide inline-flex items-center gap-2 h-9 px-4 bg-purple-600 hover:bg-purple-800 font-bold font-mono">
          <GiCrystalGrowth className="text-sm" />
          BUY CRYSTALS
        </button>

        {showModal && <BuyCrystalsModal onClose={() => setShowModal(false)} />}

      </div>
    </nav>
  );
};