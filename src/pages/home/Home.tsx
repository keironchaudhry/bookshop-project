import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import book1 from "../../assets/images/philosophorsstone.png";
import book2 from "../../assets/images/chamberofsecrets.png";
import book3 from "../../assets/images/prizonerofaz.png";
import welcomeImage from "../../assets/images/welcomeimage.jpg";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <Container>
      <div className={`mt-4 ${styles.welcomeContainer}`}>
        <div className={`mb-4 ${styles.welcomeImageContainer}`}>
          <img
            src={welcomeImage}
            alt="Welcome"
            className={` ${styles.welcomeImage}`}
          />
        </div>
        <div className={styles.overlay}>
          <h1 className={styles.welcomeMessage}>Welcome to Our Bookstore</h1>
        </div>
      </div>
      <div className="mt-4">
        <h2>Featured Books</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={book1}
                alt="Book 1"
                className={`${styles.cardImg} d-flex justify-content-center align-items-center`}
              />
              <Card.Body>
                <Card.Title>Book Title 1</Card.Title>
                <Card.Text>Description for Book 1.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={book2}
                alt="Book 2"
                className={`${styles.cardImg} d-flex justify-content-center align-items-center`}
              />
              <Card.Body>
                <Card.Title>Book Title 2</Card.Title>
                <Card.Text>Description for Book 2.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src={book3}
                alt="Book 3"
                className={styles.cardImg}
              />
              <Card.Body>
                <Card.Title>Book Title 3</Card.Title>
                <Card.Text>Description for Book 3.</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
