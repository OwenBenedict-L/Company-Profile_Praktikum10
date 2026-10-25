"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { company } from "@/lib/company";
import styles from "./history.module.css";

export default function HistoryPage() {
  return (
    <Container className="py-4 py-md-5 page">
      <h1 className="mb-3 mb-md-4 title">Sejarah</h1>

      <Row className="g-3 g-md-4 align-items-center">
        <Col xs={12} md={6}>
          <h2 className={styles.heading}>Perjalanan {company.name}</h2>
          <p className="text-secondary mb-3">Sejak 2015</p>
          <p>
            {company.name} berdiri pada tahun 2015 sebagai usaha kecil dengan
            tim beranggotakan lima orang. Berkat kepercayaan pelanggan, kami
            tumbuh bertahap: membuka kantor pertama di Jakarta, memperluas
            layanan ke berbagai kota, dan kini melayani ratusan mitra bisnis di
            seluruh Indonesia.
          </p>
          <p className="mb-0">
            Sampai hari ini, kami tetap memegang prinsip yang sama sejak awal:
            bekerja jujur, menjaga kualitas, dan mengutamakan hubungan jangka
            panjang.
          </p>
        </Col>

        <Col xs={12} md={6}>
          <div className={`ratio ratio-4x3 ${styles.photo}`}>
            <Image
              src="/images/history.jpg"
              alt={`Perjalanan ${company.name} sejak 2015`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}