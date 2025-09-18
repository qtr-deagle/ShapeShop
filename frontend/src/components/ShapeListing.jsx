import { GiCrystalGrowth } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { LuPyramid } from "react-icons/lu";
import { PiSphereBold } from "react-icons/pi";
import { RxBoxModel } from "react-icons/rx";
import { TbHexagonalPrism } from "react-icons/tb";
import { HiOutlineCircleStack } from "react-icons/hi2";

const rarityColors = {
    RARE: "bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]",
    EPIC: "bg-purple-500 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]",
    LEGENDARY: "bg-yellow-500 border-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.6)]",
    MYTHIC: "bg-red-500 border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.6)]",
    ANCIENT: "bg-orange-500 border-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.6)]",
    DIVINE: "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
};

const shapeIcons = {
    "Plasma Cube": <FiBox />,
    "Neon Pyramid": <LuPyramid />,
    "Sphere of Light": <PiSphereBold />,
    "Hexagonal Prism": <RxBoxModel />,
    "Dark Square": <TbHexagonalPrism />,
    "Stack Circle": <HiOutlineCircleStack />
};

const ShapeListing = ({ shape }) => {
    return (
        <div className="card text-xs tracking-wide inline-flex items-center gap-2 rounded-md h-9 px-6 
  border-4 border-[#a855f7] bg-purple-600 hover:bg-purple-900 font-bold font-mono">
            <div className="relative w-full h-[120px] bg-gradient-to-b from-[#3f1a5e] via-[#a855f7]/60 to-[#3f1a5e] border-purple-300 border-2 text-white flex justify-center mb-32 items-center ">
                <span className="text-7xl rotating">
                    {shapeIcons[shape.Name]}
                </span>
                <div className={`absolute rounded-lg px-1 h-5 top-2 right-2 border-2 font-mono ${rarityColors[shape.Rarity]}`}>
                    <span className="text-xs px-1">{shape.Rarity}</span>
                </div>
            </div>

            <h3 className="absolute text-xl font-bold text-purple-200 mb-2 text-center font-mono mt-9 max-w-48 max-h-8">
                {shape.Name}
            </h3>

            <div className="absolute inline-flex gap-1 text-sm text-purple-300 mt-20 text-center font-mono max-w-48 max-h-8">
                <GiCrystalGrowth className="text-sm mt-0.5" />
                {shape.Price}
            </div>

            <button className="absolute card-button text-white tracking-widest w-48 mb-4 bg-purple-600 hover:bg-purple-800 p-2 rounded-md border-2 border-black mx-auto my-56">
                ACQUIRE SHAPE
            </button>
        </div>
    )
}

export default ShapeListing;