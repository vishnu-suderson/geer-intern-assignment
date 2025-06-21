'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, Share2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => {
        const sel = data.find((x:any) => x.id === Number(id));
        setProduct(sel);
      });
  }, [id]);

  if (!product) return <p className="mt-32 text-center">Loading…</p>;

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />

          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="text-3xl text-pink-600 font-semibold">₹{product.price}</p>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4">
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-pink-700 transition">
                Add to Cart
              </button>
              <Heart size={24} className="cursor-pointer text-gray-500 hover:text-pink-600 transition" />
              <Share2 size={24} className="cursor-pointer text-gray-500 hover:text-pink-600 transition" />
            </div>

            <p className="text-gray-500">
              <span className="font-medium">Category:</span> {product.category}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
