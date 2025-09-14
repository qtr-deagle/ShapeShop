import { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GiCrystalGrowth } from "react-icons/gi";

export default function SelectWindow() {
    const [crystals, setCrystals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCrystals = async () => {
            try {
                const res = await fetch('http://localhost:5000/crystals');
                const data = await res.json();
                setCrystals(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCrystals();
    }, []);

    const tierStyles = {
        "basic": 'from-gray-600 to-gray-400 border-gray-800 shadow-md hover:shadow-gray-500/50',
        "rare": 'from-blue-700 to-cyan-500 border-blue-800 shadow-md hover:shadow-cyan-400/50',
        "epic": 'from-purple-700 to-purple-300 border-purple-800 shadow-lg hover:shadow-purple-500/50',
        "cosmic": 'from-yellow-600 to-yellow-300 border-yellow-800 shadow-lg hover:shadow-pink-400/50'
    };

    const crystalIcons = {
        "basic": <a>⬜</a>,
        "rare": <a>⭐</a>,
        "epic": <a>🔮</a>,
        "cosmic": <a>💎</a>
    };

    return (
        <button className="relative">
            <h1 className="relative ml-8 bottom-3 text-4xl font-mono tracking-tight font-extrabold text-center">SELECT YOUR CRYSTAL</h1>
            <p className="relative ml-8 bottom-3 text-center text-sm text-gray-900 font-mono">Select a crystal. Begin your journey.</p>

            <div className="ml-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                {crystals.map((crystal) => (
                    <div key={crystal.id} className={`border-4 relative w-[220px] h-[260px] rounded-xl p-6 flex flex-col justify-between items-center bg-gradient-to-br ${tierStyles[crystal.tier]} shadow-lg hover:shadow-purple-500/50 transition-transform duration-300 hover:scale-105 card borderless short`}>

                        {/* Popular badge */}
                        {crystal.tier === 'epic' && (
                            <span className="absolute font-mono tracking-wide text-white top-2 left-2 bg-yellow-500 border-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.6)] text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                                POPULAR
                            </span>
                        )}

                        {/* Crystal icon */}
                        <div className="relative text-4xl bottom-6">
                            {crystalIcons[crystal.tier]}
                        </div>

                        {/* Name and price */}
                        <div className="relative text-center bottom-3">
                            <p className="relative bottom-24 left-21 max-w-[60px] text-sm text-white font-bold">{crystal.price}</p>
                        </div>

                        {/* Receive info */}
                        <p className="text-xl text-green-200 font-bold tracking-wide text-center absolute bottom-22">
                            {crystal.totalReceive}
                        </p>
                        <div className='bg-white h-12 w-full flex flex-col justify-center opacity-40 items-center absolute bottom-0 rounded-b'>
                            <p className="text-black text-xs font-semibold absolute top-2">{crystal.receive} CRYSTALS</p>
                            <p className='text-green-500 text-xs font-semibold mt-4'>+ {crystal.bonus} bonus CRYSTALS</p>
                        </div>

                    </div>
                ))}
            </div>
            {loading && <p className="text-black mt-4">Loading crystals...</p>}
        </button>
    );
}