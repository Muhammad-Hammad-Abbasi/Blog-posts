import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "id",
      type: "number",
      title: "ID",
      description: "Unique identifier for the blog post",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the blog post",
      validation: (Rule) => Rule.required().min(5).max(100), // Title length validations
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Content",
      description: "Main content of the blog post",
      validation: (Rule) => Rule.required().min(50), // Ensure content has at least 50 characters
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author",
      description: "Name of the author of the post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "Optional image for the blog post",
      options: {
        hotspot: true, // Enable image cropping and focus area selection
      },
    }),
  ],
});
