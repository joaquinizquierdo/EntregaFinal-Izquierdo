import styled from "styled-components";

const Aviso = styled.p`
  text-align: center;
  background-color: black;
  color: white;
  font-family: 'Oswald', sans-serif;
`;

const Home = (props) => {
  return (
    <>
      <Aviso>{props.aviso}</Aviso>
      <p>Home</p>
    </>
  );
};

export default Home;