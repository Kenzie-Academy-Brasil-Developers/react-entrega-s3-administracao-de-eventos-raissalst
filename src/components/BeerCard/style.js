import styled from "styled-components";

export const ItemLiContainer = styled.li`
  width: 25%;
  text-align: center;
  margin: 0 auto 50px;
  -webkit-box-shadow: 0px 0px 10px 4px #0000007d;
  box-shadow: 0px 0px 10px 4px #0000007d;
  padding: 10px 10px 20px;
  max-height: 550px;
  min-width: 235px;
  font-size: 22px;

  @media screen and (min-width: 425px) {
    margin: 0 20px 50px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 3px;
  }

  h4 {
    font-size: 18px;
    padding: 10px 0;
  }

  h4 span {
    color: red;
    font-weight: lighter;
  }

  img {
    height: 200px;
    width: 50px;
  }

  .beerDescription {
    font-size: 16px;
    cursor: pointer;
    border: 1px solid var(--orange);
    line-height: 1;
    padding: 2px 0;
    width: 100%;
    text-align: center;
  }
`;
