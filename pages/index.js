// Author: Jakob Rose
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import ParallaxSection from '../components/ParallaxSection';
import AdPlaceholder from '../components/AdPlaceholder';
import Footer from '../components/Footer';
import PartyStats from '../components/PartyStats';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const parties = [
  { name: "Labour", color: "#e4003b" },
  { name: "Conservative", color: "#0087dc" },
  { name: "Lib Dem", color: "#fdbb30" },
  { name: "Reform", color: "#12b6cf" },
  { name: "Greens", color: "#6ab023" },
  { name: "SNP", color: "#fdf38e" },
  { name: "Plaid Cymru", color: "#3f8428" },
  { name: "Independents", color: "#888" },
  { name: "Raving Looneys", color: "#ff69b4" },
];

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Example: Animate each section on scroll
    sectionsRef.current.forEach((section, idx) => {
      if (section) {
        gsap.fromTo(section, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Marquee */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="marquee flex animate-marquee whitespace-nowrap">
          <span className="mx-4">Live Polling: [API Data]</span>
          <span className="mx-4">GDP: [API Data]</span>
          <span className="mx-4">Interest: [API Data]</span>
        </div>
      </div>

      <Header />
      <MainMenu />

      <div className="max-w-3xl mx-auto my-6 text-center">
        <p className="font-medium text-lg">
          Welcome to Reinformed.uk<br />
          Your trusted hub for data-driven insights, financial clarity, and sharp political analysis.
          <br />
          At Reinformed.uk, we bring you live datasets, real-time polling, and original in-house articles crafted by our expert team-cutting through noise with informed perspectives. Whether you're tracking the latest trends in the economy or diving into the evolving political landscape, our mission is to keep you accurately informed and critically engaged.
          <br />
          Explore our curated dashboards, follow the numbers that matter, and join the conversation that shapes tomorrow.
        </p>
      </div>

      <AdPlaceholder id={1} />

      {/* UK Politics Section */}
      <ParallaxSection id="politics" ref={el => sectionsRef.current[0] = el}>
        <h2 className="text-3xl font-bold mb-8 text-center">UK Politics</h2>
        <div className="bg-white p-4 rounded shadow mb-8">
          <h3 className="text-xl font-semibold mb-2">National Political Data</h3>
          <div>[Live League Table: API Data/Graphs]</div>
        </div>
        <AdPlaceholder id={2} />
        <div className="flex overflow-x-auto space-x-6 py-4">
          {parties.map((party, idx) => (
            <div key={party.name} id={`party-${party.name.replace(/\s/g, '').toLowerCase()}`}>
              <PartyStats party={party} data={{}} />
              <AdPlaceholder id={`P${idx + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <span className="animate-bounce text-3xl">&#8595;</span>
        </div>
      </ParallaxSection>

      <AdPlaceholder id={3} />

      {/* UK Economy Section */}
      <ParallaxSection id="economy" ref={el => sectionsRef.current[1] = el}>
        <h2 className="text-3xl font-bold mb-8 text-center">UK Economy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Each item below should be a live graph from API */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">GDP</h3>
            <div>[Graph: Nominal, Real, Growth Rate]</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Unemployment Rates</h3>
            <div>[Graph: Overall, Youth, Long-Term]</div>
          </div>
          {/* ...repeat for all economy data points as per your description */}
        </div>
      </ParallaxSection>

      <AdPlaceholder id={4} />

      {/* Contact Section */}
      <ParallaxSection id="contact" ref={el => sectionsRef.current[2] = el}>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-center mb-4">
          If you want to advertise in one of the spaces or buy API access then please click below:
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:contact@reinformed.uk"
            className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </ParallaxSection>

      <Footer />
    </div>
  );
}
