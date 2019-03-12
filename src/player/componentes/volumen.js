/**
 * Componente Volumen
 */

 //imports
 import React from 'react';
 import VolumenIcon from './../../icons/componentes/volumen';
 import './volumen.css';

 function Volumen(props){
   return(
    <button className="Volume" onClick={props.handleMuteClick}>
      <VolumenIcon color="white" size={25}/>
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumenChange}
          />
      </div>
    </button>
   )
 }


 export default Volumen;
