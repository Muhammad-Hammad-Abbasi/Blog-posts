import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#af5438] text-white py-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left m2-4 sm:mb-0">
            <h2 className="text-2xl font-bold">Blog Post by Hammad Abbasi.</h2>
            <p className="text-sm mt-1">Empowering your digital transformation with cutting-edge technology.</p>
          </div>
          <div className="flex flex-col items-center font-bold font-serif justify-center sm:flex-row sm:items-center">
            <a href="/" className="text-black hover:text-white mx-2">Home</a>
            <a href="/blogs/about" className="text-black hover:text-white mx-2">About</a>
            <a href="/blogs/contact" className="text-black hover:text-white mx-2">Contact</a>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm font-serif">&copy; {new Date().getFullYear()} HA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}