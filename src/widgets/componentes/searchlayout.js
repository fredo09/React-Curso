/**
 *  Componente Search layout
 */

 //Imports
 import React from 'react';
 import './searchlayout.css';

 //Otra forma de crear Componentes Funcionles
 const SearchLayout = (props) => (
   <form className="Search" onSubmit={props.handleSubmit} >
     <input ref={props.setRef}  type="text"
            className="Search-input"
            placeholder="Busca tu Video Favorito"
            value={props.value} 
            onChange={props.handleChange}/>
   </form>
 )

 export default SearchLayout;
