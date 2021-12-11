import React, { useEffect, useCallback } from 'react';
import {Button, Col} from 'react-bootstrap'

const Botones = ({mode, encendido, volumen}) => {
      const _handleSound =  (url) =>{
        if(encendido){
        const sound = new Audio();
        sound.src=  url;
        sound.volume= volumen;
        sound.play();

        }
      }  

      const handleSoundKey = useCallback(
        (e) => {
          if(encendido){
              mode.forEach(ele => {
                  if(e.keyCode === ele.key){
                    const sound = new Audio();
                    sound.src=  ele.url;
                    sound.volume= volumen;
                    sound.play();
                  }
              })
            }
        },
        [encendido, volumen, mode],
    )
      useEffect(() => {
        window.addEventListener('keyup', handleSoundKey)
        return () => {
            window.removeEventListener('keyup', handleSoundKey)
        }
      }, [handleSoundKey])
    return (
        <Col id="drum-bank" style={{margin: "auto"}}>
            {
                mode.map(element => {
                    return(
                        <Button data-key={element.key} key={element.key} id={element.id} url={element.url} onClick={()=>_handleSound(element.url)}className="drum-pad" >{element.letra}</Button>
                    )
                })
            }
        </Col>
    )
}

export default Botones
