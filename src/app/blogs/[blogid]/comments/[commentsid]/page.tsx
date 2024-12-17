import React from "react";
import blogPosts from "@/app/_lib/post";

export default function CommmentReplies({
  params,
}: {
  params: { blogid: string; commentsid: string };
}) {
  const postid = parseInt(params.blogid, 10);
  const commentid = parseInt(params.commentsid, 10);
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
        <ol>
          {comment.replies.map((reply) => (
            <li key={reply.id}>
              {reply.content} by {reply.author}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
