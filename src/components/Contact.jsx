import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className=" py-20 px-8 flex justify-center"    >
      <div className="w-full max-w-xl bg-gray-900 p-10 border border-gray-800 rounded-xl">
        <h2 className="text-white text-3xl font-bold mb-6 uppercase">Contact us</h2>
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="bg-[#1a1a1a] border border-gray-800 focus:scale-105 duration-500 font-medium p-4 text-white focus:border-red-600 outline-none rounded-lg" required />
            <input type="email" placeholder="Email Address" className="bg-[#1a1a1a] border border-gray-800 focus:scale-105 duration-500 font-medium p-4 text-white focus:border-red-600 outline-none rounded-lg" required />
            <select className="bg-[#1a1a1a] border border-gray-800 p-4 text-white focus:scale-105 duration-500 focus:border-red-600 outline-none rounded-lg font-medium">
              <option>Select Bike Model</option>
              <option>Jawa 42 Bobber</option>
              <option>Jawa Perak</option>
              <option>Jawa 42</option>
              <option>Jawa 42 FJ</option>
              <option>Yezdi Roadster</option>
              <option>Yezdi Adventure</option>
              <option>Yezdi Scrambler</option>
            </select>
            <button className="bg-red-600 text-white py-4 font-bold rounded-xl  uppercase hover:bg-red-800 hover:scale-105 duration-500 transition-all mt-4">Submit Request</button>
          </form>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-green-500 text-xl font-bold mb-2">Request Sent!</h3>
            <p className="text-gray-400">Our team will reach out to you within 24 hours.</p>
          </div>    
        )}
      </div>
    </section>
  );
}