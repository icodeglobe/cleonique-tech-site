// src/pages/index.tsx
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleonique Tech Limited</title>
        <meta name="description" content="Premium digital and IT solutions for the UK market" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Cleonique, tech solutions, UK web development, scalable software, digital services" />
        <meta name="author" content="Cleonique Tech Limited" />
        <meta property="og:title" content="Cleonique Tech Limited" />
        <meta property="og:description" content="Scalable digital and IT solutions for businesses in the UK." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://cleoniquetech.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <Header />
      <main className="bg-white text-gray-900 scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
