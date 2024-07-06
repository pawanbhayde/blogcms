"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "../ui/button";
import { useUser } from "@/lib/useUser";

interface Author {
  id: string;
  image_url: string;
  name: string;
  instagram: string;
  twitter: string;
  user_id: string;
  created_at: string;
}

export function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();

  const fetchAuthors = async () => {
    if (!user) return;

    setLoading(true);
    const { data, error } = await supabase
      .from("authors")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching authors:", error);
    } else {
      setAuthors(data);
    }
    setLoading(false);
  };

  const deleteAuthor = async (id: string) => {
    setLoading(true);
    const { error } = await supabase
      .from("authors")
      .delete()
      .eq("id", id)
      .eq("user_id", user!.id);

    if (error) {
      console.error("Error deleting author:", error);
    } else {
      fetchAuthors();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAuthors();
  }, [user]);

  if (loading) {
    return (
      <p className="w-full h-full flex items-center justify-center">
        Loading...
      </p>
    );
  }

  return (
    <div>
      <div className="flex p-10 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Authors</h2>
        <Button className="flex gap-1" onClick={fetchAuthors}>
          <Icons.refresh /> Refresh
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr No.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Instagram</TableHead>
            <TableHead>Twitter</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {authors.map((author, index) => (
            <TableRow key={author.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <img
                  src={author.image_url}
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="author"
                />
              </TableCell>
              <TableCell>{author.name}</TableCell>
              <TableCell>
                <Link
                  href={`https://www.instagram.com/${author.instagram}`}
                  target="_blank"
                >
                  <Icons.instagram />
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`https://www.twitter.com/${author.twitter}`}
                  target="_blank"
                >
                  <Icons.twitter />
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => deleteAuthor(author.id)}
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
