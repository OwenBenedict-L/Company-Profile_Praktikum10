"use client";

import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./news.module.css";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Peresmian kantor cabang baru di Surabaya",
    date: "12 Oktober 2026",
    category: "Perusahaan",
    excerpt:
      "Kantor cabang Surabaya resmi dibuka untuk melayani mitra di wilayah Jawa Timur dengan layanan lebih cepat.",
  },
  {
    id: 2,
    title: "Peluncuran layanan pelanggan 24 jam",
    date: "28 September 2026",
    category: "Layanan",
    excerpt:
      "Tim customer service kini siap membantu setiap hari melalui WhatsApp dan email tanpa jeda.",
  },
  {
    id: 3,
    title: "Kerja sama strategis dengan mitra regional",
    date: "9 September 2026",
    category: "Kemitraan",
    excerpt:
      "Kolaborasi baru ini memperluas jangkauan distribusi ke tiga provinsi tambahan.",
  },
  {
    id: 4,
    title: "Program pelatihan karyawan semester kedua",
    date: "15 Agustus 2026",
    category: "Perusahaan",
    excerpt:
      "Lebih dari seratus karyawan mengikuti pelatihan keterampilan teknis dan kepemimpinan.",
  },
  {
    id: 5,
    title: "Kegiatan bakti sosial bersama masyarakat sekitar",
    date: "2 Agustus 2026",
    category: "Sosial",
    excerpt:
      "Perusahaan menyalurkan bantuan perlengkapan sekolah untuk anak-anak di sekitar kantor pusat.",
  },
];

export default function NewsPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return newsData;
    return newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.excerpt.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );
  }, [query]);

  return (
    <Container className="py-4 py-md-5 page">
      <div className={styles.head}>
        <h1 className="mb-0 title">Berita</h1>

        <Form
          role="search"
          className={styles.search}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputGroup>
            <InputGroup.Text className={styles.inputIcon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>

            <Form.Control
              type="search"
              placeholder="Cari judul, isi, atau kategori"
              aria-label="Cari berita"
              className={styles.input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <Button className="button-outline" onClick={() => setQuery("")}>
                Hapus
              </Button>
            )}
          </InputGroup>
        </Form>
      </div>

      <div className={styles.count} aria-live="polite">
        <Form.Text className="text-secondary">
          {results.length} berita ditemukan
        </Form.Text>
      </div>

      {results.length === 0 ? (
        <Alert variant="warning" className={styles.notice}>
          Tidak ada berita yang cocok dengan &quot;{query}&quot;. Coba kata
          kunci lain.
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="gx-3 gx-md-4 gy-5">
          {results.map((item) => (
            <Col key={item.id}>
              <Card className={`h-100 card ${styles.folder}`}>
                <Card.Body>
                  <Badge className={`mb-2 ${styles.tag}`}>
                    {item.category}
                  </Badge>
                  <Card.Title className="h5">{item.title}</Card.Title>
                  <Card.Text>{item.excerpt}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-secondary small">
                  <i className="fa-regular fa-calendar me-2 icon-text"></i>
                  {item.date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}