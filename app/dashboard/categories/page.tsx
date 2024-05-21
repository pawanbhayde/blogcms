import { Category } from "@/components/dashboard-component/categoriesTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CategoryPage = () => {
  return (
    <div className="lg:flex">
      <div className="flex-1">
        <h1 className="text-5xl font-bold pb-4">Create a category</h1>
        <p className="text-lg text-muted-foreground pb-4 font-semibold">
          Categories help organize your articles
        </p>
        <label htmlFor="category">Category</label>
        <Input className="mb-3 w-9/12" type="text" />
        <Button>Submit</Button>
      </div>
      <div className="flex-1 border mt-20 lg:mt-0">
        <Category />
      </div>
    </div>
  );
};

export default CategoryPage;
