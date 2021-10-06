import styled from "styled-components";

export const MainContainerBeerListGrad = styled.div`
  background-color: #ffffff;
  padding: 30px auto;
  max-width: 1510px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeaderContainerGrad = styled.header`
  border: 1px solid red;
  background-image: url("https://cdn.pixabay.com/photo/2018/05/26/06/46/graduation-cap-3430714_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  max-height: 200px;

  @media screen and (min-width: 1024px) {
    background-size: contain;
    background-repeat: repeat;
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

  /* h3 {
    font-size: 20px;
    text-align: center;
    padding: 10px 20px;
    font-style: italic;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }

  h5 {
    border: 1px solid blue;
    font-size: 18px;
    min-width: 100px;
    max-width: 120px;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    max-width: 45%;
  } */
`;

export const ContainerTableGrad = styled.div`
  border: 1px solid red;
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
