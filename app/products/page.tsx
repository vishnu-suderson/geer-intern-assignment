'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');             // ← search state
  const [filter, setFilter] = useState('All');          // ← category state

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const categories = ['All', 'Jewellery', 'Silver', 'Fine Jewellery', 'Christmas'];

  // Combine both filters:
  const visible = products
    .filter(p => 
      // 1) match search term
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      // 2) match category (unless “All”)
      filter === 'All' ? true : p.category === filter
    );

  return (
    <>
      <Navbar />

      {/* Hero + Search */}
      <header className="mt-14 bg-[url('/jewelry-hero.jpg')] bg-cover bg-center h-64 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Discover Timeless Elegance
        </h1>
        <input
          type="search"
          placeholder="Search jewels by name…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-11/12 md:w-1/2 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {visible.map(product => (
            <div
              key={product.id}
              className="break-inside bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                  Add to Cart
                </button>
              </div>
              <div className="px-4 py-3">
                <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
                <p className="text-pink-600 font-bold mt-1">₹{product.price}</p>
                <Link href={`/products/${product.id}`} className="inline-block mt-2 text-sm text-gray-600 hover:text-pink-600">
                  View Details →
                </Link>
              </div>
            </div>
          ))}

          {visible.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-12">
              No products match your search or filter.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
