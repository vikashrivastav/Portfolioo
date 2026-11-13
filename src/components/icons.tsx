/* Inline SVG icon set (stroke-based, Lucide-style) — no emoji, no external deps. */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const GitHubIcon = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4.3 9.75h1.4V21H4.3V9.75Zm6.1 0h1.34v1.54h.02c.19-.36.65-.74 1.34-.74 1.43 0 2.4.93 2.4 2.7V21h-1.4v-7.6c0-1.82-.65-3.05-2.28-3.05-1.25 0-1.99.84-1.99 2.6V21h-1.4V9.75Z" />
  </svg>
);

export const WhatsAppIcon = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.33-1.14a9.87 9.87 0 0 0 5.7 1.82h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.03h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.5.66.67-2.44-.2-.32a8.03 8.03 0 0 1-1.23-4.26 8.07 8.07 0 0 1 8.13-8.07c2.16 0 4.2.84 5.73 2.38a8.05 8.05 0 0 1 2.37 5.72c0 4.45-3.63 8.14-8.13 8.14Zm4.46-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.17.24-.63.79-.77.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21a7.35 7.35 0 0 1-1.36-1.7c-.14-.24 0-.38.1-.5l.36-.42c.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.31-.75-1.8-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.43.06-.65.31-.22.24-.86.85-.86 2.07s.88 2.4 1 2.56c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.44-.6 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
);
export const MoonIcon = (p: P) => (
  <svg {...base} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
);
export const SunIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" /></svg>
);
export const DownloadIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M4 20h16" /></svg>
);
export const ArrowRightIcon = (p: P) => (
  <svg {...base} {...p}><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></svg>
);
export const ArrowUpRightIcon = (p: P) => (
  <svg {...base} {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
);
export const ArrowUpIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 20V5" /><path d="m6 11 6-6 6 6" /></svg>
);
export const CopyIcon = (p: P) => (
  <svg {...base} {...p}><rect x="9" y="9" width="12" height="12" rx="2.5" /><path d="M5 15V5.5A2.5 2.5 0 0 1 7.5 3H15" /></svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} {...p}><path d="m4.5 12.5 5 5L19.5 6.5" /></svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} {...p}><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
);
export const MapPinIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const HomeIcon = (p: P) => (
  <svg {...base} {...p}><path d="m4 11 8-7 8 7v8a2 2 0 0 1-2 2h-3.5v-6h-5v6H6a2 2 0 0 1-2-2v-8Z" /></svg>
);
export const UserIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></svg>
);
export const GraduationIcon = (p: P) => (
  <svg {...base} {...p}><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" /><path d="M6.5 11.5V16c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-4.5" /><path d="M21.5 10v5" /></svg>
);
export const BriefcaseIcon = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="7.5" width="18" height="13" rx="2.5" /><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" /></svg>
);
export const SparkIcon = (p: P) => (
  <svg {...base} {...p}><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2Z" /></svg>
);
export const FolderIcon = (p: P) => (
  <svg {...base} {...p}><path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h4l2 2.5h6a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17v-10.5Z" /></svg>
);
export const SendIcon = (p: P) => (
  <svg {...base} {...p}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);
export const PaletteIcon = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="8.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" /><circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" /><circle cx="15.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" /><path d="M12 21c-1.5 0-2-1-1.3-2.2.8-1.4 3-1.6 4.6-.7 1.4.9 1.9-.3 1.2-1.9A5.5 5.5 0 0 0 12.5 13" /></svg>
);
export const FileIcon = (p: P) => (
  <svg {...base} {...p}><path d="M6 2.5h8L19.5 9v12a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 21V4A1.5 1.5 0 0 1 6 2.5Z" /><path d="M14 2.5V9h5.5" /></svg>
);
export const LogInIcon = (p: P) => (
  <svg {...base} {...p}><path d="M10 17l5-5-5-5" /><path d="M15 12H3.5" /><path d="M14 3.5h4.5A2.5 2.5 0 0 1 21 6v12a2.5 2.5 0 0 1-2.5 2.5H14" /></svg>
);
