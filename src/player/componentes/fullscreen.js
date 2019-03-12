/**
 *  Componente FullScreen
 */

 //imports
 import React from 'react';
 import FullScreenIcon from './../../icons/componentes/full-screen';
 import './fullscreen.css';

 function FullScreen(props){
   return(
     <div className="FullScreen" onClick={props.handleFullScreenClick}>
      <FullScreenIcon color="white"  size={25}/>
     </div>
   )
 }


 export default FullScreen;
