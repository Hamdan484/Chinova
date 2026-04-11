import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./Context/CartContext.jsx";

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      navigate("/cart");
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Brewing details for you...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate('/products')} className="mt-4 text-blue-600 underline">Back to Menu</button>
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
            <h3 className="text-lg font-semibold text-gray-700">Caffeine Level:  {product.caffeine_level}</h3>
            <br />
            <h3 className="text-lg font-semibold text-gray-700">Type:  {product.product_type}</h3>

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
