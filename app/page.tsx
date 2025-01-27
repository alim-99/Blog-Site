import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import Image from "next/image";

const samplePosts = [
  {
    id: 1,
    title: "Discover the Wonders of React",
    excerpt: "Learn the basics of React and how it can simplify your development.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Detailed content about React goes here...",
  },
  {
    id: 2,
    title: "Styling in Tailwind CSS",
    excerpt: "Explore how Tailwind CSS can help you build fast and responsive designs.",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    content: "Detailed content about Tailwind CSS goes here...",
  },
  {
    id: 3,
    title: "Building Accessible Websites",
    excerpt: "Ensure your websites are usable by everyone with these accessibility tips.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    content: "Detailed content about accessibility goes here...",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen"> 
    <Hero />
    <FeaturedPosts posts={samplePosts} />
    </div>
  );
}
