import React from "react";
import { C } from "../theme";

export type IconName =
  | "school"
  | "graduation"
  | "university"
  | "communication"
  | "refresh"
  | "shield"
  | "calculator"
  | "search"
  | "clock"
  | "clipboard"
  | "headset"
  | "home"
  | "chart"
  | "briefcase"
  | "globe"
  | "pin"
  | "phone"
  | "mail"
  | "sparkles"
  | "check"
  | "chevron-left"
  | "chevron-right"
  | "x";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<IconName, React.ReactNode> = {
  school: (
    <>
      <path d="M3 10 12 5l9 5-9 5-9-5Z" />
      <path d="M5 11.5V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.5" />
      <path d="M12 15v4" />
    </>
  ),
  graduation: (
    <>
      <path d="M2.5 9 12 4l9.5 5L12 14 2.5 9Z" />
      <path d="M6 11.5V16c0 1.3 2.7 3 6 3s6-1.7 6-3v-4.5" />
      <path d="M21.5 9v6" />
    </>
  ),
  university: (
    <>
      <path d="M3 10 12 5l9 5" />
      <path d="M5 10v8" />
      <path d="M9.5 10v8" />
      <path d="M14.5 10v8" />
      <path d="M19 10v8" />
      <path d="M3 19h18" />
    </>
  ),
  communication: (
    <>
      <path d="M4 6h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="M8 11h8" />
      <path d="M8 8.5h5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 6v5h-5" />
      <path d="M4 18v-5h5" />
      <path d="M19 11a7 7 0 0 0-12-3L4 11" />
      <path d="M5 13a7 7 0 0 0 12 3l3-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-2.9 7.9-7 10-4.1-2.1-7-5.5-7-10V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.8-4.3" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h2" />
      <path d="M14 11h2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
      <path d="M8 19h8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="5" width="12" height="16" rx="2" />
      <path d="M9 5.5h6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 5.5Z" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="2" />
      <rect x="17" y="13" width="4" height="6" rx="2" />
      <path d="M17 19a3 3 0 0 1-3 3h-2" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 5l8 6" />
      <path d="M6 10.5V19h12v-8.5" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  chart: (
    <>
      <path d="M5 19V9" />
      <path d="M12 19V5" />
      <path d="M19 19v-7" />
      <path d="M4 19h16" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M3 12h18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4a12 12 0 0 1 0 16" />
      <path d="M12 4a12 12 0 0 0 0 16" />
    </>
  ),
  pin: (
    <>
      <path d="M12 20s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M7.5 4.5h3L12 8l-2 1.5a14 14 0 0 0 4.5 4.5L16 12l3.5 1.5v3a1.5 1.5 0 0 1-1.7 1.5A16.5 16.5 0 0 1 6 6.2 1.5 1.5 0 0 1 7.5 4.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="m4 8 8 6 8-6" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m19 14 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z" />
      <path d="m5 14 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </>
  ),
  "chevron-left": <path d="m15 6-6 6 6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  x: (
    <>
      <path d="m7 7 10 10" />
      <path d="M17 7 7 17" />
    </>
  ),
};

const Icon: React.FC<Props> = ({
  name,
  size = 20,
  color = C.teal,
  strokeWidth = 1.8,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    style={{ display: "block", color, flexShrink: 0 }}
  >
    <g {...baseProps} strokeWidth={strokeWidth}>{paths[name]}</g>
  </svg>
);

export default Icon;
