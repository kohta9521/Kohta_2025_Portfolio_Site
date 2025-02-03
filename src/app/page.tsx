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
// import ContactBox from "@/components/atoms/ContactBox";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      {/* <ContactBox /> */}
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
