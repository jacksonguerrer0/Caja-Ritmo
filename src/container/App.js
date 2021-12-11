import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Botones from '../componentes/Botones'
import Controlador from '../componentes/Controlador'
import db from '../sound/bank.json' 
import '../styles/app.scss'
const App = () => {

  const [mode, setMode] = useState(db.bankOne)
  const [encendido, setEncendido] = useState(false);
  const [volumen, setVolumen] = useState(0.50)

  return (
    <div id="drum-machine">
      <div>
      <Row id="display">
          <Botones  encendido={encendido} mode={mode} volumen={volumen}/>
          <Controlador  setMode={setMode} setEncendido={setEncendido} volumen={volumen} setVolumen={setVolumen}/>
        </Row>
      </div>
    </div>
  )
}

export default App
