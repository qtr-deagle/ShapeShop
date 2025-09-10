import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ShapeListing from './components/shapeListing';
import ShapeListings from './components/shapeListings';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShapeListings />
    </>
  );
};

export default App;