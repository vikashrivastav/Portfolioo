import Image from "next/image";
import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";
import LoginModal from "@/components/LoginModal";
import Toast from "@/components/Toast";
import BackToTop from "@/components/BackToTop";
import Counter from "@/components/Counter";
import Meters from "@/components/Meters";
import ContactForm from "@/components/ContactForm";
import FooterClock from "@/components/FooterClock";
import {
  GitHubIcon, LinkedInIcon, WhatsAppIcon, DownloadIcon, ArrowRightIcon, ArrowUpIcon,
  ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon,
} from "@/components/icons";
import CopyButton from "@/components/CopyButton";

const MARQUEE = ["JAVA", "SPRING BOOT", "SPRING MVC", "HIBERNATE", "REACT.JS", "SQL", "MYSQL", "REST APIS", "DSA", "OOP", "GIT", "LINUX"];

const PROJECTS = [
  {
    index: "01",
    title: "SkillBridge — Remote Job Portal",
    tagline: "Full-stack portal where candidates prove skills and employers match on verified tags. Live since May 2026 — Spring Boot REST APIs, Spring Data JPA, responsive React frontend; deployed and maintained end to end on Vercel.",
    stack: ["React.js", "Spring Boot", "REST APIs", "MySQL", "Spring Data JPA"],
    grad: "linear-gradient(135deg,#1d3a6e 0%,#3b82f6 55%,#93c5fd 100%)",
    live: "https://cdac-skillbridge.vercel.app",
    source: "https://github.com/vikashrivastav/skillbridge",
  },
  {
    index: "02",
    title: "Employee Management System",
    tagline: "Full-stack employee management with React.js and Spring Boot. RESTful CRUD APIs on Spring Data JPA, MySQL persistence. Mar – May 2026.",
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Data JPA"],
    grad: "linear-gradient(135deg,#123c33 0%,#10b981 55%,#6ee7b7 100%)",
    live: "",
    source: "https://github.com/vikashrivastav/Employee-Management-System",
  },
  {
    index: "03",
    title: "E-Commerce Web Application",
    tagline: "Academic platform with browse → cart → checkout → order tracking, authentication and role-based access (Admin/User), plus product and order management APIs.",
    stack: ["JavaScript", "Bootstrap", "REST APIs", "MySQL", "Role-based Access"],
    grad: "linear-gradient(135deg,#3b1d5e 0%,#8b5cf6 55%,#c4b5fd 100%)",
    live: "",
    source: "https://github.com/vikashrivastav/E-Commerce",
  },
  {
    index: "04",
    title: "Portfolio",
    tagline: "The site you're on — Swiss-minimalist design, ⌘K command palette, dark mode, print-ready résumé.",
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    grad: "linear-gradient(135deg,#23272f 0%,#4b5563 55%,#9ca3af 100%)",
    live: "#home",
    source: "https://github.com/vikashrivastav/Portfolioo",
  },
];

const TRAINING = [
  {
    role: "PG-DAC — Post Graduate Diploma in Advanced Computing",
    org: "Centre for Development of Advanced Computing (C-DAC) · 2026 · Bengaluru",
    when: "2026",
    points: [
      "Completed intensive training in Java, OOP, Data Structures & Algorithms and Database Technologies",
      "Built web applications with Java, Spring Boot, REST APIs, React.js and MySQL",
      "Practiced software development using Git, Linux, debugging and testing",
    ],
  },
  {
    role: "SkillBridge — Independent Product Build",
    org: "cdac-skillbridge.vercel.app · github.com/vikashrivastav/skillbridge",
    when: "May 2026 — Present",
    points: [
      "Designed and shipped a full-stack remote job portal connecting candidates with verified-skill opportunities",
      "Responsive React.js frontend, Spring Boot REST APIs and MySQL persistence — deployed and maintained end to end",
    ],
  },
  {
    role: "Full Stack Development Intern",
    org: "Thiranex · Internship (Remote / Project-Based)",
    when: "May 2026 — June 2026",
    points: [
      "Worked on practical full-stack development projects under industry mentorship",
      "Progress reviewed periodically against project milestones",
    ],
  },
  {
    role: "Professional Certifications",
    org: "IBM · Coursera",
    when: "2026",
    points: [
      "Java Programming for Beginners — IBM, Coursera",
      "Introduction to Software Engineering — IBM, Coursera",
    ],
  },
];

const EDUCATION = [
  { step: "01 / DIPLOMA", title: "PG-DAC — Post Graduate Diploma in Advanced Computing", meta: "Centre for Development of Advanced Computing (C-DAC), Bengaluru · Feb 2026 batch", score: "6.9", unit: "CGPA / 10" },
  { step: "02 / DEGREE", title: "B.Tech — Computer Science & Engineering", meta: "Shri Shankaracharya Technical Campus, Bhilai (CSVTU) · 2021 – 2025", score: "7.11", unit: "CGPA / 10" },
  { step: "03 / SCHOOL", title: "Higher Secondary (XII) — PCM", meta: "Sun Shine H.S. School, Durg · CGBSE · 2021", score: "92%", unit: "Division I" },
  { step: "04 / SCHOOL", title: "Secondary (X) — General", meta: "Vishwadeep H.R. Sec. School, Durg · CBSE · 2018", score: "CBSE", unit: "" },
];

const SKILL_GROUPS = [
  { label: "Languages", chips: ["Java", "C++", "SQL", "JavaScript (ES6+)"] },
  { label: "Frameworks", chips: ["Spring Boot", "Spring MVC", "Hibernate", "Spring Data JPA", "React.js"] },
  { label: "Web & APIs", chips: ["HTML5", "CSS3", "Bootstrap", "REST APIs"] },
  { label: "Databases & Tools", chips: ["MySQL", "Git / GitHub", "VS Code", "Eclipse", "Linux"] },
  { label: "Deployment & Hosting", chips: ["Vercel", "Render"] },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Nav />
      <CommandPalette />
      <LoginModal />
      <Toast />
      <BackToTop />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="home" aria-label="Introduction">
          <div className="hero-scrim" />
          <div className="hero-glow" />
          <div className="portrait" aria-hidden="true">
            <Image src="/portrait.webp" alt="" width={1030} height={1492} priority sizes="(max-width: 760px) 60vw, 42vw" />
          </div>

          <div className="hero-inner">
            <span className="pill"><span className="live-dot" aria-hidden="true" /> OPEN TO ENTRY-LEVEL ROLES</span>

            <h1 className="hero-name">
              <span className="line">Vikas</span>
              <span className="line thin">Shrivastava</span>
            </h1>

            <p className="hero-role"><span className="rule" aria-hidden="true" /> Software Engineer — Java · Spring Boot · React</p>

            <p className="hero-bio">
              I&apos;m a Software Engineer — B.Tech in Computer Science, PG-DAC from
              C-DAC, and a Thiranex full-stack intern. I build and deploy full-stack web
              applications end to end — Java and Spring Boot REST APIs, MySQL persistence,
              responsive React interfaces.
            </p>

            <div className="hero-cta">
              <a className="btn btn-ghost" href="/Vikas-Shrivastava-Resume.pdf" target="_blank" rel="noopener" aria-label="Open résumé PDF">
                <DownloadIcon width={18} height={18} /> Résumé
              </a>
              <a className="btn btn-solid" href="#about">
                About Me <ArrowRightIcon width={18} height={18} />
              </a>
            </div>

            <div className="hero-socials" aria-label="Profiles and contact">
              <a className="social-card" href="https://github.com/vikashrivastav" target="_blank" rel="noreferrer" aria-label="GitHub — @vikashrivastav">
                <span className="sc-icon"><GitHubIcon width={20} height={20} /></span>
                <h3>GitHub</h3>
                <p>Code &amp; projects</p>
                <span className="sc-link">View <ArrowRightIcon width={14} height={14} /></span>
              </a>

              <a className="social-card" href="https://www.linkedin.com/in/vikashrivastav" target="_blank" rel="noreferrer" aria-label="LinkedIn — Vikas Shrivastava">
                <span className="sc-icon"><LinkedInIcon width={20} height={20} /></span>
                <h3>LinkedIn</h3>
                <p>Let&apos;s connect</p>
                <span className="sc-link">View <ArrowRightIcon width={14} height={14} /></span>
              </a>

              <a className="social-card" href="https://wa.me/917067334417" target="_blank" rel="noreferrer" aria-label="WhatsApp — +91 70673 34417">
                <span className="sc-icon"><WhatsAppIcon width={20} height={20} /></span>
                <h3>WhatsApp</h3>
                <p>+91 70673 34417</p>
                <span className="sc-link">Message <ArrowRightIcon width={14} height={14} /></span>
              </a>
            </div>
          </div>

          <div className="scroll-hint" aria-hidden="true">
            <span className="wheel" />
            SCROLL
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i}>{item} <i>◆</i></span>
            ))}
          </div>
        </div>

        {/* ============ ABOUT ============ */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">01 — About</p>
                <h2 className="h2" id="about-title">Engineers think in systems.<br />I ship them, too.</h2>
              </div>
              <p className="section-note">I care about the unglamorous details: schema design, error states, focus rings, and the 200 milliseconds between click and paint.</p>
            </div>

            <div className="stats-row" aria-label="Key numbers">
              <div className="stat"><b><Counter target={4} suffix="" /></b><span>Projects built</span></div>
              <div className="stat"><b>7.11</b><span>B.Tech CGPA / 10</span></div>
              <div className="stat"><b><Counter target={92} suffix="%" /></b><span>XII board score</span></div>
              <div className="stat"><b><Counter target={2} suffix="" /></b><span>Certifications</span></div>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>I&apos;m <strong>Vikas Shrivastava</strong> — a B.Tech Computer Science graduate from Shri Shankaracharya Technical Campus, Bhilai, <strong>PG-DAC from C-DAC Bengaluru</strong>, and a <strong>Full Stack Development intern at Thiranex</strong> (remote, project-based). I&apos;m drawn to the full arc of a product — schema design, API contracts, business logic and the interface on top.</p>
                <p>My stack is <strong>Java and Spring Boot</strong> on the backend, <strong>React.js</strong> on the frontend and <strong>MySQL</strong> underneath. I shipped <strong>SkillBridge</strong>, a live remote job portal — Spring Boot REST APIs, Spring Data JPA persistence, a responsive React frontend, deployed and maintained end to end on Vercel.</p>
                <p>When I&apos;m not coding, I&apos;m usually solving chess positions or going deep on why something breaks — understanding beats guessing. I&apos;m looking for an <strong>entry-level Software Engineer</strong> role where I can contribute from day one and keep leveling up.</p>
              </div>

              <dl className="fact-list" aria-label="Quick facts">
                <div className="fact"><dt>Location</dt><dd>Bengaluru, India · IST</dd></div>
                <div className="fact"><dt>Role</dt><dd>Software Engineer (entry-level)</dd></div>
                <div className="fact"><dt>Focus</dt><dd>Java · Spring Boot · React · MySQL</dd></div>
                <div className="fact"><dt>Education</dt><dd>PG-DAC (C-DAC) · 2026</dd></div>
                <div className="fact"><dt>Availability</dt><dd>Open to full-time roles</dd></div>
                <div className="fact"><dt>Interests</dt><dd>Chess · DSA problem solving</dd></div>
                <div className="fact"><dt>Languages</dt><dd>Hindi (native) · English</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* ============ EDUCATION ============ */}
        <section className="section" id="education" aria-labelledby="edu-title" style={{ background: "rgba(8,10,16,0.22)" }}>
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">02 — Education</p>
                <h2 className="h2" id="edu-title">Foundations first.</h2>
              </div>
              <p className="section-note">The short version of the journey so far — from Durg to Bengaluru, in four stops.</p>
            </div>

            <div className="edu-grid">
              {EDUCATION.map((e) => (
                <article className="edu-card" key={e.step}>
                  <span className="edu-step">{e.step}</span>
                  <h3>{e.title}</h3>
                  <p className="edu-meta">{e.meta}</p>
                  <div className="edu-score">{e.score}{e.unit && <small>{e.unit}</small>}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TRAINING ============ */}
        <section className="section" id="experience" aria-labelledby="exp-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">03 — Training</p>
                <h2 className="h2" id="exp-title">The reps behind the résumé.</h2>
              </div>
              <p className="section-note">C-DAC&apos;s intensive programme plus IBM and Coursera certifications.</p>
            </div>

            <div className="timeline">
              {TRAINING.map((x) => (
                <article className="tl-item" key={x.role}>
                  <div className="tl-card">
                    <div className="tl-top">
                      <h3 className="tl-role">{x.role}</h3>
                      <span className="tl-when">{x.when}</span>
                    </div>
                    <p className="tl-org">{x.org}</p>
                    <ul className="tl-list">
                      {x.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section className="section" id="skills" aria-labelledby="skills-title" style={{ background: "rgba(8,10,16,0.22)" }}>
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">04 — Skills</p>
                <h2 className="h2" id="skills-title">The toolbox.</h2>
              </div>
              <p className="section-note">Exactly what the résumé says — no inflated bars, just the tools I actually use.</p>
            </div>

            <div className="skills-grid">
              {SKILL_GROUPS.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="chips">
                    {group.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <Meters />

            <div className="certs" aria-label="Certifications">
              <span className="certs-label">Certified</span>
              <ul>
                <li>Java Programming for Beginners <small>IBM · Coursera · 2026</small></li>
                <li>Introduction to Software Engineering <small>IBM · Coursera · 2026</small></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="kicker">05 — Projects</p>
                <h2 className="h2" id="projects-title">Selected work.</h2>
              </div>
              <p className="section-note">A slice of what I&apos;ve built — dashboards, APIs, realtime tools and this site itself.</p>
            </div>

            <div className="projects-grid">
              {PROJECTS.map((p) => (
                <article className="project-card" key={p.index}>
                  <div className="project-visual" aria-hidden="true">
                    <div className="pv-bg" style={{ background: p.grad }} />
                    <div className="pv-window">
                      <div className="pv-dots"><i /><i /><i /></div>
                      <div className="pv-line accent" />
                      <div className="pv-line w85" />
                      <div className="pv-line w70" />
                      <div className="pv-line w55" />
                      <div className="pv-line w40" />
                    </div>
                  </div>
                  <div className="project-body">
                    <span className="project-index">/ {p.index}</span>
                    <h3>{p.title}</h3>
                    <p>{p.tagline}</p>
                    <div className="project-stack">
                      {p.stack.map((s) => <span key={s}>{s}</span>)}
                    </div>
                    <div className="project-links">
                      {p.live && (p.live.startsWith("#")
                        ? <a href={p.live}>View home <ArrowUpIcon width={15} height={15} /></a>
                        : <a href={p.live} target="_blank" rel="noreferrer">View live <ArrowUpRightIcon width={15} height={15} /></a>)}
                      <a href={p.source} target="_blank" rel="noreferrer">Source <ArrowUpRightIcon width={15} height={15} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="section" id="contact" aria-labelledby="contact-title" style={{ background: "rgba(8,10,16,0.22)" }}>
          <div className="container">
            <div className="contact-grid">
              <div>
                <p className="kicker">06 — Contact</p>
                <h2 className="h2" id="contact-title">Let&apos;s build<br />something real.</h2>
                <p className="section-note" style={{ marginTop: "1rem" }}>
                  I&apos;m looking for an entry-level Software Engineer role — full-time.
                  If you&apos;re hiring, or want to talk Java, Spring Boot or React, my inbox is open.
                </p>

                <div className="contact-rows">
                  <div className="contact-row">
                    <div className="cr-left">
                      <span className="cr-icon"><MailIcon width={18} height={18} /></span>
                      <span><b>vikashrivastav3@gmail.com</b><small>Usually replies in &lt; 24h</small></span>
                    </div>
                    <CopyButton text="vikashrivastav3@gmail.com" label="Email" />
                  </div>

                  <div className="contact-row">
                    <div className="cr-left">
                      <span className="cr-icon"><PhoneIcon width={18} height={18} /></span>
                      <span><b>+91 70673 34417</b><small>Call or WhatsApp · IST</small></span>
                    </div>
                    <CopyButton text="+917067334417" label="Number" />
                  </div>

                  <a className="contact-row" href="https://maps.google.com/?q=Bengaluru" target="_blank" rel="noreferrer" aria-label="Open Bengaluru on Google Maps">
                    <div className="cr-left">
                      <span className="cr-icon"><MapPinIcon width={18} height={18} /></span>
                      <span><b>Bengaluru, India</b><small>UTC +5:30 · Electronics City Ph-1, Bengaluru</small></span>
                    </div>
                    <ArrowUpRightIcon width={18} height={18} style={{ color: "var(--ink-faint)" }} />
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <small>© {new Date().getFullYear()} Vikas Shrivastava · Designed &amp; built with Next.js</small>
            <nav className="footer-links" aria-label="Footer">
              <a href="https://github.com/vikashrivastav" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/vikashrivastav" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://wa.me/917067334417" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="mailto:vikashrivastav3@gmail.com">Email</a>
              <a href="/resume" target="_blank" rel="noopener">Résumé</a>
            </nav>
            <FooterClock />
          </div>
          <div className="footer-watermark" aria-hidden="true">VIKAS</div>
        </div>
      </footer>
    </>
  );
}
