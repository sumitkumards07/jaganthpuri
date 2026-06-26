import React from 'react';

export function Heritage() {
  return (
    <>
      {/* Wikipedia Section */}
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Jagannath Temple Heritage</h2>
          <div className="h-1.5 w-32 bg-[#eab308] mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
          <p className="text-2xl text-gray-800 font-medium mb-12 italic border-l-4 border-[#eab308] pl-8">
            "The Shree Jagannath Temple stands as a timeless symbol of faith, devotion, and spiritual heritage. It is one of the Char Dham pilgrimage sites."
          </p>

          <div className="my-16 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3a5f] to-[#eab308] rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Puri_Jagannath_Temple.jpg" alt="Shree Jagannath Temple" className="relative w-full h-[500px] object-cover rounded-3xl shadow-xl" />
          </div>

          <h3 className="text-3xl font-bold text-[#1e3a5f] mt-16 mb-6">Ancient Roots & Architecture</h3>
          <p className="mb-8 text-lg">The temple is famous for its annual Ratha Yatra, or chariot festival, in which the three principal deities are pulled on huge and elaborately decorated temple cars. The temple's immense structure is a marvel of Kalinga architecture.</p>

          <div className="grid md:grid-cols-2 gap-12 my-16 bg-[#f8fafc] p-10 rounded-3xl border border-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Temple Administration</h3>
              <p className="text-lg">Managed by the Shree Jagannath Temple Administration (SJTA), the temple is a masterpiece of logistics, handling millions of pilgrims with grace and efficiency.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Divine Legacy</h3>
              <p className="text-lg">The deities of Lord Jagannath, Balabhadra and Subhadra are made from sacred neem logs known as Daru Brahma.</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-[#1e3a5f] mt-16 mb-6">A Journey of Faith</h3>
          <p className="mb-0 text-lg leading-relaxed">As one of the world's most visited religious sites, Puri transcends boundaries, offering every visitor a profound sense of peace and spiritual awakening. From the world-famous Mahaprasad to the soul-stirring rituals, every moment spent here is a testament to the enduring power of devotion.</p>
        </div>
        </div>
      </div>
    </>
  );
}
