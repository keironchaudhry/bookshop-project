import styles from "./DetailView.module.css";

// Gets the id from the URL
import { useParams } from "react-router-dom";
// Imports "books" array from Home.tsx
import { books } from "../home/Home";

export default function DetailView() {
  const { id } = useParams();
  // Filters the "books" array to find the book with the matching id
  const book = books.find((book) => book.id === Number(id));

  return (
    <div className={`${styles.testFont}`}>
      {book ? (
        <>
          <h2>{book.title}</h2>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}
