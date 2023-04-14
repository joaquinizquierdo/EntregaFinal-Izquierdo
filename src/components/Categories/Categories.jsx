import styled from "styled-components";
import { colors } from "../../theme";

const Button = styled.button`
  background: none;
  color: white;
  border: 3px solid transparent;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  font-size: 1em;
  &:hover{
    border-bottom: 3px solid ${colors.color};
    border-radius: 5px;
    /* color: #ff0000; */
  };
`;

const Categories = ({content}) => {

  return (
    <Button>{content}</Button>
  );
};

export default Categories;