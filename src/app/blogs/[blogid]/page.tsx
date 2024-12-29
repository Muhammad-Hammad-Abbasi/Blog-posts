"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  imageUrl?: string;
}

// Function to fetch blogs from Sanity
const fetchBlogs = async (): Promise<Post[]> => {
  const query = `
    *[_type == "post"] | order(_createdAt asc) {
      id,
      title,
      content,
      author,
      "imageUrl": image.asset->url
    }
  `;
  return client.fetch(query);
};

const BlogDetails = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const params = useParams();

  // Fetch posts on component mount
  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Check if blogid exists
  if (!params?.blogid) {
    return <div className="flex justify-center items-center font-semibold font-serif h-screen">Blog ID is missing!</div>;
  }

  // Parse the blogid
  const blogid = parseInt(Array.isArray(params.blogid) ? params.blogid[0] : params.blogid, 10);
  const blog = posts?.find((b) => b.id === blogid);

  // Show loading state
  if (loading) {
    return <div className="flex justify-center items-center font-semibold font-serif h-screen">Loading...</div>;
  }

  // Show blog not found
  if (!blog) {
    return <div className="flex justify-center items-center font-semibold font-serif h-screen">Blog not found!</div>;
  }

  // Add a comment
  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }]);
      setNewName("");
      setNewComment("");
    }
  };

  // Delete a comment
  const deleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="p-5 md:px-10">

      {blog.imageUrl && (
        <div className="relative w-full h-48 md:h-96 lg:h-96 mx-auto mt-4 bg-fixed bg-cover bg-center">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            layout="fill" 
            objectFit="cover" 
            className="rounded-t-lg fix"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mt-10">{blog.title}</h1>
      <h1 className="text-2xl font-semibold font-serif mt-3 text-[#616161]">{blog.author}</h1>
      <p className="mt-4 font-semibold ">{blog.content}</p>

      {/* Comments Section */}
      <div className="my-8 ">
        <h2 className="text-xl font-semibold font-serif">Comments</h2>
        <div className="mt-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name"
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="border p-2 rounded w-full mb-2"
            rows={4}
          />
          <button
            onClick={addComment}
            className="bg-[#000]/80 text-white text-center py-2 px-4 rounded-md font-semibold border border-white hover:text-black hover:bg-[#7da9c1]/20 transition-color"
          >
            Add Comment
          </button>
        </div>
        {/* Show Comments */}
        {comments.length > 0 && (
          <div className="mt-4 space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 border rounded flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p>{comment.comment}</p>
                </div>
                <button
                  onClick={() => deleteComment(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
