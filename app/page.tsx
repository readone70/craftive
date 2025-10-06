import React from "react";
import Hero from "../components/landing/hero";
import Services from "@/components/landing/services";
import Project from "@/components/landing/project";
import Testimonial from "@/components/landing/testimonial";
import SecondCTA from "@/components/landing/second-cta";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Services />
      <Testimonial />
      <Project />
      <SecondCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
