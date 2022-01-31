import styled from "styled-components";

export const Howtoplaystyles = styled.div`
  margin: 20px;
  border:2px solid rgba(255,255,255,0.5);
  border-radius: 10px;
  z-index: 10;
  width: 500px;
  max-width: 80%;
  background-color: rgba(210, 210, 252, 0.726);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  & > p{
    padding:20px;
    border:2px solid black;
    border-radius: 10px;
    font-size:20px;
  }
`