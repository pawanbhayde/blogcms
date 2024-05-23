"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Authors } from "@/components/dashboard-component/authorsTable";
import { useUser } from "@/lib/useUser";

const AuthorPage = () => {
  const [authorName, setAuthorName] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [authorImage, setAuthorImage] = useState<File | null>(null);
  const { user } = useUser(); // Get the current logged-in user

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user || !authorName) return;

    const formData = new FormData();
    formData.append("name", authorName);
    formData.append("instagram_username", instagramUsername);
    formData.append("twitter_username", twitterUsername);
    if (authorImage) {
      formData.append("author_image", authorImage);
    }

    try {
      const { data, error } = await supabase.from("authors").insert([
        {
          user_id: user.id,
          name: authorName,
          instagram_username: instagramUsername,
          twitter_username: twitterUsername,
          author_image: authorImage ? authorImage : null,
        },
      ]);
      if (error) {
        console.error("Error creating author:", error);
      } else {
        console.log("Author created successfully:", data);
        // Clear form fields after successful submission
        setAuthorName("");
        setInstagramUsername("");
        setTwitterUsername("");
        setAuthorImage(null);
      }
    } catch (error) {
      console.error("Error creating author: ", error);
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
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <label htmlFor="instagram">Enter your Instagram username</label>
          <Input
            className="mb-3"
            placeholder="Instagram Username"
            type="text"
            value={instagramUsername}
            onChange={(e) => setInstagramUsername(e.target.value)}
          />
          <label htmlFor="twitter">Enter your Twitter username</label>
          <Input
            className="mb-3"
            placeholder="Twitter username"
            type="text"
            value={twitterUsername}
            onChange={(e) => setTwitterUsername(e.target.value)}
          />
          <label htmlFor="image">Upload Author Image</label>
          <Input
            className="mb-3"
            type="file"
            onChange={(e) => setAuthorImage(e.target.files?.[0] || null)}
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
