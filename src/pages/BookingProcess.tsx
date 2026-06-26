import React, { useState } from 'react';
import { Car, Wifi, Coffee, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';
import { BookingModal } from '../components/BookingModal';

export function BookingProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      {/* Booking Process Section */}
      <div className="bg-[#1e3a5f] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple Booking Process</h2>
            <div className="w-24 h-1 bg-[#eab308] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-[#eab308] mb-8">How to Book Your Stay</h3>
              <ul className="space-y-10">
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-xl mr-6 shadow-lg shadow-[#eab308]/20">1</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Valid ID Required</h4>
                    <p className="text-gray-300 leading-relaxed">Each guest must provide a valid Aadhar card or Driving License for verification at the time of check-in.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-xl mr-6 shadow-lg shadow-[#eab308]/20">2</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Select Your Room</h4>
                    <p className="text-gray-300 leading-relaxed">Choose from our Standard Non-AC, AC, or Family room options based on your preference and group size.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-xl mr-6 shadow-lg shadow-[#eab308]/20">3</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Instant Confirmation</h4>
                    <p className="text-gray-300 leading-relaxed">Connect with us via WhatsApp or Call for instant availability checks and quick booking confirmation.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-[#eab308] text-[#1e3a5f] font-bold p-4 rounded-2xl shadow-xl rotate-12">
                24/7 Support
              </div>
              <h3 className="text-3xl font-bold text-[#1e3a5f] mb-8">Amenities & Facilities</h3>
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <Car className="h-12 w-12 text-[#2e7d32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Parking</h4>
                  <p className="text-sm text-gray-600">Safe parking for your vehicles.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <Wifi className="h-12 w-12 text-[#2e7d32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Wi-Fi Access</h4>
                  <p className="text-sm text-gray-600">High-speed internet for all guests.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <Coffee className="h-12 w-12 text-[#2e7d32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Room Service</h4>
                  <p className="text-sm text-gray-600">Round-the-clock assistance.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                  <CheckCircle className="h-12 w-12 text-[#2e7d32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Housekeeping</h4>
                  <p className="text-sm text-gray-600">Daily cleaning and maintenance.</p>
                </div>
              </div>
              <p className="text-center text-gray-700 mb-10 text-lg">Experience a safe, affordable, and convenient stay near Jagannath Temple.</p>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-lg shadow-green-500/20 transform hover:-translate-y-1">
                Book Your Room Today
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <BookingModal 
          roomName="General Enquiry" 
          onClose={() => setIsModalOpen(false)} 
          phoneNumber={PHONE_NUMBER}
        />
      )}
    </>
  );
}
