import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import Navbar from "../ui/common/Navbar";
import Footer from "../ui/common/Footer";

import "./globals.css";
import "./styles/admin.css";
import "./styles/all-styles.css";
import "./styles/blog.css";
import "./styles/dashboard.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Boungbai Computers Netware Ltd.",
  description: "",
  keywords: [
    "Elder Paris Oyeinnoah Digifa",
    "boungbai",
    "training",
    "computer training",
    "BCN",
    "Emmanuel Abraham",
    "Clark Benneth",
    "Justice Johnson",
    "Boungbai Computers",
    "Bayelsa Women in I.C.T",
    "Quincy James",
    "IT Firm",
    "Cyber Security",
    "App Development",
    "Graphic Design",
    "MonitorMe",
    "BayelsaWomenInIct",
    "Programming",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
