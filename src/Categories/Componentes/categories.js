/**
 * Componente Funcinal Categories
 */

 //importaciones
 import React from 'react';
 import Category from './category';
 import Search from './../../widgets/contenedores/search';
 import './categories.css';

 function Categories(props){
  // console.log(props);
   return (

     <div className="Categories">
       <Search />
     {props.categories.map((item)=>{
      return (
        <Category
           key={item.id} {...item}
           handleOpenModal = {props.handleOpenModal}
        />
      )
     })}
     </div>
   )
 }

 export default Categories;
