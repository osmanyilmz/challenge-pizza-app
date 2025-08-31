import "./App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secenekler" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
