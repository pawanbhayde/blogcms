"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@/lib/useUser";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Icons } from "../icons";

type Category = {
  id: number;
  category_name: string;
  created_at: string;
  user_id: string; // Include user_id in the type
};

export function Category() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser(); // Custom hook to get the current user

  const fetchCategories = async () => {
    if (!user) return; // Ensure user is logged in

    setLoading(true);
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
    setLoading(false);
  };

  const deleteCategory = async (id: number) => {
    setLoading(true);
    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id", id)
      .eq("user_id", user!.id);

    if (error) {
      console.error("Error deleting category:", error);
    } else {
      fetchCategories();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, [user]);

  return (
    <div>
      <div className="flex p-10 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Categories</h2>
        <Button className="flex gap-1" onClick={fetchCategories}>
          <Icons.refresh /> Refresh
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr No.</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{category.category_name}</TableCell>
              <TableCell className="text-right">
                {new Date(category.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => deleteCategory(category.id)}
                  disabled={loading}
                  variant="secondary"
                >
                  <Icons.delete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
