import { Articles } from "@/components/dashboard-component/articleTable";
import { Authors } from "@/components/dashboard-component/authorsTable";
import { Category } from "@/components/dashboard-component/categoriesTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileIcon, FolderIcon, UsersIcon, CodeIcon, Link } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <Button size="sm">Create Article</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Articles</CardTitle>
                <CardDescription>234 articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <FileIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-2xl font-semibold">234</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Categories</CardTitle>
                <CardDescription>45 categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <FolderIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-2xl font-semibold">45</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Authors</CardTitle>
                <CardDescription>18 authors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-2xl font-semibold">18</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>API Requests</CardTitle>
                <CardDescription>1,234 requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-2xl font-semibold">1,234</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Articles</h2>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
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
                  <h3 className="text-lg font-semibold">
                    Mastering Headless CMS: A Comprehensive Guide
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover the power of headless CMS and how it can transform
                    your content management workflow.
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
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      May 24, 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
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
                  <h3 className="text-lg font-semibold">
                    Unleashing the Power of Headless CMS: A Beginner's Guide
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the fundamentals of headless CMS and how it can
                    revolutionize your content management strategy.
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
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      May 22, 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
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
                  <h3 className="text-lg font-semibold">
                    Headless CMS: The Future of Content Management
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover why headless CMS is the next big thing in content
                    management and how it can benefit your organization.
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
                        Michael Johnson
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      May 20, 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
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
                  <h3 className="text-lg font-semibold">
                    Headless CMS: Revolutionizing Content Delivery
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore how headless CMS can transform the way you deliver
                    content across multiple platforms and devices.
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
                      <span className="text-sm font-medium">Sarah Lee</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      May 18, 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
