import React from "react";
import Hero from "../components/landing/hero";
import Project from "@/components/landing/project";
import Testimonial from "@/components/landing/testimonial";
import SecondCTA from "@/components/landing/second-cta";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Why from "@/components/landing/why";
import Process from "@/components/landing/process";
import Services from "@/components/landing/services";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Services />
      <Project />
      <Testimonial />

      <Why />

      <Process />
      <SecondCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
