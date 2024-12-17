

import React from "react";
import blogPosts from "@/app/_lib/post";

interface CommentRepliesProps {
  params: { blogid: string; commentsid: string };
}

export default async function CommmentReplies({
  params,
}: CommentRepliesProps) {
  // Async conversion for the params (if required)
  const postid = parseInt(params.blogid, 10);
  const commentid = parseInt(params.commentsid, 10);

  // Find the blog post and specific comment
  const post = blogPosts.find((p) => p.id === postid);
  const comment = post?.comments.find((c) => c.id === commentid);

  // Handle case where post or comment is not found
  if (!post || !comment) {
    return (
      <div className="justify-center size-full font-sans font-semibold flex pt-40 bg-[#ffb397dd] min-h-screen text-4xl">
        No Comment Found
      </div>
    );
  }

  // Render the found comment and its replies
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
}
