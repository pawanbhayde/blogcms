const Footer = () => {
  return (
    <div className=" border-t">
      <div className="container relative py-20">
        <div className="lg:flex justify-between pb-10">
          <div className="flex flex-col gap-10 pb-10 lg:pb-0">
            <h1 className="text-lg font-semibold">BlogCMS</h1>
            <p>
              I built this because I didn't want to read <br /> the docs of
              another CMS.
            </p>
            <p>Made with ❤️ by Pawan.</p>
          </div>
          <div className="flex gap-10">
            <div>
              <h1 className="text-lg font-semibold">Resources</h1>
              <ul className="flex flex-col gap-2">
                <li>Docs</li>
                <li>Blog</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Social</h1>
              <ul className="flex flex-col gap-2">
                <li>X</li>
                <li>Linkedin</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="w-full pt-10 border-t">
          © 2024 BlogCMS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
