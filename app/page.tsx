'use client';
import React, { useState } from 'react';
import OrangeJuiceModelViewer from './components/JuiceboxModelViewer'; 
import SlidingPanel from './components/SlidingPanel';
import SecondSlidingPanel from './components/SecondSlidingPanel'; 
import ThirdSlidingPanel from './components/ThirdSlidingPanel';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; 

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
}

const ProjectCard = ({ image, title, description, isReversed = false }: ProjectCardProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideVariants = {
    hidden: { 
      x: isReversed ? 100 : -100, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideVariants}
      className={`flex flex-col ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-start items-center`}
    >
      <div className={`w-40 h-40 sm:w-40 sm:h-40 ${isReversed ? 'sm:mr-8 lg:ml-8' : 'sm:ml-8 lg:mr-8'} mb-4 sm:mb-0`}>
        <Image
          src={image}
          alt={`${title} Image`}
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <div className="bg-black text-orange-500 p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSecondPanelOpen, setIsSecondPanelOpen] = useState(false); // State for second panel
  const [isThirdPanelOpen, setIsThirdPanelOpen] = useState(false); // State for third panel
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowBackToTop(true);
    // Add your form submission logic here
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 overflow-x-hidden">
    
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
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black-800 mb-8 sm:mb-16 break-words"
    >
      orange.JUICE.WORK
    </motion.h2>
    <div className="space-y-36">
      <ProjectCard
        image="/project1.svg"
        title="Project.Kansas"
        description="Description of Project One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
      />
      
      <ProjectCard
        image="/project2.svg"
        title="Project.monaco"
        description="Description of Project Two. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
        isReversed={true}
      />
      
      <ProjectCard
        image="/project3.svg"
        title="Project.babylon"
        description="Description of Project Three. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit."
      />
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

          <form onSubmit={handleSubmit} className="space-y-8">
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

            <motion.button
              type="submit"
              className="bg-black text-orange-500 px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-black font-semibold"
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.p>
          )}

          {/* Back to Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="mt-12 px-6 py-3 bg-black text-orange-500 rounded-full 
                           hover:bg-gray-900 transition-all duration-300 
                           focus:outline-none focus:ring-2 focus:ring-orange-500 
                           focus:ring-offset-2 focus:ring-offset-orange-400"
              >
                <span className="font-rubik tracking-wider">back.TO.TOP</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </section>

      <footer className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 py-8 text-center mt-auto relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="border-t border-black pt-6"
          >
            <p className="text-sm text-black">&copy; 2024 orange.JUICE Studios. All rights reserved.</p>
            <p className="text-xs mt-2 text-black">This is not a real brand or company. This website is a fictional project for demonstration purposes only.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
