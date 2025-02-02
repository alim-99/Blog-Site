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
  try {
      const slug = title
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

      const response = await database.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
          ID.unique(),
          {
              title: title.trim(),
              content: content.trim(),
              coverImage,
              slug,
              tags,
              createdAt: new Date().toISOString(),
              seoMetadata: JSON.stringify({
                  title: title.trim(),
                  description: content.substring(0, 150).trim(),
                  tags
              })
          }
      );

      if (response) {
          window.location.href = "/posts";
      }

      return response;
  } catch (error) {
      console.error("Error publishing blog:", error);
      throw error;
  }
};

// Function to fetch blog posts from Appwrite
export const getBlogPosts = async () => {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, 
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!);

    return response.documents.map((doc) => ({
      $id: doc.$id,
      title: doc.title,
      tags: doc.tags,
      content: doc.content,
      coverImage: doc.coverImage,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Function to delete the blog post
export const deleteBlogPost = async (postId: string) => {
  try {
    await database.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, 
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!, 
      postId);

    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
};
