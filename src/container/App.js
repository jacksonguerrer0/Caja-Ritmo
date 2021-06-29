import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Botones from '../componentes/Botones'
import Controlador from '../componentes/Controlador'
import bank from '../sound/bank.json'
import '../styles/app.css'
const App = () => {


  const [tablero, setTablero] = useState({tableroSonido: false});
  const [encendido, setEncendido] = useState(false);
  const [volumen, setVolumen] = useState(0.50)


  const _handleTablero = (e) => {
    const { htmlFor } = e.target

    if(htmlFor === "prendido"){
      return setTablero({
        tableroSonido: true
      })
    }
    if(htmlFor === "apagado"){
      return setTablero({
        tableroSonido: false
      })
    }
  }

  const _handleEncendido = (e) => {
    const { checked } = e.target;
    setEncendido({
      checked
    })
  }

  const bankOne = bank.bankOne;
  const bankTwo = bank.bankTwo;
  let Bank = "";

  const handleKey = (e) =>{
    if(e.keyCode === 13) { 
      console.log(e)
    }
  }

  const _renderButtons = () =>{
    
    tablero.tableroSonido === true? Bank = bankTwo: Bank= bankOne;
    return Bank.map(element => {
        return(
            <Button lg="3" key={element.key} id={element.id} onClick={()=>_handleSound(element.url)} onKeyDown={handleKey} className="drum-pad">{element.letra}</Button>
        )
    });
  }
  const _handleSound = (url) =>{
    if(encendido.checked === true ){
    const sound = new Audio();
    sound.src= url;
    sound.play();
    sound.volume= volumen;
    }
  }  
  const adjustVolume = (e) =>{
    setVolumen(e.target.value)
  }
  return (
    <div id="drum-machine">
      <Container>
      <Row id="display">
          <Botones _renderButtons={_renderButtons}/>
          <Controlador  _handleTablero={_handleTablero} _handleEncendido={_handleEncendido} volumen={volumen} adjustVolume={adjustVolume}/>
        </Row>
      </Container>
    </div>
  )
}

export default App
