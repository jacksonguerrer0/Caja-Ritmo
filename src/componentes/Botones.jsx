import React,{useState} from 'react';
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

    return (

        <Col id="drum-bank" style={{margin: "auto"}}>
            {
                props._renderButtons()
            }
        </Col>
    )
}

export default Botones
