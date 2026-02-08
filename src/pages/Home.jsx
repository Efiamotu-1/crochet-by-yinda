import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Truck } from 'lucide-react';

// Import all images
import heroImage from '../assets/images/IMG_0096.jpg';
import galleryImg1 from '../assets/images/IMG_0021.jpg';
import galleryImg2 from '../assets/images/IMG_0030.jpg';
import galleryImg3 from '../assets/images/IMG_0089.jpg';
import galleryImg4 from '../assets/images/IMG_6539.jpg';
import galleryImg5 from '../assets/images/IMG_6549.jpg';
import galleryImg6 from '../assets/images/IMG_2334.jpg';
import galleryImg7 from '../assets/images/0db910fd-802d-432d-b1df-7172311e189d.JPG';
import galleryImg8 from '../assets/images/36BECF08-C53E-4145-8882-29AF938B1FBD.JPG';
import galleryImg9 from '../assets/images/7ef6ea90-79fa-467b-ac06-4ca3da733695.JPG';
import galleryImg10 from '../assets/images/9af37da0-1e59-4b02-ad0b-55bd9fbcbf05.JPG';
import galleryImg11 from '../assets/images/b8d84303-2a9f-4cf7-8158-019ed3fafaa0.JPG';
import galleryImg12 from '../assets/images/fcc0161a-5c0c-48f0-8881-35b996470bb5.JPG';
import galleryImg13 from '../assets/images/fcc0161a-5c0c-48f0-8881-35b996470bb5_1.JPG';

const Home = () => {
  const galleryImages = [
    galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6,
    galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12, galleryImg13
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Handcrafted',
      description: 'Each piece is carefully handmade with attention to every detail',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every stitch carries passion and dedication to the craft',
    },
    {
      icon: Truck,
      title: 'Delivery Available',
      description: 'We deliver across Nigeria to bring crochet joy to your doorstep',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-stone-50 to-amber-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2378350f%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
                ✨ Handmade with Love
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Stunning <span className="text-amber-800">Crochet</span> Pieces, Crafted Just for You
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Discover unique, handcrafted crochet pieces that add warmth and style to your wardrobe and home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-800 text-white font-semibold rounded-full hover:bg-amber-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-md border border-gray-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden relative">
                <img 
                  src={heroImage} 
                  alt="Beautiful crochet piece by Yinda" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-stone-300 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every piece tells a story of craftsmanship, creativity, and care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Pieces
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse some of our beautiful handcrafted crochet creations
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="aspect-square">
                  <img 
                    src={img} 
                    alt={`Crochet piece ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link 
                    to="/shop"
                    className="text-white font-medium text-sm hover:underline"
                  >
                    View Collection →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-800 text-white font-semibold rounded-full hover:bg-amber-900 transition-all duration-200 shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order Your Custom Piece?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Have something special in mind? We create custom crochet pieces tailored just for you. Reach out and let's bring your vision to life!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-800 font-semibold rounded-full hover:bg-amber-50 transition-all duration-200 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
