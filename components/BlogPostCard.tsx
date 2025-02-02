import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { deleteBlogPost } from "@/lib/appwrite";

// Define the TypeScript types
interface BlogPost {
  $id: string;
  title: string;
  tags: string[];
  content: string;
  coverImage: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  onDelete: (postId: string) => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onDelete }) => {
  const { title, tags, content, coverImage, $id } = post;
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const success = await deleteBlogPost($id);
    if (success) {
      onDelete($id); // Notify parent to remove post
    }
    setLoading(false);
  };

  return (
    <Card className="p-4 ml-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <CardContent>
        <h2 className="text-xl font-bold mt-2 dark:text-white text-gray-900">{title}</h2>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-800 dark:bg-blue-600 text-white text-sm rounded">
              #{tag}
            </span>
          ))}
        </div>
        <p className="dark:text-gray-300 text-gray-600 mt-2 line-clamp-3">{content}</p>
        <Button onClick={() => setIsFullScreen(true)} className="mt-4 mr-4">Read More</Button>
        <Button onClick={() => onDelete($id)} className="dark:bg-red-600 bg-red-700 hover:bg-red-800 dark:hover:bg-red-600">
            Delete
          </Button>
      </CardContent>

      {/* Full-Screen Mode */}
      <Dialog open={isFullScreen} onOpenChange={setIsFullScreen}>
        <DialogContent className="max-w-4xl bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <img src={coverImage} alt={title} className="w-full h-64 object-cover rounded-lg" />
          <div className="flex gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-600 text-white text-sm rounded">
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mt-4">{content}</p>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default BlogPostCard;

