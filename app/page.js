"use client";
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
import Reval from "@/components/Reval";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <section>
      <div className="main">
        <div className="gradient"></div>
      </div>
      {loading ? (
        <section
          className="app scroll-smooth relative overflow-hidden md:overflow-visible"
          id="/"
        >
          <Reval>
            <Nav />
          </Reval>
          <Reval>
            <h1 className="head_text text-center">
              Top Quality Digital
              <br className="" />
              <span className="orange_gradient text-center">
                Products To Explore
              </span>
            </h1>
          </Reval>
          <Reval>
            <p className="desc text-center">
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>
          </Reval>
          <Feed />
          <Banner />
          <KeyFeature />
          <Services />

          <PrichingFeature />
          <CoreFeature />
          <SimpleSlider />
          <Qualitys />
          <Blogs />
          <Subscribe />
          <NewsSelter />
          <Footer />
        </section>
      ) : (
        <PreLoader />
      )}
    </section>
  );
};

export default Home;
