import styled from "styled-components";

export const MainContainerBeerList = styled.div`
  background-color: #ffffff;
  padding: 30px auto;
  max-width: 1510px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeaderContainerHome = styled.header`
  border: 1px solid red;
  background-image: url("https://cdn.pixabay.com/photo/2014/01/28/15/08/beer-253791_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 40px;
    text-align: center;
    padding: 15px 20px;
    font-family: var(--titleFont);

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }

  h3 {
    font-size: 20px;
    text-align: center;
    padding: 10px 20px;
    font-style: italic;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }

  h5 {
    /* border: 1px solid blue; */
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
  }
`;
