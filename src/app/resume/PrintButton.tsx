"use client";

import { DownloadIcon } from "@/components/icons";

export default function PrintButton() {
  return (
    <button className="resume-print-btn" onClick={() => window.print()}>
      <DownloadIcon width={16} height={16} /> Download PDF
    </button>
  );
}
