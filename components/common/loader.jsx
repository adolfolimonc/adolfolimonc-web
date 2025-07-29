'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Hello messages in different languages
const helloMessages = [
  "Hello",
  "Hola",
  "Bonjour", 
  "Ciao",
  "Hallo",
  "Olá",
  "Привет",
  "こんにちは",
  "안녕하세요",
  "你好",
  "مرحبا",
  "สวัสดี",
  "Xin chào",
  "Merhaba"
];

// Page-specific messages
const pageMessages = {
  '/': helloMessages,
  '/work': ['Work', 'Trabajo', 'Travail', 'Lavoro', 'Arbeit', 'Trabalho'],
  '/work/': ['Work', 'Trabajo', 'Travail', 'Lavoro', 'Arbeit', 'Trabalho'],
  '/capabilities': ['Capabilities', 'Capacidades', 'Capacités', 'Capacità', 'Fähigkeiten', 'Capacidades'],
  '/capabilities/': ['Capabilities', 'Capacidades', 'Capacités', 'Capacità', 'Fähigkeiten', 'Capacidades'],
  '/about': ['About', 'Sobre', 'À propos', 'Su di', 'Über', 'Sobre'],
  '/about/': ['About', 'Sobre', 'À propos', 'Su di', 'Über', 'Sobre'],
  '/contact': ['Contact', 'Contacto', 'Contact', 'Contatto', 'Kontakt', 'Contato'],
  '/contact/': ['Contact', 'Contacto', 'Contact', 'Contatto', 'Kontakt', 'Contato'],
  '/team': ['Team', 'Equipo', 'Équipe', 'Squadra', 'Team', 'Equipe'],
  '/team/': ['Team', 'Equipo', 'Équipe', 'Squadra', 'Team', 'Equipe'],
  '/blog': ['Blog', 'Blog', 'Blog', 'Blog', 'Blog', 'Blog'],
  '/blog/': ['Blog', 'Blog', 'Blog', 'Blog', 'Blog', 'Blog'],
  '/faqs': ['FAQs', 'Preguntas', 'FAQ', 'FAQ', 'FAQ', 'FAQ'],
  '/faqs/': ['FAQs', 'Preguntas', 'FAQ', 'FAQ', 'FAQ', 'FAQ']
};

function LoadingScreen() {
  const pathname = usePathname();
  const [currentMessage, setCurrentMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get messages for current page or default to hello messages
    const messages = pageMessages[pathname] || helloMessages;
    
    // Select initial random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMessage);

    // Cycle through messages while loading
    const messageInterval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMessage);
    }, 1000);

    // Function to start the exit animation
    const startExitAnimation = () => {
      clearInterval(messageInterval);
      
      const svg = document.getElementById('svg');
      if (!svg) return;

      const tl = window.gsap.timeline();
      const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
      const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

      tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
        delay: 0.5,
        y: -100,
        opacity: 0,
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: 'power2.easeIn',
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: 'power2.easeOut',
      });
      tl.to('.loader-wrap', { y: -1500 });
      tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
      tl.from('header', { y: 200 }, '-=1.5');
      tl.from(
        'header .container',
        { y: 40, opacity: 0, delay: 0.3 },
        '-=1.5'
      );
      
      // Add loaded class to body to show main content
      document.body.classList.add('loaded');

      setIsLoading(false);
    };

    // Wait for everything to be ready
    const waitForReady = () => {
      return new Promise((resolve) => {
        const checkReady = () => {
          if (typeof window !== 'undefined' && 
              typeof window.gsap !== 'undefined' && 
              document.readyState === 'complete') {
            resolve();
          } else {
            setTimeout(checkReady, 50);
          }
        };
        checkReady();
      });
    };

    // Start the loading process
    waitForReady().then(() => {
      // Add a delay to ensure everything is properly initialized
      setTimeout(startExitAnimation, 1000);
    });

    // Cleanup interval on component unmount
    return () => {
      clearInterval(messageInterval);
    };
  }, [pathname]);

  // Get messages for current page
  const messages = pageMessages[pathname] || helloMessages;
  const initialMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          {(currentMessage || initialMessage).split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
