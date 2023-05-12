import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import NavButton from "../NavButton/NavButton";
import CartWidget from "../CartWidget/CartWidget";

const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 50px;
`;

const H1 = styled.h1`
  background-color: white;
  text-align: center;
  `;

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  position: sticky;
  top: 0px;
  border-bottom: 2px solid black;
`;

const DivShop = styled.div`
  width: 95%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const NavBar = () => {
  return (
    <>
      <Header>
        <Img src={logo} alt={logo} />
        <H1>USC</H1>
      </Header>
      <Nav>
        <DivShop>
          <div>
            <Link to={`/`}>
              <NavButton content={'Inicio'} />
            </Link>
            <Link to={`/products`}>
              <NavButton content={'Productos'} />
            </Link>
          </div>
          <CartWidget />
        </DivShop>
      </Nav>
    </>
  );
};

export default NavBar;