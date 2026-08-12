import type { SVGProps } from "react";

export type IconName =
  | "arrow-up"
  | "briefcase"
  | "check"
  | "code"
  | "deploy"
  | "device"
  | "figma"
  | "file"
  | "gauge"
  | "github"
  | "layers"
  | "linkedin"
  | "mail"
  | "palette"
  | "rocket"
  | "search"
  | "sparkles"
  | "test"
  | "users"
  | "whatsapp";

const paths: Record<IconName, string[]> = {
  "arrow-up": ["M12 19V5", "m5 10-5-5-5 5"],
  briefcase: [
    "M9 6V4h6v2",
    "M4 6h16a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z",
    "M3 12h18",
    "M10 12v2h4v-2"
  ],
  check: ["m5 12 4 4L19 6"],
  code: ["m8 9-3 3 3 3", "m16 9 3 3-3 3", "m14 5-4 14"],
  deploy: [
    "M12 3v12",
    "m8 7 4-4 4 4",
    "M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"
  ],
  device: [
    "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
    "M8 21h8",
    "M12 17v4"
  ],
  figma: [
    "M9 3h3v6H9a3 3 0 0 1 0-6Z",
    "M12 3h3a3 3 0 0 1 0 6h-3Z",
    "M9 9h3v6H9a3 3 0 0 1 0-6Z",
    "M12 9h3a3 3 0 1 1-3 3Z",
    "M9 15h3v3a3 3 0 1 1-3-3Z"
  ],
  file: ["M6 3h8l4 4v14H6Z", "M14 3v5h5", "M9 13h6", "M9 17h4"],
  gauge: [
    "M4.9 19a9 9 0 1 1 14.2 0",
    "M12 13l4-4",
    "M12 13a1 1 0 1 0 0 .01"
  ],
  github: [
    "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.2 15 1.8a13.4 13.4 0 0 0-6 0C5.8.2 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 9 18v4",
    "M9 19c-3 .9-3-1.5-4.2-2"
  ],
  layers: ["m12 2 9 5-9 5-9-5Z", "m3 12 9 5 9-5", "m3 17 9 5 9-5"],
  linkedin: [
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z",
    "M2 9h4v12H2Z",
    "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  ],
  mail: ["M3 5h18v14H3Z", "m3 7 9 6 9-6"],
  palette: [
    "M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-5.5-4-10-9-10Z",
    "M7.5 10h.01",
    "M9.5 6.5h.01",
    "M14.5 6.5h.01",
    "M17 10h.01"
  ],
  rocket: [
    "M14 5c3-3 6-2 6-2s1 3-2 6l-5 5-4-4Z",
    "m9 10-4 1-2 3 5 1",
    "m13 14-1 5-3 2-1-5",
    "M15 8h.01",
    "m6 18-3 3"
  ],
  search: ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z", "m20 20-4-4"],
  sparkles: [
    "m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2Z",
    "m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8Z",
    "m19 14 .6 1.4 1.4.6-1.4.6L19 18l-.6-1.4L17 16l1.4-.6Z"
  ],
  test: [
    "M9 3h6",
    "M10 3v5l-5 9a3 3 0 0 0 2.6 4h8.8a3 3 0 0 0 2.6-4l-5-9V3",
    "M8 15h8"
  ],
  users: [
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    "M22 21v-2a4 4 0 0 0-3-3.9",
    "M16 3.1a4 4 0 0 1 0 7.8"
  ],
  whatsapp: [
    "M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z",
    "M8.2 7.8c.7 3.2 2.5 5 5.7 5.8",
    "m13.9 13.6 1.8-1.1",
    "M8.2 7.8 9.5 6"
  ]
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, className = "h-6 w-6", ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name].map((path, index) => (
        <path d={path} key={`${name}-${index}`} />
      ))}
    </svg>
  );
}
