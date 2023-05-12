import styled, { keyframes } from "styled-components";
import focus from "./assets/focus.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.img`
  animation: ${rotate} 5s linear infinite;
  padding: 50px;
  width: 150px;
`;

const Loading = () => {
  return (
    <>
      <Rotate src={focus} alt={focus} />
      <h2>Cargando</h2>
    </>
  );
};

export default Loading;
