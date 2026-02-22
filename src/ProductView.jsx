import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./Context/CartContext.jsx";
import data from "./data.jsx";
export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
const [avProducts, setAvProducts] = useState(data);
  function handleAddToCart() {
    addToCart(product);
    navigate("/cart");
  }

  useEffect(() => {
    const foundProduct = avProducts.find(
      (item) => item.id.toString() === id
        );
    setProduct(foundProduct);
  }, [id, avProducts]);

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
            className="w-full h-100 object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {product.name} 
            </h1>
            <br />
            <h3 className="text-lg font-semibold text-gray-700">Caffeine Level:  {product.caffeine}</h3>
            <br />
            <h3 className="text-lg font-semibold text-gray-700">Type:  {product.type}</h3>

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
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              Add to Cart ☕
            </button>

            <a
              href={`https://wa.me/233597788861?text=Hello%20I%20want%20to%20order%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full border border-gray-900 text-gray-900 py-3 rounded-full hover:bg-gray-900 hover:text-white transition"
            >
              Chat to Order on WhatsApp{" "}
              <span className="text-green-500">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
