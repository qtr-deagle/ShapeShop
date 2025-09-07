import { GiCrystalGrowth } from "react-icons/gi";

const Card = () => {
    return (
        <div>
            <div className="card text-xs tracking-wide inline-flex items-center gap-2 rounded-md h-9 px-4 bg-purple-600 hover:bg-purple-800 font-bold font-mono">
                <GiCrystalGrowth className="text-sm" />
            </div>
        </div>
    )
}

export default Card