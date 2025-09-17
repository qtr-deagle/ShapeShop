import React from 'react';

const Hero = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3c3642] via-[#372a44] to-[#6a38b5] text-white">
            <div className="absolute bottom-24 left-6 z-10">
                <h2 className="text-3xl md:text-7xl font-extrabold text-white leading-tight tracking-wide">
                    Modular Motion<br />
                    <span className='text-purple-300'>Cosmic Precision</span>
                </h2>
            </div>
        </main>
    );
};

export default Hero;