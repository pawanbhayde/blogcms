import SideHeader from "@/components/dashboard-component/sideheader";
import { Icons } from "@/components/icons";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AccountdownMenu } from "@/components/acountdrop";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="h-screen lg:block hidden p-8 fixed w-64 border-r">
        <SideHeader />
      </div>
      <div className=" lg:ml-64 w-full">
        <div className="h-16 border-b flex items-center justify-between  lg:justify-end px-10">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Icons.menu />
              </SheetTrigger>
              <SheetContent>
                <SideHeader />
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <AccountdownMenu />
          </div>
        </div>
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}
