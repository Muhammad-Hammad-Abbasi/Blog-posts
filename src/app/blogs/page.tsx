// pages/blogs.js

import React from "react";
import Card from "./blogcard/blogcard";
import blogPosts from "../_lib/post";
import Image from "next/image";

const Blogs: React.FC = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative overflow-hidden h-[300px] flex items-center justify-center text-center ">
        <div className="absolute inset-0">
          <Image
            src="/bgImage.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-100"
          />
        </div>
        <div
          className="relative z-10 p-4"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold font-serif mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-white text-lg md:text-xl">
            Explore in-depth articles, expert tutorials, and the latest updates across diverse topics. Stay ahead with cutting-edge insights and trends.</p>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="p-8 bg-[#ff9e7bdd]">
        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 text-center">
          Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Card
                key={post.id}
                heading={post.title}
                text={post.content.substring(0, 100) + "..."}
                image={post.image}
                blogid={post.id} // Blog ID being passed
              />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No blogs available at the moment.
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Blogs;
