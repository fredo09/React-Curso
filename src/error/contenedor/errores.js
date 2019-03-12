/**
 *  Componente Error
 */

 //Importaciones
 import React from 'react';
 import RegularError from './../componente/regular-error';

 class Error extends React.Component {
   state = {
     handleError :false
   }

   componentDidCatch(err, info){
     this.setState({
       handleError:true
     });
   }

   render(){
     if(this.state.handleError){
       return(
         <RegularError/>
       )
     }
     return (
       this.props.children
     )
   }
 }


 export default Error;
