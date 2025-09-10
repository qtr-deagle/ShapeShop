import { useState, useEffect } from 'react'
import ShapeListing from './shapeListing'
import React from 'react'

const ShapeListings = () => {
  const [shapes, setShapes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShapes = async () => {
      try {
        const res = await fetch('http://localhost:5000/shapes');
        const data = await res.json();
        setShapes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShapes();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1a002e] via-[#300036] to-[#1a002e] p-4">
      {loading && <p className="text-white">Loading shapes...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shapes.map((shape) => (
          <ShapeListing key={shape.id} shape={shape} />
        ))}
      </div>
    </section>
  )
}

export default ShapeListings