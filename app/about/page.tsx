"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { company } from "@/lib/company";
import styles from "./about.module.css";

const misi = [
  "Memberikan produk dan layanan berkualitas yang dapat diandalkan.",
  "Mengembangkan tim yang kompeten, jujur, dan terus belajar.",
  "Membangun kemitraan jangka panjang yang saling menguntungkan.",
  "Menjalankan usaha yang bertanggung jawab terhadap masyarakat dan lingkungan.",
];

export default function AboutPage() {
  return (
    <Container className="py-4 py-md-5 page">
      <h1 className="mb-2 title">Tentang Kami</h1>
      <p className="text-secondary mb-3 mb-md-4">
        Mengenal arah dan nilai yang dipegang {company.name}.
      </p>

      <Row>
        <Col lg={9} xl={8}>
          <Card className="card card-still mb-3 mb-md-4">
            <Card.Header className={styles.header}>
              <i className="fa-solid fa-eye icon-text"></i>
              Visi
            </Card.Header>
            <Card.Body className="p-3 p-md-4">
              <Card.Text className="mb-0">
                Menjadi perusahaan terpercaya yang memberi dampak positif bagi
                pelanggan, mitra, dan masyarakat Indonesia.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card card-still">
            <Card.Header className={styles.header}>
              <i className="fa-solid fa-bullseye icon-text"></i>
              Misi
            </Card.Header>
            <Card.Body className="p-3 p-md-4">
              <ol className={styles.misi}>
                {misi.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}