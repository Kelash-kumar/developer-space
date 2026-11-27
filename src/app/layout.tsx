import type { Metadata } from "next";
import "./globals.css";
import "./work.css";
import "./growth.css";

export const metadata: Metadata = {
  title: "Kelash Kumar — Full Stack Developer",
  description: "Full Stack Developer in Karachi building enterprise CRM systems, SaaS platforms, real-time dashboards, and performant Next.js applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}


