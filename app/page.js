'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
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
      skills: ['VS Code', 'Figma', 'Vercel', 'Canva', 'Microsoft Office'],
    },
  ];

  const projects = [
    {
      title: 'Mr.Coffee',
      role: 'Front-end Developer',
      image: '/project-mrcoffee.svg',
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
      tags: ['Figma'],
      demoLink: 'https://figma.com',
      githubLink: 'https://github.com',
    },
    {
      title: 'CatchFit',
      role: 'UI Designer',
      image: '/project-catchfit.jpg',
      description:
        'CatchFit is an AI-powered mobile application that delivers personalized diet and exercise recommendations tailored to user goals, while boosting motivation through competitive challenges and leaderboards',
      tags: ['Figma'],
      demoLink: 'https://figma.com',
      githubLink: 'https://github.com',
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
              href="#contact"
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

            <div className={styles.contactFormOnly}>
              {/* Contact Form */}
              <div className={styles.formWrapper}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Kingsley Kie"
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. name@example.com"
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Write your message or project inquiry here..."
                      className={styles.formTextarea}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnPrimary} ${styles.formSubmitBtn}`}
                  >
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>

                  {formSubmitted && (
                    <div className={styles.formSuccessMessage}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Thank you! Your message has been received successfully.
                    </div>
                  )}
                </form>
              </div>
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
