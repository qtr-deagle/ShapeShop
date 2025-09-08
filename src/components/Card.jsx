import { FiBox } from "react-icons/fi";

const Card = () => {
    return (
        <div className="static flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1a002e] via-[#300036] to-[#1a002e] p-4">
            <div className="static card text-xs tracking-wide inline-flex items-center gap-2 rounded-md h-9 px-6 bg-purple-600 hover:bg-purple-800 font-bold font-mono">
                <div className="w-full h-[120px] bg-gradient-to-b from-[#3f1a5e] via-[#a855f7]/60 to-[#3f1a5e] border-purple-300 border-2 text-white flex justify-center mb-32 items-center">
                    <FiBox className="text-7xl rotating" />
                </div>

                <button className="absolute card-button text-white tracking-widest w-48 mb-4 bg-purple-600 hover:bg-purple-800 p-2 rounded-md border-2 border-black shadow-[0_0_15px_rgba(147,51,234,0.5)] mx-auto my-56">
                    ACQUIRE SHAPE
                </button>
            </div>
        </div>
    )
}

export default Card