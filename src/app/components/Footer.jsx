
"use client";

import React from "react";

export default function FooterCTA() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] text-white pt-24 pb-12">

      {/* CTA SECTION */}

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT CARD */}

          <div className="bg-yellow-400 text-black rounded-3xl p-10 shadow-xl max-w-xl">

            <h2 className="text-4xl font-bold mb-4">
              Let’s get started.
            </h2>

            <p className="text-sm mb-6 text-black/80">
              Grow your business with websites, apps and digital marketing.
              We help startups and companies scale online.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition">
              Let's Chat
            </button>

          </div>


          {/* RIGHT IMAGE */}

          <div className="flex justify-center lg:justify-end">

            <img
              src="https://www.freepik.com/premium-photo/hands-holding-smartphone-social-media-concept_38689783.htm#fromView=keyword&page=2&position=12&uuid=67b15dba-6672-4846-99ea-1ce7eff3de4c&query=Social+media"
              alt="digital illustration"
              className="w-[320px] md:w-[420px] rounded-xl"
            />

          </div>

        </div>

      </div>


      {/* FOOTER LINKS */}

      <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">

        <div className="flex gap-6 text-gray-400 text-sm">

          <a className="hover:text-white cursor-pointer">Home</a>
          <a className="hover:text-white cursor-pointer">About</a>
          <a className="hover:text-white cursor-pointer">Services</a>
          <a className="hover:text-white cursor-pointer">Plans</a>
          <a className="hover:text-white cursor-pointer">Contact</a>

        </div>

        <p className="text-gray-500 text-xs mt-4 md:mt-0">
          © {year} Stonenox IT Solutions
        </p>

      </div>

    </footer>
  );
}
