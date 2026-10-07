'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const skillCategories = [
    {
      category: 'Languages',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'C', 'Python'],
    },
    {
      category: 'Frameworks / Libraries',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ['React'],
    },
    {
      category: 'Core CS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Management',
      ],
    },
    {
      category: 'Tools',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['VS Code', 'Figma', 'Vercel', 'Git', 'GitHub', 'Canva', 'Microsoft Office'],
    },
  ];

  const projects = [
    {
      title: 'Mr.Coffee',
      role: 'Front-end Developer',
      image: '/project-MrCoffee.jpg',
      description:
        'A responsive online coffee shop platform featuring an interactive homepage with top menus, ongoing promotions, a dedicated “About us” section, and a food ordering page. This system is built using standard web technologies including HTML5, CSS3, and JavaScript to optimize web performance and responsive.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: 'https://example.com/mr-coffee',
      githubLink: 'https://github.com',
    },
    {
      title: 'CyberLearn',
      role: 'System Analyst & UI Designer',
      image: '/project-cyberlearn.jpg',
      description:
        'An gamified cybersecurity learning platform concepts through interactive lessons and structured progression.',
      tags: ['Figma', 'PRD'],
      demoLink: 'https://github.com/samjoshchen/software-engineering-project-frontend',
      githubLink: 'https://github.com/samjoshchen/software-engineering-project-frontend',
    },
    {
      title: 'CatchFit',
      role: 'UI Designer',
      image: '/project-catchfit.jpg',
      description:
        'CatchFit is an AI-powered mobile application that delivers personalized diet and exercise recommendations tailored to user goals, while boosting motivation through competitive challenges and leaderboards',
      tags: ['Figma'],
      demoLink: 'https://www.figma.com/proto/af0fdW6SdlmjmLoKi0wQg9/CatchFit-Figma?node-id=1-7&p=f&t=Hkdd5t21Mxb5kWVR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7',
      githubLink: 'https://www.figma.com/proto/af0fdW6SdlmjmLoKi0wQg9/CatchFit-Figma?node-id=1-7&p=f&t=Hkdd5t21Mxb5kWVR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7',
    },
  ];

  const experiences = [
    {
      org: 'Keluarga Mahasiswa Buddhis Dhammavaddhana',
      role: 'Activist of Dhamma and Education',
      period: 'Jan 2025 - Dec 2026',
      skills: ['Time Management', 'Teamwork', 'Communication'],
    },
    {
      org: 'Keluarga Mahasiswa Buddhis Dhammavaddhana',
      role: 'Staff of Logistic and Equipment - Waisak Puja 2569 B.E./2025 x HUT KMBD XXXVI',
      period: 'Feb 2025 - Jul 2025',
      skills: ['Teamwork', 'Time Management', 'Equipment Management'],
    },
    {
      org: 'Keluarga Mahasiswa Buddhis Dhammavaddhana',
      role: 'Staff of Logistic and Equipment - DV SOS 2025',
      period: 'Aug 2025 - Nov 2025',
      skills: ['Teamwork', 'Time Management', 'Equipment Management'],
    },
    {
      org: 'Keluarga Mahasiswa Buddhis Dhammavaddhana',
      role: 'Staff of Dhamma & Education',
      period: 'Jan 2026 - Present',
      skills: ['Leadership', 'Communication', 'Educational Outreach'],
    },
    {
      org: 'Keluarga Mahasiswa Buddhis Dhammavaddhana',
      role: 'Head of Logistic Division - Waisak Puja 2570 B.E./2026 x HUT KMBD XXXVII',
      period: 'Feb 2026 - Jul 2026',
      skills: [
        'Team Leadership',
        'Time Management',
        'Teamwork',
        'Communication',
        'Problem Solving',
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* =========================================================================
          1. HEADER / NAVBAR
          ========================================================================= */}
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <a href="#hero" className={styles.brandLogo} onClick={closeMenu}>
            Kingsley Kie<span className={styles.accentDot}>.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#experience" className={styles.navLink}>Experience</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.navActions}>
            <a
              href="/KINGSLEYKIE.pdf"
              download="KINGSLEYKIE.pdf"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.navBtn}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNavLinks}>
            <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</a>
            <a href="#skills" className={styles.mobileNavLink} onClick={closeMenu}>Skills</a>
            <a href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>Projects</a>
            <a href="#experience" className={styles.mobileNavLink} onClick={closeMenu}>Experience</a>
            <a href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</a>
            <a
              href="#contact"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.mobileCtaBtn}`}
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* =========================================================================
            2. HERO SECTION
            ========================================================================= */}
        <section id="hero" className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot}></span>
                  Available for Front-end Developer Internships
                </div>

                <h1 className={styles.heroHeading}>
                  Hello, I&apos;m <span className={styles.accentText}>Kingsley Kie</span>
                </h1>

                <div className={styles.roleBadgeContainer}>
                  <span className={styles.roleBadge}>Front-end Developer</span>
                </div>

                <p className={styles.heroPitch}>
                  Passionate IT student specializing in Front-end Web Development with
                  expertise in HTML, CSS, JavaScript, and modern frameworks. Eager to leverage
                  my coding skills, adaptability, and eye for detail to contribute to
                  real-world projects as a Front-end Developer.
                </p>

                <div className={styles.heroCtas}>
                  <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                    View Work
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </a>
                  <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                    Get in Touch
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </a>
                </div>
              </div>

              <div className={styles.heroAvatarWrapper}>
                <div className={styles.avatarGlowCircle}></div>
                <div className={styles.avatarCard}>
                  <Image
                    src="/profile.jpg"
                    alt="Kingsley Kie Profile"
                    width={340}
                    height={380}
                    priority
                    className={styles.avatarImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ABOUT ME
            ========================================================================= */}
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Get To Know Me</span>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.sectionUnderline}></div>
            </div>

            <div className={styles.aboutCard}>
              <p className={styles.aboutParagraph}>
                I am a 3rd-year student at Bina Nusantara University (BINUS), actively seeking
                an internship opportunity in Front-end Developer or IT related field. Equipped
                with a strong academic background and a drive for continuous learning, I have
                cultivated a solid understanding of industry standards and modern problem-solving
                methodologies through my studies.
              </p>
              <p className={styles.aboutParagraph}>
                Throughout my academic journey, I have actively developed and collaborated on
                various hands-on projects, such as Mr.Coffee, CyberLearn, and CatchFit. Working
                on these initiatives from concept to execution has refined my ability to tackle
                complex user needs, manage project workflows, and collaborate effectively within
                a team. I am eager to bring this practical experience and a proactive mindset to
                a professional environment where I can contribute meaningfully to your team.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TECH & TOOLS
            ========================================================================= */}
        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Technical Capabilities</span>
              <h2 className={styles.sectionTitle}>Tech &amp; Tools</h2>
              <div className={styles.sectionUnderline}></div>
            </div>

            <div className={styles.skillsGrid}>
              {skillCategories.map((cat, idx) => (
                <div key={idx} className={styles.skillCard}>
                  <div className={styles.skillCardHeader}>
                    <div className={styles.skillCategoryIcon}>{cat.icon}</div>
                    <h3 className={styles.skillCategoryName}>{cat.category}</h3>
                  </div>

                  <div className={styles.badgeContainer}>
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.skillBadge}>
                        <span className={styles.badgeDot}></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. MY WORKS / PROJECTS
            ========================================================================= */}
        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Featured Portfolio</span>
              <h2 className={styles.sectionTitle}>My Works / Projects</h2>
              <div className={styles.sectionUnderline}></div>
            </div>

            <div className={styles.projectsGrid}>
              {projects.map((project, idx) => (
                <article key={idx} className={styles.projectCard}>
                  <div className={styles.projectImageWrapper}>
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      width={600}
                      height={380}
                      className={styles.projectImage}
                    />
                    <div className={styles.roleOverlay}>
                      <span className={styles.roleTag}>{project.role}</span>
                    </div>
                  </div>

                  <div className={styles.projectBody}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    <div className={styles.projectTags}>
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={styles.techTag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.projectActions}>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                      >
                        Live Demo
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionBtn} ${styles.actionBtnSecondary}`}
                      >
                        GitHub
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. LEADERSHIP & EXPERIENCE
            ========================================================================= */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Organization &amp; Activities</span>
              <h2 className={styles.sectionTitle}>Leadership &amp; Experience</h2>
              <div className={styles.sectionUnderline}></div>
            </div>

            <div className={styles.timeline}>
              {experiences.map((exp, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.timelineDot}></span>
                    {idx !== experiences.length - 1 && (
                      <span className={styles.timelineLine}></span>
                    )}
                  </div>

                  <div className={styles.timelineCard}>
                    <div className={styles.timelineMeta}>
                      <span className={styles.timelineOrg}>{exp.org}</span>
                      <span className={styles.timelinePeriod}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {exp.period}
                      </span>
                    </div>

                    <h3 className={styles.timelineRole}>{exp.role}</h3>

                    {exp.skills && exp.skills.length > 0 && (
                      <div className={styles.timelineSkillsWrap}>
                        <span className={styles.timelineSkillLabel}>Key Skills:</span>
                        <div className={styles.timelinePills}>
                          {exp.skills.map((skill, sIdx) => (
                            <span key={sIdx} className={styles.timelinePill}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. CONTACT & FOOTER
            ========================================================================= */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Let&apos;s Connect</span>
              <h2 className={styles.sectionTitle}>Contact Me</h2>
              <div className={styles.sectionUnderline}></div>
            </div>

            <div className={styles.contactLinksGrid}>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6288279169285"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLinkCard}
              >
                <div className={styles.contactLinkIcon} style={{ background: '#25D366' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.714a.5.5 0 0 0 .63.63l5.858-1.476A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.502-5.18-1.378l-.371-.215-3.843.969.984-3.842-.234-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div className={styles.contactLinkInfo}>
                  <span className={styles.contactLinkLabel}>WhatsApp</span>
                  <span className={styles.contactLinkValue}>+62 882-7916-9285</span>
                </div>
                <svg className={styles.contactLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/kingsley-kie"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLinkCard}
              >
                <div className={styles.contactLinkIcon} style={{ background: '#0A66C2' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66Z"/>
                  </svg>
                </div>
                <div className={styles.contactLinkInfo}>
                  <span className={styles.contactLinkLabel}>LinkedIn</span>
                  <span className={styles.contactLinkValue}>linkedin.com/in/kingsley-kie</span>
                </div>
                <svg className={styles.contactLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Kingsleykie"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLinkCard}
              >
                <div className={styles.contactLinkIcon} style={{ background: '#24292f' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                  </svg>
                </div>
                <div className={styles.contactLinkInfo}>
                  <span className={styles.contactLinkLabel}>GitHub</span>
                  <span className={styles.contactLinkValue}>github.com/Kingsleykie</span>
                </div>
                <svg className={styles.contactLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:kingsleykie12@gmail.com"
                className={styles.contactLinkCard}
              >
                <div className={styles.contactLinkIcon} style={{ background: '#EA4335' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactLinkInfo}>
                  <span className={styles.contactLinkLabel}>Email</span>
                  <span className={styles.contactLinkValue}>kingsleykie12@gmail.com</span>
                  <span className={styles.contactLinkValueAlt}>kingsley.kie@binus.ac.id</span>
                </div>
                <svg className={styles.contactLinkArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>
                Kingsley Kie<span className={styles.accentDot}>.</span>
              </span>
              <p className={styles.footerSubtitle}>
                Front-end Developer
              </p>
            </div>

            <div className={styles.footerLinks}>
              <a href="mailto:kingsleykie12@gmail.com" className={styles.footerLink}>kingsleykie12@gmail.com</a>
              <a href="https://wa.me/6288279169285" className={styles.footerLink}>+62 882-7916-9285</a>
              <a href="https://linkedin.com/in/kingsley-kie" className={styles.footerLink}>Linkedin</a>
              <a href="https://github.com/Kingsleykie" className={styles.footerLink}>Github</a>
              <a href="#projects" className={styles.footerLink}>Projects</a>  
            </div>

            <div className={styles.footerCopyright}>
              <p>&copy; 2026 Kingsley Kie. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
