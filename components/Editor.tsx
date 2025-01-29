"use client";

import { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from 'lexical';

// Import nodes for markdown, lists, and links
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { CodeNode } from "@lexical/code";
import { LinkNode, AutoLinkNode } from "@lexical/link";

// Plugins
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

// Icons
import { Upload, Send } from "lucide-react";

// Toolbar Plugin
import ToolbarPlugin from "./ToolbarPlugin";
import { publishBlog } from "@/lib/appwrite";

const theme = {
  paragraph: "mb-2 text-gray-800 dark:text-gray-100",
  heading: {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
  },
};

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.focus();
  }, [editor]);
  return null;
}

function onError(error: Error) {
  console.error("Lexical Error:", error);
}

const Editor = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [editor, setEditor] = useState<any>(null);

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      HorizontalRuleNode,
      CodeNode,
      LinkNode,
      AutoLinkNode,
    ],
  };

  // Handle Image Upload
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Handle editor content changes
  const handleEditorChange = (editorState: any, editor: any) => {
    editorState.read(() => {
      const root = $getRoot();
      const textContent = root.getTextContent();
      setContent(textContent);
    });
    setEditor(editor);
  };

  // Handle tags input
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagArray = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setTags(tagArray);
  };

  // Handle publish
  const handlePublish = async () => {
    if (!title) {
      alert('Please enter a title for your blog post');
      return;
    }

    if (!content || content.trim() === '') {
      alert('Please add some content to your blog post');
      return;
    }

    if (!image) {
      alert('Please upload a cover image');
      return;
    }

    setIsPublishing(true);
    try {
      await publishBlog(
        title.trim(),
        content.trim(),
        image,
        tags
      );
      // Redirect is handled in the publishBlog function
    } catch (error) {
      console.error('Error publishing:', error);
      alert('Failed to publish blog post. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md max-w-3xl mx-auto space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Create a New Blog Post</h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter your blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-100"
      />

      {/* Tags Input */}
      <input
        type="text"
        placeholder="Enter tags (comma-separated)..."
        onChange={handleTagsChange}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-800 dark:text-gray-100"
      />

      {/* Image Upload */}
      <div className="relative border border-gray-300 dark:border-gray-600 p-2 rounded-md flex flex-col items-center justify-center">
        {image ? (
          <div className="relative w-full">
            <img src={image} alt="Uploaded" className="w-full h-40 object-cover rounded-md" />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ) : (
          <label className="cursor-pointer flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400">
            <Upload size={24} />
            <span>Upload a cover image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>

      {/* Rich Text Editor */}
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <div className="border border-gray-300 dark:border-gray-600 p-2 rounded-md">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="outline-none p-2 min-h-[200px]" />
            }
            placeholder={
              <div className="text-gray-500 dark:text-gray-400">
                Start writing your blog...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <OnChangePlugin onChange={handleEditorChange} />
        <HistoryPlugin />
        <MarkdownShortcutPlugin />
        <ListPlugin />
        <MyCustomAutoFocusPlugin />
      </LexicalComposer>

      {/* Publish Button */}
      <button
        onClick={handlePublish}
        disabled={isPublishing || !title.trim() || !content.trim() || !image}
        className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={18} className="mr-2" />
        {isPublishing ? 'Publishing...' : 'Publish Post'}
      </button>
    </div>
  );
};

export default Editor;
