import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import SelectedWork from "./SelectedWork";
import Recognition from "./Recognition";
import Certifications from "./Certifications";
import LearningJourney from "./LearningJourney";
import TechnicalExpertise from "./TechnicalExpertise";
import Contact from "./Contact";
import Footer from "../layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <Recognition />
        <Certifications />
        <LearningJourney />
        <TechnicalExpertise />
        <Contact />
      </main>

      <Footer />
    </>
  );
}