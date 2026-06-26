import React from 'react';
import { PHONE_NUMBER } from '../components/Layout';
import { MapPin, Wifi, HeadphonesIcon, Bed, Monitor, Bath, Laptop, Star, Snowflake, Sofa, Phone } from 'lucide-react';
import { About } from './About';
import { Rooms } from './Rooms';
import { BookingProcess } from './BookingProcess';
import { Heritage } from './Heritage';
import { FAQ } from './FAQ';
import { Contact } from './Contact';

export function Home() {
  const handleBookRoom = (roomName: string) => {
    const message = `Hello, I am interested in booking the *${roomName}* at Jagannath Puri Stay. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="bg-background text-on-background font-body-md flex flex-col">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[75vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105" 
              style={{ backgroundImage: "url('/images/new-hero.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1e3a5f]/80"></div>
            <div className="relative z-10 text-center max-w-4xl px-6 sm:px-12 flex flex-col items-center mt-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Welcome to <br/> Jagannath Puri <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-orange-400">Temple Stay</span>
              </h1>

              <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto mt-8">
                <button 
                  onClick={() => handleBookRoom('Deluxe Room')} 
                  className="bg-[#eab308] text-[#1e3a5f] hover:bg-[#ca8a04] hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transform hover:-translate-y-1 text-lg flex items-center justify-center"
                >
                  Book Your Stay
                </button>
                <a 
                  href={`tel:+${PHONE_NUMBER}`} 
                  className="bg-black/30 backdrop-blur-md border-2 border-white/80 text-white hover:bg-white hover:text-[#1e3a5f] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Speak to Us
                </a>
              </div>
            </div>
          </section>

          <About />
          <Rooms />

          {/* Why Choose Us */}
          <section className="max-w-[1200px] mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600">Designed for your comfort and convenience during your pilgrimage and beach vacation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-[#fdfbf4] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#eab308]/30">
                  <MapPin className="w-10 h-10 text-[#eab308]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Close to Temple & Beach</h3>
                <p className="text-gray-600">Prime location ensuring quick and easy access for Darshan and beach walks.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-[#fdfbf4] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#eab308]/30">
                  <Wifi className="w-10 h-10 text-[#eab308]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Free WiFi</h3>
                <p className="text-gray-600">Stay connected with high-speed internet throughout the property.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-[#fdfbf4] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#eab308]/30">
                  <HeadphonesIcon className="w-10 h-10 text-[#eab308]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">24/7 Service</h3>
                <p className="text-gray-600">Our dedicated staff is available round-the-clock to assist you.</p>
              </div>
            </div>
          </section>

          <BookingProcess />
          <Heritage />
          <FAQ />
          <Contact />
        </main>
      </div>
    </>
  );
}
