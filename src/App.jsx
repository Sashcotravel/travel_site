import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import PopAppWin from "./components/PopAppWin";
import emailjs from "@emailjs/browser";
import s from './components/Navbar.module.css'

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

    emailjs.init("938710462a5c1bb2ad85688812ab3da4");

  return (
    <div>
      <ScrollToTop />
      <Navbar />
        <h1 className={s.titMain}>ROYAL TOUR</h1>
      <Hero />
      <PopAppWin />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}
