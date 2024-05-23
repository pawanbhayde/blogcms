"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <Input placeholder="Enter title here" type="text" name="title" />
        </div>
        <div className="mb-4">
          <label htmlFor="subtitle">Subtitle</label>
          <Input
            placeholder="Enter subtitle here"
            type="text"
            name="subtitle"
          />
        </div>
        <div className="mb-4 flex gap-10">
          <div className="flex-1">
            <label htmlFor="slug">Slug</label>
            <Input placeholder="Enter slug here" type="text" name="slug" />
          </div>
          <div className="flex-1">
            <label htmlFor="slug">Keywords</label>
            <Input placeholder="Enter keywords here" type="text" name="slug" />
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex-1">
            <label htmlFor="coverimage">Cover Image</label>
            <Input type="file" name="coverimage" />
          </div>
          <div className="flex-1">
            <label htmlFor="author">Author</label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="johndoe">John Doe</SelectItem>
                <SelectItem value="cris">Cris Doe</SelectItem>
                <SelectItem value="von">Von Doe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label htmlFor="category">Category</label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Roadmaps">Roadmaps</SelectItem>
              </SelectContent>
            </Select>
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
