import Navbar from "./components/navbar/navbar";
import HeroBanner from "./components/hero-banner/hero-banner";
import AboutMe from "./components/about-me/about-me";
import Portfolio from "./components/portfolio/portfolio";
import ClientRating from "./components/client-rating/client-rating";
import Experience from "./components/experience/experience";
import ContactMe from "./components/contact-me/contact-me";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutMe />
      <Portfolio />
      <ClientRating />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}
