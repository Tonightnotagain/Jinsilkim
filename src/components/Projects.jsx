import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { id: 1, title: 'NAVER Blog', category: 'Web Design', year: 'Since 2025', link: 'https://blog.naver.com/sodeepka', previewLink: 'https://m.blog.naver.com/sodeepka', previewType: 'iframe' },
  { id: 2, title: 'Bohol Travel App', category: 'Development', year: '2026', link: '/bohol_itinerary.html', previewType: 'image', previewImage: '/Bohol.png' },
  { id: 3, title: 'Yutube', category: 'Creative Coding', year: 'since 2025', link: 'https://youtube.com/@jinsilkim9348?si=pl27_ejE8hdiBRf-', previewType: 'image', previewImage: 'https://yt3.googleusercontent.com/ytc/AIdro_nSwFP5uG3HCA0nCzNRyMbBYCsU3OnDtJ1yyAk7LZo=s900-c-k-c0x00ffffff-no-rj' },
  { id: 4, title: '전단지상품카드생성기', category: 'UX Research', year: '2026', link: '/card-maker.html', previewType: 'image', previewImage: '/CardMaker.png' },
];

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const projectCards = gsap.utils.toArray('.project-card');

    projectCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%', // Animate when the top of the card is 85% down the viewport
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: window.innerWidth > 768 && index % 2 !== 0 ? 0.2 : 0 // Add stagger delay on desktop for alternating items
      });
    });

  }, { scope: containerRef });

  return (
    <section className="projects-section" id="projects" ref={containerRef}>
      <h2 className="section-title">Selected Works / 갤러리</h2>
      <div className="projects-grid">
        {projectsData.map((project) => {
          const content = (
            <>
              <div className="project-image-placeholder">
                {project.previewType === 'iframe' && project.link ? (
                  <iframe 
                    src={project.previewLink || project.link} 
                    title={project.title}
                    className="project-iframe-preview"
                    scrolling="no"
                  />
                ) : project.previewType === 'image' && project.previewImage ? (
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="project-image-preview"
                  />
                ) : (
                  <span>{project.category}</span>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.year}</p>
              </div>
            </>
          );

          return (
            <div key={project.id} className="project-card">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
