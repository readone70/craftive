import React from "react";
import Hero from "./landing/hero";
import Testimonial from "@/app/landing/testimonial";
import SecondCTA from "@/app/landing/second-cta";
import FAQ from "@/app/landing/faq";
import Footer from "@/app/landing/footer";
import Why from "@/app/landing/why";
import Process from "@/app/landing/process";
import Services from "@/app/landing/services/services";
import Projects from "./landing/projects/projects";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Services />
      <Projects />
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
