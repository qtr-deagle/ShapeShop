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
        "basic": 'from-gray-800 to-gray-700 border-gray-600 shadow-md hover:shadow-gray-500/50',
        "premium": 'from-blue-600 to-cyan-500 border-blue-400 shadow-md hover:shadow-cyan-400/50',
        "legendary": 'from-purple-900 to-purple-600 border-purple-500 shadow-lg hover:shadow-purple-500/50',
        "cosmic": 'from-pink-200 to-orange-100 border-yellow-400 shadow-lg hover:shadow-pink-400/50'
    };

    return (
        <div className="relative">
            <h1 className="text-4xl tracking-wide font-bold text-center">SELECT YOUR CRYSTAL</h1>
            <p className="text-center text-sm text-gray-800 mb-4">Select a crystal. Begin your journey.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                {crystals.map((crystal) => (
                    <div key={crystal.id} className={`border-4 relative w-[220px] h-[260px] rounded-xl p-6 flex flex-col justify-between items-center bg-gradient-to-br ${tierStyles[crystal.tier]} shadow-lg hover:shadow-purple-500/50 transition-transform duration-300 hover:scale-105 card borderless short`}>

                        {/* Popular badge */}
                        {crystal.tier === 'legendary' && (
                            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow animate-pulse">
                                POPULAR
                            </span>
                        )}

                        {/* Crystal icon placeholder */}
                        <div className="text-4xl mb-2 text-purple-300">
                            <GiCrystalGrowth className='text-xl' />
                        </div>

                        {/* Name and price */}
                        <div className="text-center">
                            <h2 className="text-base font-bold">{crystal.name}</h2>
                            <p className="text-sm mt-1">{crystal.price}</p>
                        </div>

                        {/* Buy button */}
                        <button className="mt-4 bg-purple-600 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded shadow">
                            Buy
                        </button>
                    </div>
                ))}
            </div>
            {loading && <p className="text-black mt-4">Loading crystals...</p>}
        </div>
    );
}