"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateArticle = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [htmlContent, setHtmlContent] = useState("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    setHtmlContent(newContent);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here, e.g., send content to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <Input type="text" id="title" name="title" />
        </div>
        <div className="flex w-full gap-10">
          <div className="w-[300px]">
            <label htmlFor="author">Author</label>
            <Input type="text" id="author" name="author" />
          </div>
          <div className="w-[300px]">
            <label htmlFor="category">Category</label>
            <Input type="text" id="category" name="category" />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="content">Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={handleEditorChange}
          />
        </div>
        <Button className="absolute top-20 right-10" type="submit">
          Publish
        </Button>
      </form>
      <div className="mt-10">
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </div>
  );
};

export default CreateArticle;
