import React,{useState, useRef} from 'react';
import {Col} from 'react-bootstrap'

const Botones = (props) => {

    
    // const handlekey = (e) =>{
    //     if(e.keyCode === 13) { 
    //         console.log(e)
    //   }
    // }
    // handleKey(e) {
    //     if (e.keyCode === this.props.keyCode) {
    //       this.playSound();
    //     }
    //   }
    // const referenciaBoton = useRef();
    // const datos = () =>{
    //     console.log(referenciaBoton.current)
    // }
  
    return (

        <Col id="drum-bank"  /*ref={referenciaBoton} onClick={datos}*/ style={{margin: "auto"}}>
            {
                props._renderButtons()
            }
        </Col>
    )
}

export default Botones
