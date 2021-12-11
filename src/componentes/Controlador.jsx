import React from 'react'
import '../styles/interruptor.scss'
import {  Col} from 'react-bootstrap'
import db from '../sound/bank.json'
const Controlador = ({setVolumen, setMode, setEncendido, volumen }) => {

    const _handleEncendido = (e) => {
        const { checked } = e.target;
        setEncendido(checked)
      }
    
    const _handleTablero = (e) => {
        const { checked } = e.target
        // console.log(checked)
        if(checked) setMode(db.bankTwo)
        else setMode(db.bankOne)
    }
    const adjustVolume = (e) =>{
        setVolumen(e.target.value)
    }
    return (
        <Col>
            <h1>Jackson Guerrero</h1>
            <Col>
                <h4>Power</h4>
                <label className="switch">
                <input type="checkbox" onChange={_handleEncendido}/>
                <div className="slider round"></div>
                </label>
            </Col>

            <Col className='volume-slider'>
                <h4>Volumen {Math.floor(volumen*10)}</h4>
                <input
                max='1'
                min='0'
                onChange={adjustVolume}
                step='0.01'
                type='range'
                value={volumen}
                />
            </Col>

            <Col >
            <h4>Modo</h4>
            <label className="switch">
                <input type="checkbox" onChange={_handleTablero}/>
                <div className="slider round"></div>
            </label>
            </Col>
        </Col>
    )
}

export default Controlador
