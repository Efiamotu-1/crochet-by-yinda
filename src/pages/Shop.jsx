import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all product images
import productImg1 from '../assets/images/e8cff9b4-4d4e-4a52-9730-aee4411e6c41.jpeg';
import productImg2 from '../assets/images/789C5FAA-6509-4F93-8D0B-E0C23414F525.jpeg';
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

// Additional images for Unisex Hexagon Shirt
import hexImg1 from '../assets/images/49faf72a-6547-4159-a9cc-dc5a05e044b1.jpeg';
import hexImg2 from '../assets/images/6d69a374-daa1-4ae4-9b48-6dea868344e2.jpeg';
import hexImg3 from '../assets/images/8d0cd2cd-4743-44dc-914f-c6d7ed241323.jpeg';
import hexImg5 from '../assets/images/c887d9c3-bd0a-4f16-8607-834255d886bb.jpeg';
import hexImg6 from '../assets/images/f256768b-a85e-40f8-9dac-28272ce0e7fe (1).jpeg';
import hexImg7 from '../assets/images/f256768b-a85e-40f8-9dac-28272ce0e7fe.jpeg';

// Additional images for Full Granny Square Shirt
import grannyImg1 from '../assets/images/789C5FAA-6509-4F93-8D0B-E0C23414F525.jpeg';
import grannyImg2 from '../assets/images/92E4B18A-B753-4875-B8F4-C8E79755E967.jpeg';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [slideIndices, setSlideIndices] = useState({});

  const getSlideIndex = (productId) => slideIndices[productId] || 0;

  const changeSlide = (e, productId, direction, totalImages) => {
    e.stopPropagation();
    setSlideIndices((prev) => {
      const current = prev[productId] || 0;
      const next = direction === 'next'
        ? (current + 1) % totalImages
        : (current - 1 + totalImages) % totalImages;
      return { ...prev, [productId]: next };
    });
  };

  // Products with real images and proper categories
  const products = [
    { id: 1, name: 'Unisex Hexagon Shirt', price: '₦70,000 - ₦120,000', category: 'Tops', images: [productImg1, hexImg1, hexImg2, hexImg3, hexImg5, hexImg6, hexImg7] },
    { id: 2, name: 'Full Granny Square Shirt', price: '₦120,000 - ₦170,000', category: 'Tops', images: [grannyImg1, grannyImg2, productImg4] },
    { id: 3, name: 'Crochet Shirt', price: '₦80,000 - ₦120,000', category: 'Tops', images: [productImg7, productImg6, productImg10, productImg11] },
    { id: 13, name: 'Crochet Two-Piece', price: '₦85,000 - ₦120,000', category: 'Sets', images: [ productImg13, productImg8, productImg9] },
    { id: 14, name: 'Children crochet wears', price: '₦25,000 - ₦40,000', category: 'Children', images: [productImg14, productImg5] },
    { id: 15, name: 'Crochet Tank Top', price: '₦40,000 - ₦70,000', category: 'Tops', images: [productImg15] },
  ];


  const categories = ['All', 'Tops', 'Dresses', 'Sets', 'Bags', 'Accessories', 'Children'];

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
                {/* Product Image Slideshow */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  {product.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${product.name} - view ${imgIndex + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                        imgIndex === getSlideIndex(product.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}

                  {/* Slideshow Controls (only if multiple images) */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => changeSlide(e, product.id, 'prev', product.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => changeSlide(e, product.id, 'next', product.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-800" />
                      </button>
                      {/* Dot indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {product.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSlideIndices((prev) => ({ ...prev, [product.id]: dotIndex }));
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              dotIndex === getSlideIndex(product.id) ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`View image ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto"
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
