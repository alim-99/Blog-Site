'use client';

import { useState, useEffect } from "react";
import { deleteBlogPost, getBlogPosts } from "@/lib/appwrite"; // Assuming API call is here
import BlogPostCard from "@/components/BlogPostCard";

// Define the type for a Blog Post
type BlogPost = {
  $id: string;
  title: string;
  tags: string[];
  content: string;
  coverImage: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    try {
      await deleteBlogPost(postId); // Call Appwrite delete function
      setPosts((prevPosts) => prevPosts.filter((post) => post.$id !== postId)); // Remove from UI
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };


  return (
    <section>
      {posts.length === 0 ? (
        <div className="text-center">
          <h2 className="text-gray-800 dark:text-gray-400 text-xl font-semibold">No posts created yet.</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
          {posts.map((post) => (
            <BlogPostCard key={post.$id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PostsPage;

