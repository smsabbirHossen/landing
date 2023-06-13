import Banner from "@/components/Banner";
import CoreFeature from "@/components/CoreFeature";
import Feed from "@/components/Feed";

import KeyFeature from "@/components/Key-Feature";
import PrichingFeature from "@/components/PrichingFeature";
import Qualitys from "@/components/Qualitys";
import Services from "@/components/Services";
import SimpleSlider from "@/components/Testimonials";

import Blogs from "@/components/Blogs";
import Subscribe from "@/components/Subscribe";
import NewsSelter from "@/components/NewsSelter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col mt-[20px]  " id="/">
      <h1 className="head_text text-center">
        Top Quality Digital
        <br className="" />
        <span className="orange_gradient text-center">Products To Explore</span>
      </h1>
      <p className="desc text-center">
        Get your blood tests delivered at let home collect sample from the
        victory of the managements that supplies best design system guidelines
        ever.
      </p>
      <Feed />
      <Banner />
      <KeyFeature />
      <Services />
      <Qualitys />
      <PrichingFeature />
      <CoreFeature />

      <SimpleSlider />
      <Blogs />
      <Subscribe />
      <NewsSelter />
      <Footer />
    </section>
  );
};

export default Home;
