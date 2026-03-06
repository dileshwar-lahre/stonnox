"use client";

import React from "react";

export default function FooterCTA() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] text-white pt-24 pb-10">

      {/* CTA */}

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT */}

          <div className="bg-yellow-400 text-black rounded-3xl p-10 shadow-lg max-w-xl">

            <h2 className="text-4xl font-bold mb-4">
              Let’s get started.
            </h2>

            <p className="text-sm mb-6 text-black/80">
              We help businesses grow with websites, apps and digital marketing.
              Let's build something great together.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition">
              Let's Chat
            </button>

          </div>


          {/* RIGHT IMAGE */}

          <div className="flex justify-center lg:justify-end">

            <img
              src="https://cdn.dribbble.com/users/1878452/screenshots/16717156/media/ed0a05d2f5bdbab9a9c4cb2baf0da822.png"
              className="w-[300px] md:w-[420px]"
              alt="illustration"
            />

          </div>

        </div>

      </div>


      {/* FOOTER */}

      <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">

        <div className="flex gap-6 text-gray-400 text-sm">

          <a className="hover:text-white">Work</a>
          <a className="hover:text-white">About</a>
          <a className="hover:text-white">Plans</a>
          <a className="hover:text-white">Contact</a>

        </div>

        <p className="text-gray-500 text-xs mt-4 md:mt-0">
          © {year} Stonenox
        </p>

      </div>

    </footer>
  );
}