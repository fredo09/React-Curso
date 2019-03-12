/**
 *  Componente Timer
 */

 //imports
 import React from 'react';
 import './timer.css';

 // const FormatNumber = (number) =>{
 //   const second = '00';
 //   return second.substring(0, second.length - number.length ) + number;
 //
 // }
 //
 // const FormatTimer = (secs) =>{
 //   const minutes = parseInt(secs / 60, 10);
 //   const seconds = parseInt(secs % 60, 10);
 //   return `${minutes}:${FormatNumber(seconds.toString())}`;
 // }

 const Timer = (props) =>(
   <div className="Timer">
     <p>
       <span>{ props.currentTime }/{ props.duration }</span>

     </p>
   </div>
 )

 export default Timer;
