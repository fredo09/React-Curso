/**
 *  componente video
 */

 //imports
 import React from 'react';
 import './video.css';

 class Video extends React.Component{

   handleToggleClick(){
     if(this.props.pause){
       //Ejecutara la funcion de play para el video
       this.video.play();
    }else{
      //Ejecutara la funcion de pause para el video
      this.video.pause();
    }
   }

   //Cuando recibo nuevas propiedades en el componente
   componentWillReceiveProps(nextProps){
     if(nextProps.pause != this.props.pause){
       this.handleToggleClick();
     }
   }

   //Hacer una referencia a un elemento de Dom para manipularlo
   setRef = (element) =>{
     this.video = element;
   }

   render(){

     //Constantes de funciones para manejar eventos del video
     const { handleLoadedMetadata , handleTimeUpdate, handleSeeking, handleSeeked} = this.props;
     return (
       <div className="Video">
          <video
            autoPlay={this.props.autoplay}
            src={this.props.src}
            ref={this.setRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate ={handleTimeUpdate}
            onSeeking={handleSeeking}
            onSeeked={handleSeeked}
          />
      </div>
     )
  }
 }

 export default Video;
