import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-wide">ShapeShop</div>

            <div className="md:hidden">
                <button onClick={() => setOpen(!open)}>
                    <FiMenu size={24} />
                </button>
            </div>

            <ul className={`md:flex md:space-x-6 ${open ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full bg-slate-800 md:bg-transparent px-6 py-4 md:p-0`}>
                <li><a href="#discover" className="block py-2 hover:text-teal-300">Discover</a></li>
                <li><a href="#shop" className="block py-2 hover:text-teal-300">Shop</a></li>
                <li><a href="#news" className="block py-2 hover:text-teal-300">News</a></li>
                <li><a href="#about" className="block py-2 hover:text-teal-300">About</a></li>
            </ul>

            <button className="text-xl tracking-wide inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 bg-purple-600 hover:bg-purple-800 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold font-mono transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 text-white">
                BUY CRYSTALS
            </button>
        </nav>
    );
};

export default NavBar;