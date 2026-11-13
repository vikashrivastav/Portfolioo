"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { showToast } from "@/lib/events";
import { CloseIcon, CheckIcon, LogInIcon } from "@/components/icons";

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => { setOpen(false); }, []);
  useEffect(() => {
    const openIt = () => { setOpen(true); setDone(false); setErrors({}); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("vikas:open-login", openIt);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("vikas:open-login", openIt);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => emailRef.current?.focus());
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setBusy(true);
    window.setTimeout(() => {
      localStorage.setItem("vikas.demoUser", "1");
      window.dispatchEvent(new CustomEvent("vikas:auth"));
      setBusy(false);
      setDone(true);
      showToast("Signed in — welcome back, Vikas");
      window.setTimeout(close, 900);
    }, 850);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onMouseDown={close} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={close} aria-label="Close sign in dialog">
          <CloseIcon width={17} height={17} />
        </button>

        <div className="modal-mark" aria-hidden="true">V</div>
        <h3 id="login-title">Welcome back</h3>
        <p>Sign in to the Vikas workspace — drafts, analytics and client previews.</p>

        <div className="demo-note">
          <CheckIcon width={14} height={14} />
          <span>Demo mode — any valid email &amp; 6+ char password works. No data leaves this page.</span>
        </div>

        <form onSubmit={submit} noValidate>
          <div className={`field${errors.email ? " invalid" : ""}`}>
            <label htmlFor="login-email">Email</label>
            <input
              ref={emailRef}
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "login-email-err" : undefined}
            />
            <span className="err" id="login-email-err">{errors.email}</span>
          </div>

          <div className={`field${errors.password ? " invalid" : ""}`}>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "login-password-err" : undefined}
            />
            <span className="err" id="login-password-err">{errors.password}</span>
          </div>

          <button type="submit" className="modal-submit" disabled={busy || done}>
            {done ? (
              <><CheckIcon width={18} height={18} /> Signed in</>
            ) : busy ? (
              <><span className="spinner" aria-hidden="true" /> Signing in…</>
            ) : (
              <><LogInIcon width={18} height={18} /> Sign in</>
            )}
          </button>
        </form>

        <p className="modal-foot">Protected by client-side demo auth · v1.0</p>
      </div>
    </div>
  );
}
