import React from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import book1 from "../../assets/images/philosophorsstone.png";
import book2 from "../../assets/images/chamberofsecrets.png";
import book3 from "../../assets/images/prizonerofaz.png";
import book4 from "../../assets/images/worstwitch.jpg";
import book5 from "../../assets/images/nightcircus.jpg";
import welcomeImage from "../../assets/images/welcomeimage.png";
import styles from "./Home.module.css";

const books = [
  {
    id: 1,
    title: "Book Title 1",
    description: "Description for Book 1",
    image: book1,
  },
  {
    id: 2,
    title: "Book Title 2",
    description: "Description for Book 2",
    image: book2,
  },
  {
    id: 3,
    title: "Book Title 3",
    description: "Description for Book 3",
    image: book3,
  },
  {
    id: 4,
    title: "Book Title 4",
    description: "Description for Book 4",
    image: book4,
  },
  {
    id: 5,
    title: "Book Title 5",
    description: "Description for Book 5",
    image: book5,
  },
];

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
      </div>
      <h2>Featured Books</h2>
      <Carousel>
        {books.map((book) => (
          <Carousel.Item key={book.id}>
            <Card className={`${styles.card} d-flex justify-content-center`}>
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                className={`${styles.cardImg} card-img`}
              />
              <Card.Body>
                <Card.Title className={`${styles.cardTitle} card-title`}>
                  {book.title}
                </Card.Title>
                <Card.Text className={`${styles.cardText} card-text`}>
                  {book.description}
                </Card.Text>
                <Button
                  variant="primary"
                  className={`${styles.button} button-container`}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
