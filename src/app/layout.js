import { Lexend_Mega, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const display = Lexend_Mega({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ashutosh Vats — Full-stack & AI Engineer",
  description:
    "Portfolio of Ashutosh Vats: full-stack and AI engineer. Projects in real-time chat, AI data agents, automation, and e-commerce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
