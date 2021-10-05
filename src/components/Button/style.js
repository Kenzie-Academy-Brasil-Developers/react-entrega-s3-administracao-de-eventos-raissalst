import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) => (props.removeSchema ? "#e91e63" : "#4caf50")};
  /* background-color: #4caf50; */
  font-size: 17px;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top: 10px;
  cursor: pointer;
`;
