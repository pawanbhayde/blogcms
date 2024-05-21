import { Authors } from "@/components/dashboard-component/authorsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CategoryPage = () => {
  return (
    <div className="lg:flex">
      <div className="flex-1">
        <h1 className="text-5xl font-bold pb-4">Create an author</h1>
        <p className="text-lg text-muted-foreground pb-4 font-semibold">
          Create an author to add to your articles
        </p>
        <label htmlFor="category">Enter your name</label>
        <Input className="mb-3 w-9/12" placeholder="Name" type="text" />
        <label htmlFor="category">Enter your instagram username</label>
        <Input
          className="mb-3 w-9/12"
          placeholder="Instagram Username"
          type="text"
        />
        <label htmlFor="category">Enter your twitter username</label>
        <Input
          className="mb-3 w-9/12"
          placeholder="Twitter username"
          type="text"
        />
        <label htmlFor="category">Upload Author Image</label>
        <Input className="mb-3 w-9/12" type="file" />
        <Button>Submit</Button>
      </div>
      <div className="flex-1 mt-20 lg:mt-0 border">
        <Authors />
      </div>
    </div>
  );
};

export default CategoryPage;
