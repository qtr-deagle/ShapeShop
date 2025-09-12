import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const CrystalListings = () => {
    const [crystals, setCrystals] = useState([]);
    const [selectedCrystal, setSelectedCrystal] = useState(null); // ✅ This is what onBuy will use
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

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1a002e] via-[#300036] to-[#1a002e] p-4">
            {loading && <p className="text-white">Loading crystals...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {crystals.map((crystal) => (
                    <NavBar key={crystal.id} crystal={crystal} onBuy={setSelectedCrystal} />
                ))}
            </div>
            {selectedCrystal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-[600px] max-w-full relative">
                        <button
                            onClick={() => setSelectedCrystal(null)}
                            className="absolute top-4 right-4 text-2xl font-bold text-purple-600 hover:text-purple-800"
                        >
                            <RxCross2 />
                        </button>
                        <h2 className="text-2xl font-bold text-purple-600 font-mono text-center mb-2">
                            {selectedCrystal.name}
                        </h2>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Price: {selectedCrystal.price}
                        </p>
                        <button className="block mx-auto bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded font-mono text-xs">
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CrystalListings;