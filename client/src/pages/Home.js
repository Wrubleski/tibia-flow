import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <Container>
          <h1>
            <option value="">Home Page</option>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            est quis neque luctus porta. Proin eget nunc aliquet, gravida dui
            et, vehicula augue. Maecenas quam justo, lacinia a eleifend et,
            aliquet eget magna. Morbi vestibulum molestie turpis a viverra.
          </p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Home;
