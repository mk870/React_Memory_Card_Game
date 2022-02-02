import styled from "styled-components";

export const ModalStyle = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:10px;
  
  & > img{
    padding-bottom: 10px;
  }
  & > h4{
    color:red;
    font-weight:900;
  }
  & > span{
    font-weight:800;
    font-size:20px;
  }
  margin-top: 20px;
  border:2px solid rgba(255,255,255,0.5);
  border-radius: 10px;
  z-index: 10;
  width: 70vw;
  max-width: 500px;
  background-color: rgba(210, 210, 252, 0.726);
`