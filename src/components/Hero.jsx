import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const textLeft = "일상의 모든 순간에서";
  const textRight = "영감을 얻는 크리에이터";

  const renderText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useGSAP(() => {
    const chars = gsap.utils.toArray('.char');
    const tl = gsap.timeline();
    
    // Initial exploded state
    gsap.set(chars, {
      x: () => gsap.utils.random(-1000, 1000),
      y: () => gsap.utils.random(-1000, 1000),
      z: () => gsap.utils.random(-1000, 1000),
      rotationX: () => gsap.utils.random(-720, 720),
      rotationY: () => gsap.utils.random(-720, 720),
      rotationZ: () => gsap.utils.random(-720, 720),
      opacity: 0,
      scale: () => gsap.utils.random(0.5, 4)
    });

    // Explode into place
    tl.to(chars, {
      x: 0,
      y: 0,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      opacity: 1,
      scale: 1,
      duration: 2.5,
      ease: 'power4.out',
      stagger: {
        amount: 1.5,
        from: 'random'
      }
    });

    // Fade in subtitle
    tl.to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, "-=1.5"); // Start slightly before explosion finishes

  }, { scope: containerRef });

  return (
    <section className="hero" ref={containerRef}>
      <h1 className="hero-title">
        <div className="line">{renderText(textLeft)}</div>
        <div className="line right">{renderText(textRight)}</div>
      </h1>
      <div className="hero-subtitle">
        <p>A creator with a passion for innovation and cutting-edge design.</p>
        <p>Believing that every moment holds transformative inspiration.</p>
      </div>
    </section>
  );
};

export default Hero;
