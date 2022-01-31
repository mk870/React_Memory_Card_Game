import React from 'react'
import backcover from '../images/backimage2.jpg'



export default function Cards({card,cardchoices,flipped,disabled}) {
  
  const cardchoice = ()=>{
    if(!disabled){
      cardchoices(card)
    }
    
  }
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
          <img  src={card.src} alt="card" className='front'/>
          <img  src={backcover} alt="back" onClick={cardchoice} className='back'/>
      </div>
    </div>
  )
}
