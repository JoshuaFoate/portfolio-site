"use client";

import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/JoshuaFoate", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joshua-foate-5b792b185", icon: FaLinkedin },
  { label: "Email", href: "mailto:joshuafoate@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                onClick={() => setOpen(false)}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}