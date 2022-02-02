import { Globalstyles } from "./styles/Globalstyles";
import { Button } from "./styles/Buttonstyles";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import card1 from "./images/pic1.png";
import card2 from "./images/pic2.png";
import card3 from "./images/pic3.png";
import card4 from "./images/pic4.png";
import card5 from "./images/pic5.png";
import card6 from "./images/pic6.png";
import Modal from "./components/Modal";
import Howtoplay from "./components/Howtoplay";


const cardlist = [
  {"src":card1,matched:false},
  {"src":card2,matched:false},
  {"src":card3,matched:false},
  {"src":card4,matched:false},
  {"src":card5,matched:false},
  {"src":card6,matched:false}
]

function App() {
  const [cards,setCards] = useState([])
  const [firstpick,setfirstpick] = useState(null)
  const [secondpick,setsecondpick] = useState(null)
  const [disabled,setdisabled] = useState(false)
  const [turns,setturns] = useState(0)
  const [matchedcards,setMatchedcards] = useState(0)
  const [howtoplay,setHowtoplay] = useState(false)
  const [gamewon,setGamewon] = useState(false)

  const shuffle = () =>{
    const cardlist2 = [...cardlist,...cardlist]
      .sort(()=>Math.random() - 0.5)
      .map((card) => ({...card, id:Math.random()}))

    setfirstpick(null)
    setsecondpick(null)
    setturns(0)
    setCards(cardlist2)
    setMatchedcards(0)
    setGamewon(false)
  }
  
  
  const cardchoices =(card)=>{
    firstpick? setsecondpick(card):setfirstpick(card)
  }
  useEffect(()=>{
    
    if (firstpick && secondpick) {
      setdisabled(true)
      if(firstpick.src === secondpick.src){
        setCards(prevCards =>{
          return prevCards.map((card)=>{
            if(card.src === firstpick.src){
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })
        
        reset()
      }else{
        setTimeout(() => {
          reset()
        }, 1000);
        
      }
    }
  },[firstpick,secondpick])

  useEffect(()=>{
    cards.forEach(card => {
      if(card.matched){
        setMatchedcards(prevMatch => prevMatch + 1)
      }
    });
  },[cards])
  
  useEffect(()=>{
    if(matchedcards === 42){
      setTimeout(()=>{setGamewon(true)},1000) 
    }
  },[matchedcards])

  const reset = ()=>{
    setfirstpick(null)
    setsecondpick(null)
    setturns(prevTurns => prevTurns + 1)
    setdisabled(false)
  }
  const backtogame = () =>{
    setHowtoplay(false)
  }
  ;
  return (
    <div className="App">
      <Globalstyles overflow={gamewon || howtoplay ? 'hidden':'none'}/>
      <h1>Memory Monster Card Game</h1>
      <Button onClick={() =>setHowtoplay(true)}>How to play</Button>
      <Button onClick={shuffle}>Start New Game</Button>
      <div className="card-container">
        {cards.map((card)=>(
          <Cards
          key={card.id}
          card = {card} 
          cardchoices={cardchoices} 
          flipped ={card === firstpick || card === secondpick || card.matched}
          disabled={disabled}
          />
          
        ))}
      </div>
      {gamewon && <Modal shuffle ={shuffle} turns={turns}/>}
      {howtoplay && <Howtoplay backtogame={backtogame}/>}
      <p>Turns:{turns}</p>
    </div>
  );
}

export default App;
