/**
 * Componente Spinner
 */

 //imports
 import React from 'react';
 import './spinner.css';

 const Spinner = (props) => {
   if(!props.actived){
     return null;
   }
   return(
     <div className="Spinner">
       <span>Cargando...</span>
     </div>
   )
}

 export default Spinner;
