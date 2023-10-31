import React from "react";

import Footer from "../components/Footer/Footer";
import { Button } from "react-bootstrap";
import NavBarWithoutCart from "../components/NavBarWithoutCart";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <NavBarWithoutCart></NavBarWithoutCart>
        <header>
          <Button className="btn">Get our Latest Album</Button>
          <br />
          <Button className="play-btn">▶</Button>
        </header>
      </div>
      <h2>Tours</h2>
      <div className="container">
        <div className="tour-item">
          <span className="tour-date">JUL 16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-spent-place">DTE ENERGY MUSIC THEATRE</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL 19</span>
          <span className="tour-place">TORONTO,ON</span>
          <span className="tour-spent-place">BUDWEISER STAGE</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL 22</span>
          <span className="tour-place">BRISTOW, VA</span>
          <span className="tour-spent-place">JIGGY LUBE LIVE</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL 29</span>
          <span className="tour-place">PHOENIX, AZ</span>
          <span className="tour-spent-place">AK-CHIN PAVILION</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
        <div className="tour-item">
          <span className="tour-date">AUG 2</span>
          <span className="tour-place">LAS VEGAS, NV</span>
          <span className="tour-spent-place">T-MOBILE ARENA</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
        <div className="tour-item">
          <span className="tour-date">AUG 7</span>
          <span className="tour-place">CONCORD, CA</span>
          <span className="tour-spent-place">CONCORD PAVILION</span>
          <Button className="buy-btn">Buy Tickets</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
