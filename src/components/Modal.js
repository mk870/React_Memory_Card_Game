import React from 'react'
import { Overlay } from '../styles/ModalOverlaystyles'
import gif from '../images/3.gif'
import { Button } from '../styles/Buttonstyles'
import { ModalStyle } from '../styles/Modalstyles'
import reactDom from "react-dom";


export default function Modal({shuffle, turns}) {
  return reactDom.createPortal (
    <Overlay onClick={shuffle}>
      <div>
      <ModalStyle>
        <h4>GAME OVER</h4>
        <span>Congratulations</span>
        <span>You won in {turns} Turns</span>
        <img src={gif} alt="gif" />
        <Button onClick={shuffle}>Start new Game</Button>
      </ModalStyle>
      </div>
    </Overlay>,
    document.getElementById('portal')
  )
}
