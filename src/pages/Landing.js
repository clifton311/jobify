import React from "react";
import Logo from '../components/Logo'
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import {Link} from 'react-router-dom'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job<span>Tracker</span>App
          </h1>
          <p>
            I'm baby ugh disrupt pok pok literally +1. 8-bit intelligentsia jean
            shorts taiyaki coloring book leggings vaporware, sartorial cornhole.
            Godard pork belly tattooed, vape chicharrones etsy venmo DIY.
            Wayfarers fingerstache PBR&B slow-carb gluten-free jean shorts.
            Small batch sriracha ramps twee health goth lyft swag flexitarian
            DIY banh mi hot chicken kale chips quinoa four dollar toast.
          </p>
          <Link  to="/register">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing


