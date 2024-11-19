import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css"; // Import global styles
import { BuildingProvider } from "./context/BuildingContext";

export const metadata = {
  title: "ClimeCast Chicago",
  description:
    "Dashboard for building energy usage using Next.js, Tailwind, and Chart.js",
  icons: {
    icon: "/SachinJakharLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1B1B1B] text-[#E0E0E0] font-sans leading-relaxed antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-[#292929] py-4 border-b border-[#3A3A3A]">
            <div className="container mx-auto px-8 flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/SachinJakharLogo.png"
                  alt="ClimeCast Logo"
                  width={40}
                  height={40}
                />
                <span className="font-bold text-2xl text-[#E0E0E0] tracking-wide">
                  ClimeCast Chicago
                </span>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto p-2">
            <div className="bg-[#2E2E2E] shadow-md border border-[#3A3A3A]">
              <BuildingProvider>{children}</BuildingProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
