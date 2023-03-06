import React from "react";
import { Container } from "reactstrap";

import "../styles/components/header.css";

export const Header = () => {
  return (
    <>
      <section className="section section-shaped section-lg app-header">
        <div className="shape shape-style-1 bg-gradient-info">
          <Container className="app-header__container">
            <h3
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "30px",
                marginTop: "3rem",
                background: "none",
              }}
            >
              Recipefy
            </h3>
            <p
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "12px",
                background: "none",
              }}
            >
              Your One Stop Place for Great Recipe Selection.
            </p>
          </Container>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </>
  );
};

export default Header;
