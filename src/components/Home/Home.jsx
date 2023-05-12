import styled from "styled-components";
import banner from "./assets/banner.jpg";

const Aviso = styled.p`
  text-align: center;
  background-color: black;
  color: white;
  font-family: 'Oswald', sans-serif;
`;

const BannerImg = styled.img`
  width: 100%;
`;

const Home = (props) => {
  return (
    <>
      <Aviso>{props.aviso}</Aviso>
      <BannerImg src={banner} alt={banner} />
    </>
  );
};

export default Home;