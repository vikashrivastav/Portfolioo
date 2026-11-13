"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/icons";
import { showToast } from "@/lib/events";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable — still show feedback */
    }
    setCopied(true);
    showToast(`${label} copied to clipboard`);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="copy-btn" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>
      {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
