import { Heart, Award, Clock, Users, Play } from 'lucide-react';
import { useState } from 'react';
import processVideo from '../assets/videos/IMG_0152.mp4';
import yindaPhoto from '../assets/images/IMG_6549.jpg';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const stats = [
    { icon: Heart, label: 'Happy Customers', value: '100+' },
    { icon: Award, label: 'Unique Designs', value: '50+' },
    { icon: Clock, label: 'Years of Craft', value: '3+' },
    { icon: Users, label: 'Custom Orders', value: '200+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Yinda's Photo */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] max-w-md mx-auto bg-gradient-to-br from-stone-300 to-amber-200 rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👩‍🎨</div>
                  <p className="text-amber-900 font-medium">Yinda's Photo</p>
                  <p className="text-amber-700 text-sm">The Creator</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Meet the Creative Mind Behind <span className="text-amber-800">Crochet by Yinda</span>
              </h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hi, I'm Yinda! My journey with crochet began as a way to express creativity and has blossomed into a passion for creating beautiful, handcrafted pieces.
                </p>
                <p>
                  Every item I create is made with love, attention to detail, and a commitment to quality. From cozy accessories to stylish bags and home décor, each piece tells a unique story.
                </p>
                <p>
                  I believe in the beauty of handmade crafts and the joy they bring to both the maker and the recipient. Thank you for being part of this creative journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Process - Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-stone-900 relative">
                {/* Video Element */}
                <video
                  id="process-video"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                  onClick={(e) => {
                    if (e.target.paused) {
                      e.target.play();
                      setIsPlaying(true);
                    } else {
                      e.target.pause();
                      setIsPlaying(false);
                    }
                  }}
                  src={processVideo}
                />

                {/* Play Button Overlay */}
                <button
                  onClick={() => {
                    const video = document.getElementById('process-video');
                    if (video.paused) {
                      video.play();
                      setIsPlaying(true);
                    } else {
                      video.pause();
                      setIsPlaying(false);
                    }
                  }}
                  className={`absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className={`w-8 h-8 text-amber-800 ${isPlaying ? 'hidden' : 'block'} ml-1`} fill="currentColor" />
                    {isPlaying && (
                      <div className="flex gap-1">
                        <div className="w-2 h-8 bg-amber-800 rounded"></div>
                        <div className="w-2 h-8 bg-amber-800 rounded"></div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
                Behind the Scenes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Watch the Magic Happen
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ever wondered how a simple strand of yarn transforms into a beautiful, wearable piece of art? Watch as skilled hands bring each creation to life, stitch by stitch.
                </p>
                <p>
                  From selecting the perfect yarn to the final finishing touches, every step is done with care and precision. This is what makes each piece truly special.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  100% Handmade
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Premium Yarns
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Unique Designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives us to create beautiful crochet pieces every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We use only the finest materials and techniques to ensure every piece meets our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices, using eco-friendly materials whenever possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creativity</h3>
              <p className="text-gray-600">
                Each design is unique, born from imagination and refined through skillful craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
