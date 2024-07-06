"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Authors } from "@/components/dashboard-component/authorsTable";
import { supabase } from "@/lib/supabaseClient";
import { useState, ChangeEvent, FormEvent } from "react";
import { useUser } from "@/lib/useUser";

const AuthorPage = () => {
  const [name, setName] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user || !name) return;

    setLoading(true);

    let imageUrl: string | null = null;

    if (image) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("author-images")
        .upload(`${user.id}/${image.name}`, image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        setLoading(false);
        return;
      }
      console.log("uploadData", uploadData);

      const publicUrl = supabase.storage
        .from("author-images")
        .getPublicUrl(uploadData.path).data.publicUrl;
      imageUrl = publicUrl || null;
    }

    const { data, error } = await supabase.from("authors").insert([
      {
        name,
        instagram,
        twitter,
        user_id: user.id,
        image_url: imageUrl,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error creating author:", error);
    } else {
      console.log("Author created successfully:", data);
      setName("");
      setInstagram("");
      setTwitter("");
      setImage(null);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
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
          <Input className="mb-3" type="file" onChange={handleImageChange} />
          <Button type="submit"> {loading ? "Submitting..." : "Submit"}</Button>
        </form>
      </div>
      <div className="flex-1 mt-20 lg:mt-0 border">
        <Authors />
      </div>
    </div>
  );
};

export default AuthorPage;
