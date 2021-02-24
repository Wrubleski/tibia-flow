import Container from "react-bootstrap/Container";
import logo from "../assets/img/TibiaDragonLogo_HighRes.png";
import Image from "react-bootstrap/Image";
import MenuItem from "./MenuItem";
import Nav from "react-bootstrap/Nav";
import { IndexLinkContainer } from "react-router-bootstrap";

const Menu = () => {
  const items = [
    { name: "Home", link: "/", _id: 0 },
    { name: "Loot", link: "/lootsplit", _id: 1 },
    { name: "Ferramenta B", link: "/notdev", _id: 2 },
    { name: "Ferramenta C", link: "/notdev", _id: 3 },
  ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <IndexLinkContainer
            className="d-lg-none"
            exact={true}
            key={item._id}
            to={item.link}
          >
            <Nav.Link>{item.name}</Nav.Link>
          </IndexLinkContainer>
        );
      })}

      <Image src={logo} fluid className="d-none d-lg-block" />

      <Container
        style={{ backgroundColor: "#B6B6B6", borderRadius: "10px" }}
        className="mb-5 d-none d-lg-block"
      >
        {items.map((item, index) => {
          return <MenuItem key={item._id} item={item} />;
        })}
      </Container>
    </>
  );
};

export default Menu;
