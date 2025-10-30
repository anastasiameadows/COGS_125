"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-foreground text-background">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <Image src="/kirbylogo.png" alt="Logo" width={40} height={40} />
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-8 text-base font-medium">
        <Link href="/about" className="hover:text-gray-600 transition">
          About
        </Link>
        <Link href="/resume" className="hover:text-gray-600 transition">
          Resume
        </Link>
      </div>
    </nav>
  );
}
