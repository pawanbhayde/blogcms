import Image from "next/image";
import { Icons } from "../icons";
import Link from "next/link";

const SideHeader = () => {
  const menuList = [
    {
      name: "Dashboard",
      icon: <Icons.home />,
      link: "/dashboard",
    },
    {
      name: "Articles",
      icon: <Icons.articles />,
      link: "/dashboard/articles",
    },
    {
      name: "Categories",
      icon: <Icons.category />,
      link: "/dashboard/categories",
    },
    {
      name: "Authors",
      icon: <Icons.author />,
      link: "/dashboard/authors",
    },
    {
      name: "API",
      icon: <Icons.api />,
      link: "/dashboard/api",
    },
    {
      name: "Settings",
      icon: <Icons.settings />,
      link: "/",
    },
  ];

  return (
    <div>
      <Link href={"/"}>
        <div className="flex gap-3  items-center">
          <div>
            <Image src="/images/logo.png" width={30} height={30} alt="logo" />
          </div>
          <h2 className="text-xl font-bold">BlogCMS</h2>
        </div>
      </Link>
      <div className="mt-8">
        {menuList.map((menu) => (
          <Link href={menu.link}>
            <div className="flex gap-3 rounded p-3 hover:bg-blue-50 items-center">
              {menu.icon}
              <span className="text-sm font-medium">{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
