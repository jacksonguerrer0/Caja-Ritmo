import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import Botones from '../componentes/Botones'
import Controlador from '../componentes/Controlador'
import bank from '../sound/bank.json'
import '../styles/app.scss'
const App = () => {


  const [tablero, setTablero] = useState({tableroSonido: false});
  const [encendido, setEncendido] = useState(false);
  const [volumen, setVolumen] = useState(0.50)
  const [datos, setDatos] = useState([])

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
  
  // const handleKey = (e) =>{
  //   console.log(e.keyCode)
  //   if(e.keyCode === 81) { 
  //     console.log(e.keyCode);

  //     _handleSound(bank.bankOne[0].url)
  //   }
  // }

  // useEffect(() => {
  //   window.onkeydown= handleKey;
  // },)

  const _renderButtons = () =>{
    
    tablero.tableroSonido === true? Bank = bankTwo: Bank= bankOne;
    return Bank.map(element => {

      const handleKey = (e) =>{
        console.log(e)
        console.log("cualquier letra")
        console.log(element)
        console.log(element.key)
        if(e.keyCode === element.key) { 
          _handleSound(element.url)

        }
      }

      
        return(
            <Button  tabIndex={0}  key={element.key} id={element.id} url={element.url} onClick={()=>_handleSound(element.url)}className="drum-pad" onKeyDown={window.onkeydown= handleKey}  /*evento={()=> handleDatos(element.url, element.letra)}*/>{element.letra}</Button>
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
      <div>
      <Row id="display">
          <Botones _renderButtons={_renderButtons} />
          <Controlador  _handleTablero={_handleTablero} _handleEncendido={_handleEncendido} volumen={volumen} adjustVolume={adjustVolume}/>
        </Row>
      </div>
    </div>
  )
}

export default App
