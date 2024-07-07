"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@/lib/useUser";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type Author = {
  id: number;
  name: string;
  image_url: string;
  instagram: string;
  twitter: string;
};

type Category = {
  id: number;
  category_name: string;
};

const CreateArticle = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [slug, setSlug] = useState("");
  const [keywords, setKeywords] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    setHtmlContent(newContent);
  };

  useEffect(() => {
    const fetchAuthors = async () => {
      const { data, error } = await supabase.from("authors").select("*");
      if (error) console.error("Error fetching authors:", error);
      else setAuthors(data as Author[]);
    };

    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) console.error("Error fetching categories:", error);
      else setCategories(data as Category[]);
    };

    fetchAuthors();
    fetchCategories();
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const slug = generateSlug(title);
    if (!user || !title) return;

    let coverImageUrl: string | null = null;

    if (coverImage) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("author-images")
        .upload(`${user.id}/${coverImage.name}`, coverImage);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        setLoading(false);
        return;
      }
      console.log("uploadData", uploadData);

      const publicUrl = supabase.storage
        .from("author-images")
        .getPublicUrl(uploadData.path).data.publicUrl;
      coverImageUrl = publicUrl || null;
    }

    const { error } = await supabase.from("articles").insert([
      {
        title,
        subtitle,
        slug,
        keywords: keywords.split(",").map((keyword) => keyword.trim()),
        cover_image_url: coverImageUrl,
        author_id: selectedAuthor,
        category_id: selectedCategory,
        content,
      },
    ]);

    if (error) {
      console.error("Error creating article:", error);
    } else {
      console.log("Article created successfully");
      setTitle("");
      setSubtitle("");
      setKeywords("");
      setCoverImage(null);
      setSelectedAuthor(null);
      setSelectedCategory(null);
      setContent("");
      setHtmlContent("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <Input
            placeholder="Enter title here"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subtitle">Subtitle</label>
          <Input
            placeholder="Enter subtitle here"
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-10">
          <div className="flex-1">
            <label htmlFor="slug">Slug</label>
            <Input
              placeholder="Enter slug here"
              type="text"
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="keywords">Keywords</label>
            <Input
              placeholder="Enter keywords here"
              type="text"
              name="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex-1">
            <label htmlFor="coverimage">Cover Image</label>
            <Input
              type="file"
              name="coverimage"
              onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="author">Author</label>
            <Select onValueChange={(value) => setSelectedAuthor(Number(value))}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                {authors.map((author) => (
                  <SelectItem key={author.id} value={String(author.id)}>
                    {author.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label htmlFor="category">Category</label>
            <Select
              onValueChange={(value) => setSelectedCategory(Number(value))}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={String(category.id)}>
                    {category.category_name}
                  </SelectItem>
                ))}
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
          {loading ? "Publishing..." : "Publish"}
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
