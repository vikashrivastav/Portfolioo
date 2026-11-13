"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { showToast } from "@/lib/events";
import {
  SearchIcon, CloseIcon, HomeIcon, UserIcon, GraduationIcon, BriefcaseIcon,
  SparkIcon, FolderIcon, MailIcon, MoonIcon, FileIcon,
  GitHubIcon, LinkedInIcon, WhatsAppIcon, SendIcon,
} from "@/components/icons";

type Action = {
  id: string;
  group: string;
  title: string;
  hint?: string;
  icon: ReactNode;
  keywords: string;
  run: () => void;
};

const EMAIL = "vikashrivastav3@gmail.com";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleTheme = () => {
    const next = (document.documentElement.dataset.theme || "light") === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("vikas.theme", next); } catch {}
    showToast(next === "dark" ? "Dark mode on" : "Light mode on");
  };

  const copyText = (text: string, label: string) => {
    const done = () => showToast(label);
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(done);
    else done();
  };

  const actions: Action[] = useMemo(
    () => [
      // Navigate
      { id: "home", group: "Navigate", title: "Home", hint: "Hero section", icon: <HomeIcon width={17} height={17} />, keywords: "home hero top intro", run: () => scrollTo("home") },
      { id: "about", group: "Navigate", title: "About", hint: "Who I am", icon: <UserIcon width={17} height={17} />, keywords: "about me bio", run: () => scrollTo("about") },
      { id: "education", group: "Navigate", title: "Education", hint: "Degrees & scores", icon: <GraduationIcon width={17} height={17} />, keywords: "education degree btech cgpa school", run: () => scrollTo("education") },
      { id: "experience", group: "Navigate", title: "Training", hint: "PG-DAC · Certifications", icon: <BriefcaseIcon width={17} height={17} />, keywords: "training pgdac cdac certifications work", run: () => scrollTo("experience") },
      { id: "skills", group: "Navigate", title: "Skills", hint: "Stack & tools", icon: <SparkIcon width={17} height={17} />, keywords: "skills stack technologies react node typescript", run: () => scrollTo("skills") },
      { id: "projects", group: "Navigate", title: "Projects", hint: "Selected work", icon: <FolderIcon width={17} height={17} />, keywords: "projects work portfolio builds", run: () => scrollTo("projects") },
      { id: "contact", group: "Navigate", title: "Contact", hint: "Get in touch", icon: <SendIcon width={17} height={17} />, keywords: "contact email hire reach message", run: () => scrollTo("contact") },
      // Actions
      { id: "resume", group: "Actions", title: "Open Résumé", hint: "Print / save as PDF", icon: <FileIcon width={17} height={17} />, keywords: "resume cv download pdf print", run: () => window.open("/resume", "_blank", "noopener") },
      { id: "theme", group: "Actions", title: "Toggle theme", hint: "Light ↔ dark", icon: <MoonIcon width={17} height={17} />, keywords: "theme dark light mode toggle", run: toggleTheme },
      { id: "copy-email", group: "Actions", title: "Copy email address", hint: EMAIL, icon: <MailIcon width={17} height={17} />, keywords: "copy email mail address", run: () => copyText(EMAIL, "Email copied to clipboard") },
      // Socials
      { id: "github", group: "Socials", title: "GitHub", hint: "github.com/vikashrivastav", icon: <GitHubIcon width={17} height={17} />, keywords: "github code repos source", run: () => window.open("https://github.com/vikashrivastav", "_blank", "noopener") },
      { id: "linkedin", group: "Socials", title: "LinkedIn", hint: "linkedin.com/in/vikashrivastav", icon: <LinkedInIcon width={17} height={17} />, keywords: "linkedin profile network", run: () => window.open("https://www.linkedin.com/in/vikashrivastav", "_blank", "noopener") },
      { id: "whatsapp", group: "Socials", title: "WhatsApp", hint: "+91 70673 34417", icon: <WhatsAppIcon width={17} height={17} />, keywords: "whatsapp chat ping message call", run: () => window.open("https://wa.me/917067334417", "_blank", "noopener") },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.title} ${a.hint ?? ""} ${a.keywords} ${a.group}`.toLowerCase().includes(q));
  }, [query, actions]);

  const groups = useMemo(() => {
    const map = new Map<string, Action[]>();
    for (const a of filtered) {
      if (!map.has(a.group)) map.set(a.group, []);
      map.get(a.group)!.push(a);
    }
    return [...map.entries()];
  }, [filtered]);

  const flat = filtered; // visual order === index order

  const close = useCallback(() => { setOpen(false); setQuery(""); setIndex(0); }, []);
  const openIt = useCallback(() => setOpen(true), []);

  /* global hotkeys + custom event from nav button */
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open && e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setOpen(true);
      }
      if (open && e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("vikas:open-palette", openIt);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("vikas:open-palette", openIt);
    };
  }, [open, close, openIt]);

  useEffect(() => { if (open) { setIndex(0); requestAnimationFrame(() => inputRef.current?.focus()); } }, [open]);
  useEffect(() => { setIndex(0); }, [query]);

  const run = (a: Action | undefined) => { if (!a) return; close(); a.run(); };

  const onListKey = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => Math.min(i + 1, flat.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); run(flat[index]); }
  };

  useEffect(() => {
    listRef.current?.querySelector(".palette-item.selected")?.scrollIntoView({ block: "nearest" });
  }, [index]);

  if (!open) return null;

  let runningIndex = -1;

  return (
    <div className="palette-overlay" onMouseDown={close} role="presentation">
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="palette-input-row">
          <SearchIcon width={18} height={18} />
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="Search sections, actions, links…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onListKey}
            aria-label="Search commands"
            aria-activedescendant={flat[index] ? `pi-${flat[index].id}` : undefined}
            autoComplete="off"
            spellCheck={false}
          />
          <button className="icon-btn" style={{ width: 30, height: 30 }} onClick={close} aria-label="Close palette">
            <CloseIcon width={15} height={15} />
          </button>
        </div>

        <div className="palette-list" ref={listRef} role="listbox" aria-label="Results">
          {groups.length === 0 && <div className="palette-empty">No matches for “{query}”. Try “projects”, “resume” or “theme”.</div>}
          {groups.map(([group, items]) => (
            <div key={group} role="group" aria-label={group}>
              <div className="palette-group">{group}</div>
              {items.map((a) => {
                runningIndex += 1;
                const myIndex = runningIndex;
                const selected = myIndex === index;
                return (
                  <button
                    key={a.id}
                    id={`pi-${a.id}`}
                    role="option"
                    aria-selected={selected}
                    className={`palette-item${selected ? " selected" : ""}`}
                    onMouseEnter={() => setIndex(myIndex)}
                    onClick={() => run(a)}
                  >
                    <span className="pi-icon">{a.icon}</span>
                    <span style={{ minWidth: 0 }}>
                      <b>{a.title}</b>
                      {a.hint && <small>{a.hint}</small>}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div className="palette-foot">
          <span><span className="kbd">↑↓</span> navigate</span>
          <span><span className="kbd">↵</span> run</span>
          <span><span className="kbd">esc</span> close</span>
          <span style={{ marginLeft: "auto" }}><span className="kbd">⌘K</span> toggle</span>
        </div>
      </div>
    </div>
  );
}
