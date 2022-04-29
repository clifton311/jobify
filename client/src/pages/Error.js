import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full page" >
      <h3>Ohh! Page Not Found</h3>
      <img src={NotFound} alt="not found" />
      <p>We Can't seem to find the apge you are looking for</p>
      <Link to="/">Back to Home</Link>
    </Wrapper>
  );
};

export default Error;
