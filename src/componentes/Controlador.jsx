import React from 'react'
import '../styles/interruptor.css'
import { Row, Col} from 'react-bootstrap'
const Controlador = (props) => {
    return (
        <Col>
            <h1>Jackson Guerrero</h1>
            <Col>
                <h4>Power</h4>
                <label className="switch">
                <input type="checkbox" onChange={props._handleEncendido}/>
                <div className="slider round"></div>
                </label>
            </Col>

            <Col className='volume-slider'>
                <h4>Volumen {Math.floor(props.volumen*10)}</h4>
                <input
                max='1'
                min='0'
                onChange={props.adjustVolume}
                step='0.01'
                type='range'
                value={props.volumen}
                />
            </Col>

            <Col >
            <h4>Modo</h4>
                <input type="radio" name="interruptor" id="prendido"/>
	            <input type="radio" name="interruptor" id="apagado" />
                <div className="interruptor-cuerpo" style={{margin: "auto"}}>
                    <div className="interruptor-tecla">
                        <label htmlFor="prendido" title="Desactivado" onMouseDown={props._handleTablero}>___</label>
                        <label htmlFor="apagado" title="Activado" onMouseDown={props._handleTablero}>___</label>
                    </div>		
                </div>
            </Col>
        </Col>
    )
}

export default Controlador
