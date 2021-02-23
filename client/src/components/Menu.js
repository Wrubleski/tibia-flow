import Container from "react-bootstrap/Container";
import logo from "../assets/img/TibiaDragonLogo_HighRes.png";
import Image from "react-bootstrap/Image";
import MenuItem from "./MenuItem";

const Menu = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "Loot", link: "/lootsplit" },
    { name: "Ferramenta B", link: "/notdev" },
    { name: "Ferramenta C", link: "/notdev" },
  ];

  return (
    <>
      <Image src={logo} fluid />
      <Container
        style={{ backgroundColor: "#B6B6B6", borderRadius: "10px" }}
        className="mb-5"
      >
        {items.map((item) => {
          return <MenuItem item={item} />;
        })}
      </Container>
    </>
  );
};

export default Menu;
