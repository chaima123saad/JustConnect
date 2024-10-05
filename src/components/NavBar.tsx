"use client"; // Add this line

import React, { useState } from "react";
import Link from "next/link";
import "../app/globals.css"; // Ensure global styles are still imported
import Image from "next/image"; // Next.js optimized image component
import logo from "../assets/logo.png"; // Import the logo
import styles from './NavBar.module.css'; // Import the module-specific CSS

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo on the left */}
        <Link href="/" className={styles.logoLink}>
          <Image src={logo} alt="JustConnect Logo" width={100} height={90} /> {/* Adjust size as needed */}
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuButton}>
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Nav Links and Buttons on the right */}
        <div className={`${styles.navLinks} ${isOpen ? styles.navOpen : ""}`}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          
          {/* Register and Login Buttons */}
          <Link href="/register" className={styles.buttonLink}>
            <button className={styles.registerButton}>Register</button>
          </Link>
          <Link href="/login" className={styles.buttonLink}>
            <button className={styles.loginButton}>Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

