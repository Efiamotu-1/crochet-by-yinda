import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Filter } from 'lucide-react';

// Import all product images
import productImg1 from '../assets/images/IMG_0021.jpg';
import productImg2 from '../assets/images/IMG_0030.jpg';
import productImg3 from '../assets/images/IMG_0089.jpg';
import productImg4 from '../assets/images/IMG_0096.jpg';
import productImg5 from '../assets/images/IMG_6539.jpg';
import productImg6 from '../assets/images/IMG_2334.jpg';
import productImg7 from '../assets/images/0db910fd-802d-432d-b1df-7172311e189d.JPG';
import productImg8 from '../assets/images/36BECF08-C53E-4145-8882-29AF938B1FBD.JPG';
import productImg9 from '../assets/images/7ef6ea90-79fa-467b-ac06-4ca3da733695.JPG';
import productImg10 from '../assets/images/9af37da0-1e59-4b02-ad0b-55bd9fbcbf05.JPG';
import productImg11 from '../assets/images/b8d84303-2a9f-4cf7-8158-019ed3fafaa0.JPG';
import productImg12 from '../assets/images/fcc0161a-5c0c-48f0-8881-35b996470bb5.JPG';
import productImg13 from '../assets/images/fcc0161a-5c0c-48f0-8881-35b996470bb5_1.JPG';
import productImg14 from '../assets/images/IMG_6549.jpg';
import productImg15 from '../assets/images/D15113F5-5AE4-4AD9-BF60-61FBAE78B074.PNG';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Products with real images and proper categories
  const products = [
    { id: 1, name: 'Crochet Tote Bag', price: '₦15,000', category: 'Bags', image: productImg1 },
    { id: 2, name: 'Crochet Bucket Hat', price: '₦8,000', category: 'Accessories', image: productImg2 },
    { id: 3, name: 'Crochet Top', price: '₦12,000', category: 'Tops', image: productImg3 },
    { id: 4, name: 'Summer Crop Top', price: '₦10,000', category: 'Tops', image: productImg4 },
    { id: 5, name: 'Crochet Sleeveless Top', price: '₦11,000', category: 'Tops', image: productImg5 },
    { id: 6, name: 'Crochet Mini Dress', price: '₦18,000', category: 'Dresses', image: productImg6 },
    { id: 7, name: 'Crochet Cardigan', price: '₦20,000', category: 'Tops', image: productImg7 },
    { id: 8, name: 'Crochet Beach Top', price: '₦14,000', category: 'Tops', image: productImg8 },
    { id: 9, name: 'Crochet Halter Top', price: '₦9,000', category: 'Tops', image: productImg9 },
    { id: 10, name: 'Crochet Tank Top', price: '₦8,500', category: 'Tops', image: productImg10 },
    { id: 11, name: 'Crochet Market Bag', price: '₦11,000', category: 'Bags', image: productImg11 },
    { id: 12, name: 'Crochet Set', price: '₦22,000', category: 'Sets', image: productImg12 },
    { id: 13, name: 'Crochet Two-Piece', price: '₦25,000', category: 'Sets', image: productImg13 },
    { id: 14, name: 'Crochet Vest', price: '₦16,000', category: 'Tops', image: productImg14 },
    { id: 15, name: 'Crochet Tank Vest', price: '₦12,000', category: 'Tops', image: productImg15 },
  ];

  const categories = ['All', 'Tops', 'Dresses', 'Sets', 'Bags', 'Accessories'];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-50 to-stone-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Browse our handcrafted crochet pieces. Each item is made with care and attention to detail.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === activeCategory
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
            <Filter className="w-4 h-4" />
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Product Image */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order via WhatsApp
                    </Link>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-5">
                  <span className="text-xs font-medium text-amber-800 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Link
                      to="/contact"
                      className="text-sm font-medium text-amber-800 hover:text-amber-900"
                    >
                      Order Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State for when no products match the filter */
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <div className="text-6xl mb-4">🧶</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeCategory} items yet
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We're working on adding more {activeCategory.toLowerCase()} to our collection. 
              Check back soon or request a custom piece!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setActiveCategory('All')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors"
              >
                View All Products
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-800 text-white font-medium rounded-full hover:bg-amber-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Request Custom Order
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
