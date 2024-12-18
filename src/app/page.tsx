import DealSection from "@/Components/DealSection";
import ElectronicSection from "@/Components/ElectronicSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import HomeSection from "@/Components/HomeSection";

import Navbar from "@/Components/Navbar";
import Recommendation from "@/Components/Recommendation";
import Secondbar from "@/Components/Secondbar";
import SendQuote from "@/Components/Sendquote";
import Service from "@/Components/Service";
import Subscribe from "@/Components/Subscribe";
import Suplier from "@/Components/Supplier";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
        

      <div>
        <Secondbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <DealSection />
      </div>

      <div>
        <HomeSection />
      </div>

      <div>
        <ElectronicSection />
      </div>

      <div>
        <SendQuote />
      </div>

      <div>
        <Recommendation />
      </div>

      <div>
        <Service />
      </div>

      <div>
        <Suplier/>
      </div>

      <div>
        <Subscribe />
      </div>

      <div>
        <Footer />
      </div>


    

    </main>
  );
}
