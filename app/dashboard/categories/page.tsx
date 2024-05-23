"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/lib/useUser"; // Custom hook to get the current user
import { Category } from "@/components/dashboard-component/categoriesTable";

const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser(); // Custom hook to get the current user

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user || !categoryName) return; // Ensure user is logged in and category is not empty

    setLoading(true);

    const { data, error } = await supabase
      .from("categories")
      .insert([{ category_name: categoryName, user_id: user.id }]); // Include user ID

    setLoading(false);

    if (error) {
      console.error("Error creating category:", error);
    } else {
      console.log("Category created successfully:", data);
      setCategoryName("");
    }
  };

  return (
    <div className="lg:flex">
      <div className="flex-1 mr-0 lg:mr-10">
        <h1 className="text-5xl font-bold pb-4">Create a category</h1>
        <p className="text-lg text-muted-foreground pb-4 font-semibold">
          Categories help organize your articles
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Category</label>
          <Input
            className="mb-3"
            type="text"
            id="category"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
      <div className="flex-1 border mt-20 lg:mt-0">
        <Category />
      </div>
    </div>
  );
};

export default CategoryPage;
