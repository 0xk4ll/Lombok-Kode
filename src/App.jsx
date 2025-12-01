import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingSection from "./components/PricingSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <PricingSection />
        <PortfolioGrid />
        <Testimonials />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;
