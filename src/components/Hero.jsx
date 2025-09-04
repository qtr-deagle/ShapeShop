import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3c3642] via-[#372a44] to-[#6a38b5] text-white">
            <div className="text-center px-6">
                <h1 className="text-5xl font-bold mb-4">Welcome to ShapeShop</h1>
                <p className="text-lg max-w-xl mx-auto">
                    Crafting bold, motion-rich experiences for modern web explorers.
                </p>
            </div>
        </section>
    );
};

export default Hero;