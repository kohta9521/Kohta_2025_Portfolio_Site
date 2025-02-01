// components
import Header from "@/components/organism/Header";
import MobileHeader from "@/components/organism/MobileHeader";
import Hero from "@/components/organism/Hero";
import About from "@/components/organism/About";
import Service from "@/components/organism/Service";
import Profile from "@/components/organism/Profile";
import News from "@/components/organism/News";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Blog from "@/components/organism/Blog";
import Case from "@/components/organism/Case";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <MobileHeader />
      <Hero />
      <About />
      <Service />
      <Profile />
      <Case />
      <Blog />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
