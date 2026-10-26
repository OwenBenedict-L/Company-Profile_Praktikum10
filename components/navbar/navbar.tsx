"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { company } from "../../lib/company";
import styles from "./navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/history", label: "History" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={styles.navBar}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          href="/"
          className={styles.navBrand}
          onClick={() => setExpanded(false)}
        >
          <i className="fa-solid fa-music"></i>
          {company.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className={styles.toggle} />
        <Navbar.Collapse id="main-nav">
          <Nav className={`ms-auto ${styles.menu}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${styles.navLink} ${
                  pathname === link.href ? styles.linkActive : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}