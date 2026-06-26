import React from 'react';
import { PHONE_NUMBER } from '../components/Layout';
import { MapPin, Wifi, HeadphonesIcon, Bed, Monitor, Bath, Laptop, Star, Snowflake, Sofa, Phone } from 'lucide-react';

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
              <span className="text-[#eab308] font-semibold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Welcome to</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Your Premium Stay <br/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-orange-400">Puri</span>
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

          {/* Featured Rooms */}
          <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Featured Rooms</h2>
                  <p className="text-lg text-gray-600">Select the perfect accommodation for your stay.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Room Card 1 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all">
                  <div className="h-56 w-full bg-gray-200 relative">
                    <img className="w-full h-full object-cover" src="/images/standard-room.png" alt="Deluxe Room" />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-[#1e3a5f] backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" /> 4.5
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Deluxe Room</h3>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Snowflake className="w-4 h-4"/> AC</span>
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Wifi className="w-4 h-4"/> WiFi</span>
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Monitor className="w-4 h-4"/> TV</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-[#2e7d32]">₹2,500</span>
                        <span className="text-sm text-gray-500 block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Deluxe Room")} className="bg-[#1e3a5f] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#2a4d7c] transition-colors shadow-md cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

                {/* Room Card 2 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all relative transform md:-translate-y-4 border-b-4 border-b-[#eab308]">
                  <div className="h-56 w-full bg-gray-200 relative">
                    <img className="w-full h-full object-cover" src="/images/ac-room.png" alt="Executive Room" />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-[#1e3a5f] backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" /> 4.8
                    </div>
                    <div className="absolute top-4 left-4 bg-[#eab308] text-[#1e3a5f] px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        Popular
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Executive Room</h3>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Bed className="w-4 h-4"/> King Bed</span>
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Laptop className="w-4 h-4"/> Work Desk</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-[#2e7d32]">₹3,500</span>
                        <span className="text-sm text-gray-500 block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Executive Room")} className="bg-[#eab308] text-[#1e3a5f] font-bold px-6 py-2 rounded-lg hover:bg-[#ca8a04] hover:text-white transition-colors shadow-md cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

                {/* Room Card 3 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all">
                  <div className="h-56 w-full bg-gray-200 relative">
                    <img className="w-full h-full object-cover" src="/images/family-room.png" alt="Family Suite" />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-[#1e3a5f] backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" /> 5.0
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Family Suite</h3>
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Sofa className="w-4 h-4"/> Living Area</span>
                      <span className="bg-gray-100 py-1 px-2 rounded-md text-sm text-gray-700 flex items-center gap-1"><Bath className="w-4 h-4"/> Bath Tub</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-[#2e7d32]">₹5,000</span>
                        <span className="text-sm text-gray-500 block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Family Suite")} className="bg-[#1e3a5f] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#2a4d7c] transition-colors shadow-md cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
