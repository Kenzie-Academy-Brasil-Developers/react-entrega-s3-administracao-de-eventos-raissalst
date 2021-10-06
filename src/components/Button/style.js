import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) => (props.removeSchema ? "#e91e63" : "#f6c101")};
  font-size: 17px;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top: 10px;
  cursor: pointer;
`;
