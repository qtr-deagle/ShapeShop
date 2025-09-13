import SelectWindow from './SelectWindow';
import { RxCross2 } from "react-icons/rx";
import { GiCrystalGrowth } from "react-icons/gi";

const boxStyles = [
  "bg-gradient-to-br from-purple-200 to-purple-400 border-purple-500",
  "bg-gradient-to-tr from-indigo-100 to-purple-300 border-indigo-400",
  "bg-gradient-to-bl from-pink-100 to-purple-200 border-pink-400",
  "bg-gradient-to-r from-violet-100 to-purple-300 border-violet-400",
  "bg-gradient-to-tl from-fuchsia-100 to-purple-300 border-fuchsia-400",
  "bg-gradient-to-b from-purple-100 to-purple-500 border-purple-600",
];

export default function BuyCrystalsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="duration-200 shadow-[0_0_150px_rgba(255,255,255,0.5)] translate-x-[-4px] translate-y-[-4px] bg-[#D4BEE4] border-4 border-[#3B1E54] text-black p-4 sm:p-8 rounded-xl w-[90%] sm:w-[900px] h-[90%] sm:h-[600px] max-w-full relative">
        <button onClick={onClose} className="absolute z-10 top-6 right-8 text-4xl font-bold text-black hover:text-gray-600">
          <RxCross2 />
        </button>
        <SelectWindow />
      </div>
    </div>
  );
}