/**
 *  Componente Search
 */

 import React from 'react';
 import SearchLayout from './../componentes/searchlayout';


 class Search extends React.Component {
   state = {
     value: 'Luis Fonsi'
   }

   handleSubmit = (e) =>{
     e.preventDefault();
     console.log( this.input.value  , 'submit');
   }

   handleInputChange = (e) => {
     this.setState({
       value : this.input.value.replace(' ', '-')
     })

   }

   setInputRef = (element) =>{
     this.input = element;
   }

   render() {
     return(
        <SearchLayout setRef = {this.setInputRef}
           handleSubmit = {this.handleSubmit}
           handleChange ={this.handleInputChange}
           value={this.state.value}/>
     )
   }
 }

 export default Search;
