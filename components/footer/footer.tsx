"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { company } from "@/lib/company";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} mt-auto pt-3 pt-md-4 pb-2`}>
      <Container>
        <Row className="g-3 g-md-4 justify-content-between">
          <Col md="auto">
            <h5>Our Location</h5>
            <p className="mb-2">{company.address}</p>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat di Google Maps
            </a>
          </Col>
          <Col md="auto">
            <h5>Customer Service</h5>
            <p className="mb-1">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.whatsappDisplay}
              </a>
            </p>
            <p className="mb-0">
              Email: <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </Col>
        </Row>
        <hr className="my-3 my-md-4" />
        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} {company.name}. Hak cipta
          dilindungi undang-undang.
        </p>
      </Container>
    </footer>
  );
}