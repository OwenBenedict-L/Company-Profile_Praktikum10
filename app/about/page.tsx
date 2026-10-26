"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { company } from "../../lib/company";
import styles from "./about.module.css";

const misi = [
  "Give our best quality of services and experience.",
  "Using our best teams and workplaces.",
  "Giving our long term service to both the customers and artists & company involved.",
];

export default function AboutPage() {
  return (
    <Container className="py-4 py-md-5 page">
      <h1 className="mb-2 title text-center">About Us</h1>
      <p className="text-secondary mb-3 mb-md-4 text-center">
        In {company.name}, we values customer&apos;s comfort and trust more than anything. 
        <br />Giving customer a way to listen any music without any disturbance and worry of ads,
        <br />was our first priority. We&apos;re also provide many musics that was produced
        <br />by many of your favorite artists, up to 5000 creators.
        <br />We hope that our services here will be a new experience for you, the customer just like
        <br />going into a new world that you never see.

        <br /><br />
        --  <span className="fw-bold">{company.name}</span> --
      </p>

      <Row className="justify-content-center">
        <Col lg={9} xl={8}>
          <Card className="card card-still mb-3 mb-md-4">
            <Card.Header className={styles.header}>
              Vision
            </Card.Header>
            <Card.Body className="p-3 p-md-4">
              <Card.Text className="mb-0">
                To give customer a new experience without getting any disturbance.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card card-still">
            <Card.Header className={styles.header}>
              Mission
            </Card.Header>
            <Card.Body className="p-3 p-md-4">
              <ol className={styles.mission}>
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