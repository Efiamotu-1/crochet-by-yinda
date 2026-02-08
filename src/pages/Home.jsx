import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Import all images
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
import galleryImg14 from '../assets/images/D15113F5-5AE4-4AD9-BF60-61FBAE78B074.PNG';

// Import hero video
import heroVideo from '../assets/videos/IMG_2329.mp4';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6,
    galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12, 
    galleryImg13, galleryImg14
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
              ✨ Handmade with Love
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stunning <span className="text-amber-300">Crochet</span> Pieces, Crafted Just for You
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Discover unique, handcrafted crochet pieces that add warmth and style to your wardrobe and home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-800 text-white font-semibold rounded-full hover:bg-amber-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
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

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((img, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="aspect-[3/4]">
                      <img 
                        src={img} 
                        alt={`Crochet piece ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-amber-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
