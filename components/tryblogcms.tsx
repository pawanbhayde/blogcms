import Link from "next/link";

const TryBlogCMS = () => {
  return (
    <div className="container relative py-20 flex flex-col items-start ">
      <h1 className="max-w-6xl text-2xl leading-tight md:text-5xl font-semibold text-black tracking-tight">
        BlogCMS is a powerful app for professional publishers to create, share,
        and grow a business around their content. It comes with modern tools to
        build a website, publish content, send newsletters & offer paid
        subscriptions to members.
      </h1>
      <Link href="/">
        <h1 className="lg:text-3xl font-bold pt-5 text-muted-foreground">
          Try BlogCMS completely free for →
        </h1>
      </Link>
    </div>
  );
};

export default TryBlogCMS;
