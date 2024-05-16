import CreatorTools from "@/components/creatortools";
import Footer from "@/components/footer";
import SiteHeader from "@/components/header";
import SiteHero from "@/components/hero";
import NewsLetter from "@/components/newslatter";
import TryBlogCMS from "@/components/tryblogcms";

const Home = () => {
  return (
    <div>
      <SiteHeader />
      <SiteHero />
      <CreatorTools />
      <TryBlogCMS />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
