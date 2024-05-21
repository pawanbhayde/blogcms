import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Articles = () => {
  const ArticlesList = [
    {
      title: "Article 1",
      description: "Article Description 1",
      author: "Author 1",
      category: "Category 1",
    },  
    {
      title: "Article 2",
      description: "Article Description 1",
      author: "Author 2",
      category: "Category 2",
    },
    {
      title: "Article 3",
      description: "Article Description 1",
      author: "Author 3",
      category: "Category 3",
    },
    {
      title: "Article 3",
      description: "Article Description 1",
      author: "Author 3",
      category: "Category 3",
    },
    {
      title: "Article 3",
      description: "Article Description 1",
      author: "Author 3",
      category: "Category 3",
    },
  ];
  return (
    <div className="">
      <Link href={"/dashboard/articles/create"}>
        <Button className="absolute top-20 right-10">Create</Button>
      </Link>
      <div className="flex flex-wrap gap-10">
        {ArticlesList.map((article) => (
          <Card className="w-[400px]">
            <CardHeader>
              <Icons.document />
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
              <div className="flex justify-between">
                <CardDescription>{article.author}</CardDescription>
                <CardDescription>{article.category}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;
