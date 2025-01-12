"use client";

import Footer from "@/sections/Footer";
import StickyCursor from "@/components/StickyCursor";
import { useRef } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import FAQs from "@/sections/FAQs";
import Certificates from "@/sections/Certificates";

export default function Home() {
  const stickyElement = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header ref={stickyElement} />
      <Hero />
      <Intro />
      <Projects />
      <Certificates />
      <FAQs />
      <Footer />
      <StickyCursor stickyElement={stickyElement} />
    </>
  );
}
