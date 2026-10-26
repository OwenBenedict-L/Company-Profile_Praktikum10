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
    title: "Update: New Feature Will Be Added In App",
    date: "12 July 2026",
    category: "Update",
    excerpt:
      "We have many new updates waiting to be publish soon in August! Stay toon!!",
  },
  {
    id: 2,
    title: "Open For Hiring!!",
    date: "28 April 2026",
    category: "Open Hire",
    excerpt:
      "Our teams has finally opened a chance for talented candidate to join us!! Will only be available until the end of May.",
  },
  {
    id: 3,
    title: "Fix: Bugs in Our Website",
    date: "25 February 2026",
    category: "Update",
    excerpt:
      "There is a bug in our website where customer is unable to access the contact provided by website.",
  },
  {
    id: 4,
    title: "Our App Finally Reach Its Final Developments",
    date: "15 February 2026",
    category: "Devlog",
    excerpt:
      "Our App finally is able to go into the world and a new challenges will waiting for us!",
  },
  {
    id: 5,
    title: "Hello World!!",
    date: "2 December 2025",
    category: "Introduction",
    excerpt:
      "Hello world! This is the first log of our news!",
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
        <h1 className="mb-0 title">News</h1>

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
              placeholder="Search title, content, or category"
              aria-label="News search"
              className={styles.input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <Button className="button-outline" onClick={() => setQuery("")}>
                Delete
              </Button>
            )}
          </InputGroup>
        </Form>
      </div>

      <div className={styles.count} aria-live="polite">
        <Form.Text className="text-secondary">
          {results.length} news found
        </Form.Text>
      </div>

      {results.length === 0 ? (
        <Alert variant="warning" className={styles.notice}>
          No matching query &quot;{query}&quot;. 
          Try another keyword.
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