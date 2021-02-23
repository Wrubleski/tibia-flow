import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const UnderDevelopment = () => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <Container>
          <h1>
            <option value="">Em Construção</option>
          </h1>
          <p>
            Essa funcionalidade ainda está sendo desenvolvida. Por favor, tente
            novamente mais tarde.
          </p>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default UnderDevelopment;
