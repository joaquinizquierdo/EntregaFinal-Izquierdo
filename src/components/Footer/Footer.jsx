import styled from "styled-components";
import { colors } from "../../theme";

const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  width: 100%;
  height: 50px;
  position: relative;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: x-small;
`;

const P = styled.p`
  margin: 5px;
  color: #8d8d8d;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Div>
        <P>Todos los derechos reservados</P>
      </Div>
      <Div>
        <P>Términos y Condiciones</P>
        <P>Política de privacidad y cookies</P>
      </Div>
    </FooterContainer>
  );
};

export default Footer;