import { Client, Databases, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT!) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Replace with your project ID

const database = new Databases(client);

// Function to generate a unique slug
const generateSlug = (title: string): string => {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Function to publish a blog post
export const publishBlog = async (
  title: string,
  content: string,
  coverImage: string,
  tags: string[] = []
) => {
  if (!title || !content || !coverImage) {
    throw new Error("Missing required fields");
  }

  try {
    // Generate a unique slug
    const slug = generateSlug(title);

    // Create metadata for SEO
    const seoMetadata = {
      title: title.trim(),
      description: content.substring(0, 150).trim(), // First 150 characters as description
      tags: tags.filter(tag => tag.trim() !== ''),
    };

    // Save post in Appwrite database
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, // Your database ID
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!, // Your collection ID
      ID.unique(), // Generate unique ID
      {
        title: title.trim(),
        content: content.trim(),
        coverImage,
        slug,
        seoMetadata,
        createdAt: new Date().toISOString(),
        tags: tags.filter(tag => tag.trim() !== ''),
      }
    );

    if (response) {
      // Redirect to the "Posts" page after publishing
      window.location.href = "/posts";
    }

    return response;
  } catch (error) {
    console.error("Error publishing blog:", error);
    throw error; // Re-throw the error to be handled by the component
  }
};