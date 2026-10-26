"use client";

import Container from "react-bootstrap/Container";
import { company } from "../../lib/company";
import styles from "./contact.module.css";

const contacts = [
  {
    name: "WhatsApp",
    detail: company.whatsappDisplay,
    href: `https://wa.me/${company.whatsapp}`,
    icon: "fa-brands fa-whatsapp",
    external: true,
  },
  {
    name: "Email",
    detail: company.email,
    href: `mailto:${company.email}`,
    icon: "fa-solid fa-envelope",
    external: false,
  },
  {
    name: "Instagram",
    detail: `@${company.instagram}`,
    href: `https://instagram.com/${company.instagram}`,
    icon: "fa-brands fa-instagram",
    external: true,
  },
  {
    name: "LinkedIn",
    detail: company.linkedin.replace("company/", ""),
    href: `https://www.linkedin.com/${company.linkedin}`,
    icon: "fa-brands fa-linkedin-in",
    external: true,
  },
];

const breakable = (text: string) => text.replace(/(\w)@/, "$1@\u200b");

export default function ContactPage() {
  return (
    <Container className="py-4 py-md-4 page">
      <h1 className="mb-2 title text-center">Contact Us</h1>
      <p className="text-secondary mb-4 text-center">
        For business partnership or collaboration <br />
        can be through our social media:
      </p>

      <div className={styles.grid}>
        {contacts.map((c) => (
          <a
            key={c.name}
            className={styles.item}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className={styles.icon}>
              <i className={c.icon}></i>
            </span>
            <span className={styles.info}>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.detail}>{breakable(c.detail)}</span>
            </span>
          </a>
        ))}
      </div>
    </Container>
  );
}