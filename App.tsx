
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import ProductDetail from './components/ProductDetail';
import FactoryProcess from './components/FactoryProcess';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation onOrder={openContact} />
      <main>
        <div id="origin">
          <Hero />
        </div>
        <Story />
        <ProductDetail />
        <FactoryProcess />
        <Pricing onOrder={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
