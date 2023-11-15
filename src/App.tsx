import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
