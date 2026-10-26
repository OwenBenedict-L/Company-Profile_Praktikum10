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
      <h1 className="mb-3 mb-md-4 title text-center">History</h1>

      <Row className="g-3 g-md-4 align-items-center">
        <Col xs={12} md={6}>
          <h2 className={styles.heading}>{company.name}&apos;s Journey</h2>
          <p>
            {company.name} was founded in 2025 by 5 persons as a side project 
            made for giving a new experince for people to enjoyed music without
            any hassle. Then the project started to get bigger and our teams also
            getting more larger, making {company.name} finally came into the
            industry.

          </p>
          <p className="mb-0">
            Until this day, we&apos;re still holding to our principle, to give
            people experience for them to fully enjoyed without any disturbance.
            And we still keep this going until never.
          </p>
        </Col>

        <Col xs={12} md={6}>
          <div className={`ratio ratio-4x3 ${styles.photo}`}>
            <Image
              src="/images/history.jpg"
              alt={`${company.name} journey`}
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