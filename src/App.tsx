import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import { SignUpForm } from "./pages/auth/SignUpForm";
import { LoginForm } from "./pages/auth/LoginForm";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import DetailView from "./pages/shop/DetailView";
import ShoppingBasket from "./pages/shop/ShoppingBasket";

function App() {
  return (
    <div className="app">
      <CurrentUserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/shop/:id" element={<DetailView />} />
          <Route path="/basket" element={<ShoppingBasket />} />
        </Routes>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
