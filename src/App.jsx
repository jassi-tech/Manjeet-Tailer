import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Services from './sections/Services';
import WorkGallery from './sections/WorkGallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BookingModal from './components/BookingModal';
import { SITE_CONTENT } from './constants/content';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const phoneNumber = SITE_CONTENT.contact.details.find(d => d.icon === 'phone')?.value || '9878850321';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookClick={openModal} />

      <div className="pt-s-120">
        <Hero onBookClick={openModal} />
        <About />
        <Features />
        <Services />
        <WorkGallery onBookClick={openModal} />
        <Contact />
        <Footer />
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        phoneNumber={phoneNumber}
      />
    </div>
  );
};

export default App;
