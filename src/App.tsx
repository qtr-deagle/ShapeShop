import './App.css'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <body className="min-h-screen w-full bg-gradient-to-br from-[#1a0025] to-black text-white flex items-center justify-center h-[90vh] bg-[#120018]">
      <NavBar />
      <h1 className="text-5xl px-100 font-bold text-purple-400 drop-shadow-[0_0_20px_#a855f7]">
        Welcome to ShapeShop
      </h1>
    </body>
  );
}

export default App
