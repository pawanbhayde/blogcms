import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Articles = () => {
  const ArticlesList = [
    {
      title: "Mastering Headless CMS: A Comprehensive Guide",
      description:
        "Discover the power of headless CMS and how it can transform your content management workflow.",
      author: "John Doe",
      date: "May 24, 2024",
    },
    {
      title: "Unleashing the Power of Headless CMS: A Beginner's Guide",
      description:
        "Explore the fundamentals of headless CMS and how it can revolutionize your content management strategy.",
      author: "Jane Smith",
      date: "May 22, 2024",
    },
    {
      title: "Headless CMS: The Future of Content Management",
      description:
        "Discover why headless CMS is the next big thing in content management and how it can benefit your organization.",
      author: "Michael Johnson",
      date: "May 20, 2024",
    },
    {
      title: "Headless CMS: Revolutionizing Content Delivery",
      description:
        "Explore how headless CMS can transform the way you deliver content across multiple platforms and devices.",
      author: "Sarah Lee",
      date: "May 18, 2024",
    },
    {
      title: "Mastering Headless CMS: A Comprehensive Guide",
      description:
        "Discover the power of headless CMS and how it can transform your content management workflow.",
      author: "John Doe",
      date: "May 24, 2024",
    },
    {
      title: "Unleashing the Power of Headless CMS: A Beginner's Guide",
      description:
        "Explore the fundamentals of headless CMS and how it can revolutionize your content management strategy.",
      author: "Jane Smith",
      date: "May 22, 2024",
    },
    {
      title: "Headless CMS: The Future of Content Management",
      description:
        "Discover why headless CMS is the next big thing in content management and how it can benefit your organization.",
      author: "Michael Johnson",
      date: "May 20, 2024",
    },
  ];
  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Articles</h1>
          <Link href={'/dashboard/articles/create'}>
            <Button size="sm">Create Article</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ArticlesList.map((article, index) => (
            <Card key={index}>
              <CardContent>
                <div className="pt-6">
                  <img
                    alt="Article image"
                    className="aspect-video rounded-md object-cover"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Author avatar"
                        className="h-8 w-8 rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span className="text-sm font-medium">
                        {article.author}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
