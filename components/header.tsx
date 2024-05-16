import Image from "next/image";
import { Button } from "./ui/button";

const SiteHeader = () => {
  return (
    <div className="container relative h-16 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div>
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
        </div>
        <h2 className="text-xl font-bold">BlogCMS</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant={"ghost"}>Sign Up</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default SiteHeader;
