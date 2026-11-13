"use client";

import { useState, type FormEvent } from "react";
import { showToast } from "@/lib/events";
import { SendIcon } from "@/components/icons";

const EMAIL = "vikashrivastav3@gmail.com";

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) next.email = "Enter a valid email so I can reply.";
    if (message.trim().length < 12) next.message = "Give me a bit more detail (12+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subj = subject.trim() || `Portfolio inquiry from ${name.trim()}`;
    const body = `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    showToast("Opening your mail client…");
  };

  return (
    <form className="form-card" onSubmit={submit} noValidate aria-label="Contact form">
      <h3>Send a message</h3>
      <p>I usually reply within a day. Prefer email? <span style={{ color: "var(--accent-hover)" }}>{EMAIL}</span></p>

      <div className={`field${errors.name ? " invalid" : ""}`}>
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" autoComplete="name" placeholder="Ada Lovelace" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={Boolean(errors.name)} />
        <span className="err">{errors.name}</span>
      </div>

      <div className={`field${errors.email ? " invalid" : ""}`}>
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={Boolean(errors.email)} />
        <span className="err">{errors.email}</span>
      </div>

      <div className="field">
        <label htmlFor="cf-subject">Subject <span style={{ opacity: 0.6 }}>(optional)</span></label>
        <input id="cf-subject" name="subject" placeholder="Entry-level role / Project collaboration / Just saying hi" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>

      <div className={`field${errors.message ? " invalid" : ""}`}>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={4} placeholder="Role, team, or what you are building — anything works." value={message} onChange={(e) => setMessage(e.target.value)} aria-invalid={Boolean(errors.message)} />
        <span className="err">{errors.message}</span>
      </div>

      <div className="form-foot">
        <small>No spam. No list. Just a conversation.</small>
        <button type="submit" className="btn btn-solid" style={{ height: 48 }}>
          Send message <SendIcon width={17} height={17} />
        </button>
      </div>
    </form>
  );
}
