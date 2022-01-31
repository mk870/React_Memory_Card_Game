import React from 'react'
import { Howtoplaystyles } from '../styles/Howtoplaystyles'
import { Overlay } from '../styles/ModalOverlaystyles'
import reactDom from "react-dom";
import { Button } from '../styles/Buttonstyles';

export default function Howtoplay({backtogame}) {
  return reactDom.createPortal(
    <Overlay onClick={backtogame}>
     <div>
      <Howtoplaystyles>
        <p>Click 2 cards consecutively and they will flip,this creates one Turn, if they have the same monster/identical they will stay flipped, however if they are not the same they will flip and close. 
         Your goal is to find identical cards each turn.
         If and until all cards have been matched then the game ends.
         Goodluck!!!
        </p>
        <Button onClick={backtogame}>Back to the game</Button>
      </Howtoplaystyles>
      </div>
    </Overlay>,
    document.getElementById('portal2')
  )
}
