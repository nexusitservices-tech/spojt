"use client";

import { Column, Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { nexusConfig } from "@/resources/spojt.config";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Column
        fillWidth
        style={{ minHeight: "100svh" }}
        overflow="hidden"
        minWidth="100vw"
        paddingX="xs"
        center
        background="page"
      >
        <Schema
          as="webPage"
          baseURL={baseURL}
          title={meta.home.title}
          description={meta.home.description}
          path={meta.home.path}
        />
        <Column
          maxWidth="m"
          fillWidth
          style={{ minHeight: "100svh" }}
          vertical="start"
          id="mainContainer"
        >
          {nexusConfig.components.navbar && <Navbar />}
          {nexusConfig.components.hero && <Hero />}
          <Column fillWidth fitHeight gap={0}>
            {nexusConfig.components.stats && <Stats />}
            {nexusConfig.components.services && <Services />}
            {nexusConfig.components.whyChooseUs && <WhyChooseUs />}
            {nexusConfig.components.process && <Process />}
            {nexusConfig.components.testimonials && <Testimonials />}
            {nexusConfig.components.cta && <CTA />}
            {nexusConfig.components.footer && <Footer />}
          </Column>
        </Column>
      </Column>
    </>
  );
}
