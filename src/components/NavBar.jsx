import { motion } from 'framer-motion';

export const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-8 py-4 flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-md fixed top-0 z-50">
      <h2 className="text-purple-400 font-bold text-xl tracking-wide">ShapeShop</h2>
      <ul className="flex gap-6 text-sm text-purple-200">
        <li className="hover:text-white transition">Home</li>
        <li className="hover:text-white transition">Shop</li>
        <li className="hover:text-white transition">About</li>
        <li className="hover:text-white transition">Contact</li>
      </ul>
    </motion.nav>
  );
};