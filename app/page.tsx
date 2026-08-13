import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Services from "../components/Services";
import ImpactStats from "../components/ImpactStats";
import Experiences from "../components/Experiences";
import Founder from "../components/Founder";
import News from "../components/News";
import Notice from "../components/Notice";
import Gallery from "../components/Gallery";
import Volunteer from "../components/Volunteer";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      
      <Hero />

      <About />

      <Programs />
      <Services />
      <ImpactStats />
      <Experiences />
      <Founder />
      <News />

      <Notice />

      <Gallery />
      <Volunteer />

      {/* GOOGLE MAP */}
      <Map />

      <Footer />
    </>
  );
}