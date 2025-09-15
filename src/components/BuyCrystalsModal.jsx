import SelectWindow from './SelectWindow';
import { RxCross2 } from "react-icons/rx";

export default function BuyCrystalsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate-modalOpen duration-300 shadow-[0_0_100px_rgba(255,255,255,0.3)] bg-[#9B7EBD] border-4 border-[#3B1E54] text-black p-4 sm:p-8 rounded-xl w-[90%] sm:w-[900px] h-[90%] sm:h-[600px] max-w-full relative">
        <button onClick={onClose} className="absolute z-10 top-6 right-7 text-4xl font-bold text-black hover:text-gray-600">
          <RxCross2 />
        </button>
        <SelectWindow />
      </div>
    </div>
  );
}