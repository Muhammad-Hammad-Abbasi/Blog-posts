import React from "react";
import { client } from "@/sanity/lib/client";
import Card from "./blogcard/blogcard";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
}

// Fetch data inside a server component
const getBlogs = async () => {
  const query = `
    *[_type == "post"] | order(_createdAt asc) {
      id,
      title,
      content,
      author,
      "imageUrl": image.asset->url
    }
  `;

  // Fetch data from Sanity API
  const posts: Post[] = await client.fetch(query);
  return posts;
};

const Blogs = async () => {
  const posts = await getBlogs(); // Fetch the data in the Server Component

  return (
    <div>
      {/* Background Video Section */}
      <div className="relative h-[300px] flex items-center justify-center text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold font-serif mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-white text-lg md:text-xl">
            Explore in-depth articles, expert tutorials, and the latest updates
            across diverse topics. Stay ahead with cutting-edge insights and trends.
          </p>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="p-8 bg-[#7da9c1]/50">
        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 text-center">
          Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Card
                key={post.id}
                heading={post.title}
                text={post.content.substring(0, 100) + "..."}
                image={post.imageUrl} // Correct image url
                blogid={post.id}
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
