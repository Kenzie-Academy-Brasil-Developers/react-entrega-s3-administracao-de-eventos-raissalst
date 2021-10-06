import styled from "styled-components";

export const MainContainerBeerListGather = styled.div`
  background-color: #ffffff;
  padding: 30px auto;
  max-width: 1510px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeaderContainerGather = styled.header`
  /* border: 1px solid red; */
  background-image: url("https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  max-height: 200px;

  @media screen and (min-width: 1024px) {
    background-size: cover;
    background-repeat: no-repeat;
  }
  h1 {
    font-size: 40px;
    text-align: center;
    padding: 15px 20px;
    font-family: var(--titleFont);
    background-color: rgba(255, 255, 255, 0.3);

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }
`;

export const ContainerTableGather = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 20px;
    min-width: 200px;
    max-width: 250px;
    text-align: center;
    padding: 15px 20px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
