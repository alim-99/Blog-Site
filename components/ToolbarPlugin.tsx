import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
} from "lexical";
import { Bold, Italic, Strikethrough, List } from "lucide-react";
import { useCallback } from "react";

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const applyFormat = useCallback((command: string) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  }, [editor]);

  return (
    <div className="flex space-x-2 mb-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-md">
      <button onClick={() => applyFormat("bold")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
        <Bold className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
      <button onClick={() => applyFormat("italic")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
        <Italic className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
      <button onClick={() => applyFormat("strikethrough")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
        <Strikethrough className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
      <button onClick={() => editor.dispatchCommand("insertUnorderedList", undefined)} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
        <List className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
    </div>
  );
};

export default ToolbarPlugin;
