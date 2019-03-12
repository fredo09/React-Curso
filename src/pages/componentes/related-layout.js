/**
 *  Componente Related-layout
 */

 import React from 'react';
 import Logo from '../../../images/logo.png'; // Direccion de la imagen Logo
 import './related.css';

 //Componente Funcional
 function RelatedLayout(props){
   return(
     <div className="Related">
        <img src={Logo} width={250}/>
     </div>
   )
 }


 export default RelatedLayout;
