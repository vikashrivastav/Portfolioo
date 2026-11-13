import type { Metadata } from "next";
import "./resume.css";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Résumé — Vikas Shrivastava",
  description:
    "Software Engineer résumé — Vikas Shrivastava. B.Tech CSE (7.11/10), CDAC PG-DAC, Java · Spring Boot · React.js · MySQL.",
};

const PROJECTS = [
  {
    name: "SkillBridge — Remote Job Portal",
    when: "May 2026 – Present",
    points: [
      "Live at cdac-skillbridge.vercel.app · github.com/vikashrivastav/skillbridge",
      "Full-stack remote job portal connecting candidates with job opportunities; responsive React frontend with verified skill-based matching",
      "RESTful backend APIs with Spring Boot and MySQL for data persistence",
    ],
  },
  {
    name: "Employee Management System — Full Stack Web Application",
    when: "Mar 2026 – May 2026",
    points: [
      "Built a full-stack employee management application with React.js and Spring Boot",
      "Built RESTful APIs to perform CRUD operations for employee records",
      "Integrated MySQL with Spring Data JPA for persistent employee data management",
      "github.com/vikashrivastav/Employee-Management-System",
    ],
  },
  {
    name: "E-Commerce Web Application Platform",
    when: "Academic project",
    points: [
      "Browse products, cart, orders and purchase tracking through a secure, responsive interface",
      "User authentication and role-based access control (Admin/User); product and order management APIs",
      "Database integration with relational databases and a scalable full-stack architecture",
      "github.com/vikashrivastav/E-Commerce",
    ],
  },
];

const SKILLS: Array<[string, string]> = [
  ["Languages", "Java, C++, SQL"],
  ["Frameworks", "Spring Boot, Spring MVC, Hibernate, Spring Data JPA, React.js"],
  ["Web", "HTML, CSS, JavaScript, REST APIs, Bootstrap"],
  ["Databases & Tools", "MySQL, Git/GitHub, VS Code, Eclipse, Linux"],
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <a href="/" className="resume-back">← Back to portfolio</a>
        <PrintButton />
      </div>

      <article className="resume-sheet" aria-label="Résumé of Vikas Shrivastava">
        <header className="resume-head">
          <div>
            <h1>Vikas Shrivastava</h1>
            <p className="resume-role">Software Engineer — Java · Spring Boot · React</p>
          </div>
          <ul className="resume-contact">
            <li>vikashrivastav3@gmail.com</li>
            <li>+91 70673 34417</li>
            <li>Bengaluru, India · IST</li>
            <li>github.com/vikashrivastav</li>
            <li>linkedin.com/in/vikashrivastav</li>
          </ul>
        </header>

        <section>
          <h2>Summary</h2>
          <p>
            Computer Science graduate and C-DAC PG-DAC trainee with hands-on experience in Java,
            Spring Boot, REST APIs, SQL and full-stack web development. Strong foundation in OOP,
            DSA, DBMS, Git and software development practices, with experience building backend and
            CRUD-based applications. Seeking an entry-level Software Engineer role.
          </p>
        </section>

        <section>
          <h2>Professional Training</h2>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <b>Post Graduate Diploma in Advanced Computing (PG-DAC) — Centre for Development of Advanced Computing (C-DAC)</b>
              <span>2026 · Bengaluru</span>
            </div>
            <ul>
              <li>Completed intensive training in Java, Object-Oriented Programming, Data Structures &amp; Algorithms and Database Technologies</li>
              <li>Built web applications with Java, Spring Boot, REST APIs, React.js and MySQL</li>
              <li>Practiced software development using Git, Linux, debugging, testing and databases</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <dl className="resume-skills">
            {SKILLS.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Projects</h2>
          {PROJECTS.map((p) => (
            <div className="resume-entry" key={p.name}>
              <div className="resume-entry-head">
                <b>{p.name}</b>
                <span>{p.when}</span>
              </div>
              <ul>
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <b>PG-DAC — Centre for Development of Advanced Computing (C-DAC), Bengaluru</b>
              <span>2026</span>
            </div>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <b>B.Tech — Computer Science &amp; Engineering, Shri Shankaracharya Technical Campus, Bhilai (CSVTU)</b>
              <span>2021 – 2025</span>
            </div>
            <p>CGPA 7.11 / 10 (65.2%)</p>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-head">
              <b>XII (PCM) — Sun Shine H.S. School, Durg · CGBSE</b>
              <span>2021</span>
            </div>
            <p>92.00% — Division I</p>
          </div>
        </section>

        <section>
          <h2>Certifications</h2>
          <p>Java Programming for Beginners — IBM, Coursera (2026) · Introduction to Software Engineering — IBM, Coursera (2026) · Object-Oriented Programming with Java — Coursera (2026)</p>
        </section>
      </article>
    </main>
  );
}
