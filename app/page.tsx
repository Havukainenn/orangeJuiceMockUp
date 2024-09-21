'use client';
import React, { useState } from 'react';
import OrangeJuiceModelViewer from './components/JuiceboxModelViewer'; 
import SlidingPanel from './components/SlidingPanel';
import SecondSlidingPanel from './components/SecondSlidingPanel'; 
import ThirdSlidingPanel from './components/ThirdSlidingPanel';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; 
import Image from 'next/image'; 

const Home: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSecondPanelOpen, setIsSecondPanelOpen] = useState(false); // State for second panel
  const [isThirdPanelOpen, setIsThirdPanelOpen] = useState(false); // State for third panel

  const handleModelClick = () => {
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  const handleOpenSecondPanel = () => {
    setIsPanelOpen(false);
    setIsSecondPanelOpen(true);
  };

  const handleCloseSecondPanel = () => {
    setIsSecondPanelOpen(false);
  };

  const handleOpenThirdPanel = () => {
    setIsSecondPanelOpen(false); // Close second panel
    setIsThirdPanelOpen(true); // Open third panel
  };

  const handleCloseThirdPanel = () => {
    setIsThirdPanelOpen(false);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  
    setTimeout(() => {
      window.scrollBy(0, 75); 
    }, 600); 
  };

  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById('contact-us');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500">
    
      <div className="relative w-full h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-10 sm:bottom-12 md:bottom-14 lg:bottom-16 left-10 sm:left-12 md:left-14 lg:left-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-rubik tracking-widest z-10 cursor-pointer max-w-md sm:max-w-lg lg:max-w-xl break-words hover:text-orange-500"
          onClick={handleModelClick}
        >
          orange.JUICE STUDIOS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-10 right-10 text-xl sm:text-2xl md:text-3xl font-bold text-black font-rubik tracking-wide z-10 cursor-pointer hover:text-yellow-500"
          onClick={handleModelClick}
        >
          MORE.JUICE
        </motion.h2>

        <div className="w-full h-full flex items-center justify-center">
          <div
            className="w-full h-full cursor-pointer"
            onClick={handleModelClick}
            role="button"
            tabIndex={0}
            aria-label="Open Sliding Panel"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleModelClick();
              }
            }}
          >
            <OrangeJuiceModelViewer />
          </div>
        </div>
      </div>

      {/* Sliding Panels */}
      <SlidingPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        onOpenSecondPanel={handleOpenSecondPanel}
      />
      <SecondSlidingPanel
        isOpen={isSecondPanelOpen}
        onClose={handleCloseSecondPanel}
        onOpenThirdPanel={handleOpenThirdPanel} 
      />
      <ThirdSlidingPanel
        isOpen={isThirdPanelOpen}
        onClose={handleCloseThirdPanel} 
        scrollToContactForm={scrollToContactForm} 
      />

      {/* Space */}
      <div className="py-40"></div> 

      {/* Our Projects Section */}
<section id="our-products" className="w-full py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-black-800 mb-16">
      orange.JUICE.WORK
    </h2>
    <div className="space-y-36">
      <div className="flex flex-col sm:flex-row justify-start items-center">
        {/* Project Image */}
        <div className="w-40 h-40 sm:w-40 sm:h-40 sm:ml-8 mb-4 sm:mb-0 lg:mr-8"> {/* Added lg:mr-8 to reintroduce gap */}
          <Image
            src="/project1.svg" 
            alt="Project One Image"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="bg-black text-orange-500 p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3">
          <h3 className="text-3xl font-semibold mb-4">Project.Kansas</h3>
          <p>
            Description of Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse justify-end items-center">
        {/* Project Image */}
        <div className="w-40 h-40 sm:w-40 sm:h-40 sm:mr-8 mb-4 sm:mb-0 lg:ml-8"> {/* Added lg:ml-8 to reintroduce gap */}
          <Image
            src="/project2.svg" 
            alt="Project Two Image"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="bg-black text-orange-500 p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3">
          <h3 className="text-3xl font-semibold mb-4">Project.monaco</h3>
          <p>
            Description of Project Two. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-start items-center">
        <div className="w-40 h-40 sm:w-40 sm:h-40 sm:ml-8 mb-4 sm:mb-0 lg:mr-8"> {/* Added lg:mr-8 to reintroduce gap */}
          <Image
            src="/project3.svg" 
            alt="Project Three Image"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className="bg-black text-orange-500 p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3">
          <h3 className="text-3xl font-semibold mb-4">Project.babylon</h3>
          <p>
            Description of Project Three. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="py-20"></div>

      {/* Contact Us Section */}
      <section id="contact-us" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-12">GET.IN.TOUCH</h2>
          
          <p className="text-black mb-8">
            WE&apos;D LOVE TO HEAR FROM YOU! REACH OUT WITH ANY QUESTIONS, IDEAS, OR JUST TO SAY HI.
          </p>

          <form className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-none text-black placeholder-black focus:outline-none focus:ring-0"
              />
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-none text-black placeholder-black focus:outline-none focus:ring-0"
              />
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>

            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="w-full bg-transparent border-none text-black placeholder-black focus:outline-none focus:ring-0"
                rows={4}
              />
              <div className="w-full h-[1px] bg-black mt-2"></div>
            </div>

            <button
              type="submit"
              className="bg-black text-orange-500 px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <button
        onClick={scrollToProducts}
        className="fixed bottom-8 right-4 bg-black text-orange-500 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-30"
        aria-label="Scroll to Our Projects"
      >
        <FaArrowDown size={16} />
      </button>

      <footer className="w-full text-black py-6 text-center mt-auto">
        <p className="text-sm">&copy; 2024 orange.JUICE Studios. All rights reserved.</p>
        <p className="text-xs mt-2">This is not a real brand or company. This website is a fictional project for demonstration purposes only.</p>
      </footer>
    </div>
  );
};

export default Home;
