import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    { name: 'Bags', path: '/shop?category=bags' },
    { name: 'Accessories', path: '/shop?category=accessories' },
    { name: 'Home Decor', path: '/shop?category=home-decor' },
    { name: 'Custom Orders', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-7 h-7 text-amber-400" />
              <span className="text-xl font-bold text-white">
                Crochet <span className="text-amber-400">by Yinda</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Handcrafted crochet pieces made with love and care. Each item is unique and created to bring warmth and style to your life.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/message/IF2TXN6YWLAXF1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:Oladimejioyindamola20@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-amber-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/message/IF2TXN6YWLAXF1" className="text-sm hover:text-amber-400 transition-colors">
                  0706 786 6783
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:Oladimejioyindamola20@gmail.com" className="text-sm hover:text-amber-400 transition-colors">
                  Oladimejioyindamola20@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Crochet by Yinda. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
