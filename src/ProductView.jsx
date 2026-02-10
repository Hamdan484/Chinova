import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductView() {
  const { id } = useParams(); // ✅ get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/A_products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.id.toString() === id
        );
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfaf6] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-xl rounded-2xl p-10">

        {/* Product Image */}
        <div>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-2xl text-gray-700 mt-3">
              {product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description ||
                "A rich, aromatic blend crafted to deliver the perfect coffee experience. Smooth texture, bold flavor, and unforgettable taste."}
            </p>
          </div>

          {/* Purchase Section */}
          <div className="space-y-4 mt-8">
            <button className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition">
              Add to Cart ☕
            </button>

            <a
              href={`https://wa.me/233000000000?text=Hello%20I%20want%20to%20order%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full border border-gray-900 text-gray-900 py-3 rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              Chat to Order on WhatsApp 💬
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
