import "./App.css";
// import Carousel from "./components/carousel";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  return (
    <>
    <Router>

   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' className="nav-link active">
             Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/contact' className="nav-link ">
             Contact
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/about' className="nav-link ">
             About
          </Link>
        </li>
 
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
  <Route exact path="/" element={<Home />}></Route>
  <Route exact path="/contact" element={<Contact />}></Route>
  <Route exact path="/about" element={<About />}></Route>
</Routes>
    </Router>
    </>
  );
}

export default App;
