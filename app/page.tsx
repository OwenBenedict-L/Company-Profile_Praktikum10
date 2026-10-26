"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import { company } from "@/lib/company";
import styles from "./page.module.css";

const stats: { label: string; value?: string; stars?: number }[] = [
  { label: "Monthly Listener", value: "3.5M+" },
  { label: "Databank Songs", value: "350.000+" },
  { label: "Rating", stars: 4 },
];

function Stars({ count }: { count: number }) {
  return (
    <span
      className={styles.stars}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        let icon = "fa-regular fa-star";
        if (count >= i + 1) icon = "fa-solid fa-star";
        else if (count >= i + 0.5) icon = "fa-solid fa-star-half-stroke";

        return <i key={i} aria-hidden="true" className={icon}></i>;
      })}
    </span>
  );
}

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <Container className={`${styles.content} text-center`}>
        <h1 className={styles.heroTitle}>
          <i className={`fa-solid fa-music ${styles.logo}`} aria-hidden="true"></i>
          <span>{company.name}</span>
        </h1>
        <p className={`${styles.motto} mx-auto`}>{company.motto}</p>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statValue}>
                {s.value}
                {s.stars !== undefined && <Stars count={s.stars} />}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/about" className="btn button">
            About Us
          </Link>
          <Link href="/contact" className="btn button-outline">
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}