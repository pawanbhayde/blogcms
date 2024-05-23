import { Articles } from "@/components/dashboard-component/articleTable";
import { Authors } from "@/components/dashboard-component/authorsTable";
import { Category } from "@/components/dashboard-component/categoriesTable";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div>
      <Tabs defaultValue="article" className="">
        <TabsList>
          <TabsTrigger value="article">Article</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="author">Authors</TabsTrigger>
        </TabsList>
        <TabsContent value="article">
          <Card>
            <Articles />
          </Card>
        </TabsContent>
        <TabsContent value="categories">
          <Card>
            <Category />
          </Card>
        </TabsContent>
        <TabsContent value="author">
          <Card>
            <Authors />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
