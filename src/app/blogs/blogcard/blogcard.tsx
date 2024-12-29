"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";


interface CardProps {
  heading: string;
  text: string;
  blogid: number;
  image?: string; // Assuming image is a string URL from Sanity
};


const Card: React.FC<CardProps> = ({ heading, text, blogid, image }) => {
  return (
    <div className="bg-[#7da9c1]/70 text-gray-700 p-6 font-sans font-medium border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full max-w-sm">
      {/* Image Section */}
      {image && (
        <div className="mb-4 relative w-full h-48 overflow-hidden rounded-t-lg group">
          <Image
            src={urlFor(image).width(400).height(200).url()} // Correct usage
            alt={heading}
            fill
            className="object-cover transform group-hover:scale-125 transition-transform shadow-inner shadow-black duration-500 ease-in-out"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-grow">
        <h2 className="text-xl text-[#1d1d1d] font-bold mb-2">{heading}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{text}</p> {/* Clamps text to 3 lines */}
      </div>

      {/* Link Section */}
      <div className="mt-auto">
        <Link
          href={`/blogs/${blogid}`}
          className="block bg-[#000]/80 text-white text-center py-2 px-4 rounded-md border border-gray-300 hover:bg-[#7da9c1]/10 transition-colors"
        >
          Read Post
        </Link>
      </div>
    </div>
  );
};

export default Card;
