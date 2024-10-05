import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";

// Importing local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and skills",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional metadata here, like favicon, etc. */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`} // Added background color
      >
        <NavBar /> {/* Navigation Bar */}
        <main className="container mx-auto px-4 py-6"> {/* Centered main content */}
          {children} {/* Page content */}
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center"> {/* Simple Footer */}
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
