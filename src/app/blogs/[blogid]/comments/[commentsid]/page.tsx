'use client'

import React, { useEffect, useState } from "react";
import blogPosts from "@/app/_lib/post";

// Defining the interface
interface CommentRepliesProps {
  params: Promise<{ blogid: string; commentsid: string }>;
}

const CommentReplies: React.FC<CommentRepliesProps> = ({ params }) => {
  const [resolvedParams, setResolvedParams] = useState<{ blogid: string; commentsid: string }>({ blogid: '', commentsid: '' });

  // Using useEffect to resolve the Promise for params
  useEffect(() => {
    const resolveParams = async () => {
      try {
        const paramsValue = await params; // Wait for the Promise to resolve
        setResolvedParams(paramsValue); // Set the resolved values to state
      } catch (error) {
        console.error('Error resolving params:', error);
      }
    };

    resolveParams();
  }, [params]);

  // Convert `blogid` and `commentsid` from string to numbers after resolving the params
  const postid = parseInt(resolvedParams.blogid, 10);
  const commentid = parseInt(resolvedParams.commentsid, 10);

  // Find the blog post and specific comment
  const post = blogPosts.find((p) => p.id === postid);
  const comment = post?.comments.find((c) => c.id === commentid);

  if (!post || !comment) {
    return (
      <div className="justify-center size-full font-sans font-semibold flex pt-40 bg-[#ffb397dd] min-h-screen text-4xl">
        No Comment Found
      </div>
    );
  }

  return (
    <div className="bg-[#ffb397dd] min-h-screen py-10 px-6 font-sans font-semibold">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold text-3xl text-gray-900 mb-6">
          Comments Thread and Replies
        </h1>
        <p className="font-sm text-xl text-gray-900 mb-6 pt-10">
          Replies to <u>{comment.content}</u> by <b>{comment.author}</b>
        </p>
        <ol className="space-y-4 list-decimal pl-4">
          {comment.replies.map((reply) => (
            <li key={reply.id} className="text-lg">
              <b>{reply.author}</b>: {reply.content}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CommentReplies;
