/**
 *  Componente Layout Home
 */

 //importaciones
 import React from 'react';
 import './home.css';

//Conponente Funcional
 function HomeLayout(props){
   return(
     <section className="HomeLayout" >
      {props.children}
     </section>
   )
 }

 export default HomeLayout;
