"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Authors } from "@/components/dashboard-component/authorsTable";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const AuthorPage = () => {
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [image, setImage] = useState<File | null>(null); // Define the type for the image state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = "";

    try {
      // Upload image to Supabase storage
      if (image) {
        const { data, error } = await supabase.storage
          .from("authors")
          .upload(`public/${image.name}`, image);

        if (error) {
          console.error("Error uploading image:", error);
          return;
        }
        imageUrl = data.path;
      }

      // Insert author data into Supabase
      const { error } = await supabase
        .from("authors")
        .insert([{ name, instagram, twitter, image_url: imageUrl }]);

      if (error) {
        console.error("Error inserting author:", error);
      } else {
        alert("Author created successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="lg:flex">
      <div className="flex-1 mr-0 lg:mr-10">
        <h1 className="text-5xl font-bold pb-4">Create an author</h1>
        <p className="text-lg text-muted-foreground pb-4 font-semibold">
          Create an author to add to your articles
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name</label>
          <Input
            className="mb-3"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="instagram">Enter your Instagram username</label>
          <Input
            className="mb-3"
            placeholder="Instagram Username"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <label htmlFor="twitter">Enter your Twitter username</label>
          <Input
            className="mb-3"
            placeholder="Twitter username"
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <label htmlFor="image">Upload Author Image</label>
          <Input
            className="mb-3"
            type="file"
            onChange={handleImageChange} // Use the separate function to handle image change
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="flex-1 mt-20 lg:mt-0 border">
        <Authors />
      </div>
    </div>
  );
};

export default AuthorPage;
