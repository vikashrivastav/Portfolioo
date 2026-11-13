"use client";

import { useEffect, useState } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    let hideTimer: number;
    const onToast = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail || "Done");
      setShow(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setShow(false), 3200);
    };
    window.addEventListener("vikas:toast", onToast);
    return () => {
      window.removeEventListener("vikas:toast", onToast);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`toast${show ? " show" : ""}`} role="status" aria-live="polite">
      <span className="t-dot" aria-hidden="true" />
      {message}
    </div>
  );
}
