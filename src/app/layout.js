import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stonenox | High-Performance Tech Collective",
  description: "Lahre Brothers - Engineering premium digital experiences in Chhattisgarh.",
  verification: {
    // Jo code tujhe mila hai usme se content="" ke andar wala part yahan copy kar
    google: "google-site-verification=l7UjP3fo8CBJAu2y00BL5yG7n1zqataVEDwFcnxb8Z0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"> {/* Forcefully dark mode on */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}