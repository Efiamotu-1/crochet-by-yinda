import { MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  // WhatsApp configuration
  const whatsappLink = 'https://wa.me/message/IF2TXN6YWLAXF1';

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0706 786 6783',
      description: 'Our primary contact method',
      action: whatsappLink,
      actionLabel: 'Message on WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Oladimejioyindamola20@gmail.com',
      description: 'For formal inquiries',
      action: 'mailto:Oladimejioyindamola20@gmail.com',
      actionLabel: 'Send Email',
      color: 'bg-amber-800 hover:bg-amber-900',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lagos, Nigeria',
      description: 'Delivery available nationwide',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'We reply as quickly as possible',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to place an order? Reach out to us via WhatsApp for the fastest response!
          </p>
        </div>
      </section>

      {/* Main WhatsApp CTA */}
      <section className="py-12 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Order via WhatsApp
                  </h2>
                  <p className="text-green-100">
                    Click here to start a conversation and place your order
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold whitespace-nowrap">
                <Send className="w-5 h-5" />
                Message Now
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-800 rounded-xl mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                <p className="text-sm text-gray-500 mb-4">{info.description}</p>
                {info.action && (
                  <a
                    href={info.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 ${info.color} text-white text-sm font-medium rounded-full transition-colors`}
                  >
                    {info.actionLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How do I place an order?',
                a: 'Simply click the WhatsApp button above to start a conversation. Let us know what product you\'re interested in, and we\'ll guide you through the process!',
              },
              {
                q: 'Do you accept custom orders?',
                a: 'Absolutely! We love creating custom pieces. Share your ideas with us via WhatsApp and we\'ll work together to bring your vision to life.',
              },
              {
                q: 'What are your delivery options?',
                a: 'We deliver across Nigeria. Delivery times and costs vary by location. Contact us for specific details about your area.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers and other popular payment methods. Payment details will be shared during the ordering process.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
