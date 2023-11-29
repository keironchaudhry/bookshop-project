import React, { useState } from "react";
import { Container, Card, Button, Carousel, Pagination } from "react-bootstrap";
import book1 from "../../assets/images/philosophorsstone.png";
import book2 from "../../assets/images/chamberofsecrets.png";
import book3 from "../../assets/images/prizonerofaz.png";
import book4 from "../../assets/images/worstwitch.jpg";
import book5 from "../../assets/images/nightcircus.jpg";
import book6 from "../../assets/images/ledge.jpg";
import book7 from "../../assets/images/stolenheir.jpg";
import book8 from "../../assets/images/theblackwitch.jpg";
import book9 from "../../assets/images/atomichabits.jpg";
import welcomeImage from "../../assets/images/welcomeimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
  {
    id: 6,
    title: "Book Title 6",
    description: "Description for Book 6",
    image: book6,
  },
  {
    id: 7,
    title: "Book Title 7",
    description: "Description for Book 7",
    image: book7,
  },
  {
    id: 8,
    title: "Book Title 8",
    description: "Description for Book 8",
    image: book8,
  },
  {
    id: 9,
    title: "Book Title 9",
    description: "Description for Book 9",
    image: book9,
  },
];

const chunkSize = 4;

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalChunks = Math.ceil(books.length / chunkSize);

  const handleSelect = (selectedIndex: number, e: any) => {
    setActiveIndex(selectedIndex);
  };

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
      <h2 className={`text-center ${styles.bestsellers}`}>Best Sellers</h2>
      <Carousel
        prevIcon={
          <FontAwesomeIcon icon={faChevronLeft} className={styles.prevIcon} />
        }
        nextIcon={
          <FontAwesomeIcon icon={faChevronRight} className={styles.nextIcon} />
        }
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {[...Array(totalChunks)].map((_, chunkIndex) => {
          const startIdx = chunkIndex * chunkSize;
          const endIdx = startIdx + chunkSize;
          const chunkBooks = books.slice(startIdx, endIdx);

          return (
            <Carousel.Item key={chunkIndex}>
              <div
                className={`d-flex justify-content-around ${styles.carouselItem}`}
              >
                {chunkBooks.map((book) => (
                  <Card key={book.id} className={`${styles.card}`}>
                    <Card.Img
                      variant="top"
                      src={book.image}
                      alt={book.title}
                      className={`${styles.cardImg} card-img mx-auto`}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className={`${styles.cardTitle} card-title`}>
                        {book.title}
                      </Card.Title>
                      <Card.Text className={`${styles.cardText} card-text`}>
                        {book.description}
                      </Card.Text>
                      <Button className={`${styles.button} button-container`}>
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Pagination className={`${styles.pagination}`}>
        {[...Array(totalChunks)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index === activeIndex}
            onClick={() => handleSelect(index, null)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Home;
