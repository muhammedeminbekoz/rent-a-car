import MainLayout from "@/components/MainLayout";

import Articles from "@/pages/home/container/Articles";
import Hero from "@/pages/home/container/Hero";
import CTA from "@/pages/home/container/CTA";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Articles />
        <CTA />
      </MainLayout>
    </div>
  );
};

export default HomePage;
