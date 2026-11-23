import { DM_Sans, JetBrains_Mono } from "next/font/google";

export const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--geist-sans",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--geist-mono",
});
