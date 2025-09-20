import React from "react";
import Hero from "../components/landing/hero";
import TrustBrand from "@/components/landing/trust-brand";
import About from "@/components/landing/about-us";
import Process from "@/components/landing/process";
import Project from "@/components/landing/project";
import FirstCTA from "@/components/landing/first-cta";
import Testimonial from "@/components/landing/testimonial";
import Pricing from "@/components/landing/pricing";
import SecondCTA from "@/components/landing/second-cta";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <TrustBrand />
      <About />
      <Process />
      <Project />
      <FirstCTA />
      <Testimonial />
      <Pricing />
      <SecondCTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
