"use client";

import { useEffect, useState, useCallback } from "react";
import { openLogin, openPalette } from "@/lib/events";
import {
  GitHubIcon, LinkedInIcon, MenuIcon, MoonIcon, SunIcon, SearchIcon, CloseIcon,
} from "@/components/icons";

const LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "education", label: "Education", href: "#education" },
  { id: "experience", label: "Training", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [signedIn, setSignedIn] = useState(false);

  /* theme bootstrap */
  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "light" | "dark") || "light");
    setSignedIn(localStorage.getItem("vikas.demoUser") === "1");
    const onAuth = () => setSignedIn(localStorage.getItem("vikas.demoUser") === "1");
    window.addEventListener("vikas:auth", onAuth);
    return () => window.removeEventListener("vikas:auth", onAuth);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("vikas.theme", next); } catch {}
      return next;
    });
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="Vikas Shrivastava — home">
            Vikas<span className="dot" aria-hidden="true" />
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a className="nav-link" href={l.href} aria-current={active === l.id}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="search-btn" onClick={openPalette} aria-label="Open command palette">
              <SearchIcon width={16} height={16} />
              <span className="search-label">Search</span>
              <kbd>⌘K</kbd>
            </button>

            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? <MoonIcon width={17} height={17} /> : <SunIcon width={17} height={17} />}
            </button>

            <button className="login-btn" onClick={openLogin}>
              {signedIn ? <span className="who">● Vikas ↗</span> : "Login"}
            </button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <CloseIcon width={19} height={19} /> : <MenuIcon width={19} height={19} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Site navigation">
        {LINKS.map((l) => (
          <a key={l.id} href={l.href} aria-current={active === l.id} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="https://github.com/vikashrivastav" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
          <GitHubIcon width={16} height={16} style={{ display: "inline", verticalAlign: "-3px", marginRight: 10 }} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vikashrivastav" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
          <LinkedInIcon width={16} height={16} style={{ display: "inline", verticalAlign: "-3px", marginRight: 10 }} />
          LinkedIn
        </a>
      </div>
    </>
  );
}
