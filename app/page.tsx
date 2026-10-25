"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import { company } from "@/lib/company";
import styles from "./page.module.css";

const stats = [
  { label: "Pengguna bulanan", value: "3.5M+" },
  { label: "Data yang tersimpan", value: "350.000+" },
  { label: "Rating", value: "5/5 bintang" },
];

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <Container className={`${styles.content} text-center`}>
        <h1 className={styles.heroTitle}>{company.name}</h1>
        <p className={`${styles.motto} mx-auto`}>{company.motto}</p>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statValue}>{s.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/about" className="btn button">
            Kenali kami
          </Link>
          <Link href="/contact" className="btn button-outline">
            Hubungi kami
          </Link>
        </div>
      </Container>
    </section>
  );
}