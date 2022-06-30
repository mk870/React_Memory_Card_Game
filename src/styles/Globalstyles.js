import { createGlobalStyle } from "styled-components";
export const Globalstyles = createGlobalStyle`
  body{
    background: #0D0628;
    display: flex;
    justify-content: center;
    color:white;
    overflow:${({overflow})=>overflow};
    
  }
  
  .App{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    text-align:center;
    .btn{
      width:80%;
    }
    p{
      font-size:20px;
    }
  }
  .card-container{
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-gap:10px;
    
  }
  .card{
    position:relative;
  }
  .card img{
    display:block;
    margin:10px;
    border-radius:10px;
    border:2px solid white;
    width:200px;
    height:270px;
  }
  .card .front{
    transform:rotateY(90deg);
    transition: all ease-in 0.2s;
    position:absolute;
  }
  .flipped .front{
    transform:rotateY(0deg);
    transition-delay:0.2s;
  }
  .card .back{
    transition:all ease-in 0.2s;
    transition-delay:0.2s;
  }
  .flipped .back{
    transform: rotateY(90deg);
    transition-delay:0s;
  }
  @media (max-width:920px){
    .card-container{
      display: grid;
      grid-template-columns:1fr 1fr 1fr;
      grid-gap:10px;
      
    }
    
  }
  @media (max-width:680px){
    .btn{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      
    }
    .card-container{
      display: grid;
      grid-template-columns:1fr 1fr;
      grid-gap:10px;
      
    }
    
  }
  @media (max-width:480px){
    .card-container{
      display: grid;
      grid-template-columns:1fr 1fr;
      grid-gap:10px;
      
    }
    .card img{
    display:block;
    margin:10px;
    border-radius:10px;
    border:2px solid white;
    width:150px;
    height:220px;
  }
  }
  @media (max-width:380px){
    .card-container{
      display: grid;
      grid-template-columns:1fr 1fr;
      grid-gap:10px;
      
    }
    .card img{
    display:block;
    margin:10px;
    border-radius:10px;
    border:2px solid white;
    width:120px;
    height:200px;
  }
  }
  `