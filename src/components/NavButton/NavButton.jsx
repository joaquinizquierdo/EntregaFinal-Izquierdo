import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: 1px solid transparent;
  margin: 10px 20px;
  padding: 5px;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  &:hover{
    border-bottom: 3px solid red;
    border-radius: 3px;
    color: #ff0000;
  };
`;

const NavButton = ({content}) => {
  return (
    <Button>{content}</Button>
  );
};

export default NavButton;