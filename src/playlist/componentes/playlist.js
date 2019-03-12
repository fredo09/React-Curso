/**
*  Componente Playlist
*/

//Importaciones
import React from 'react';
import Media from './media';
//import Play from '../../icons/componentes/play';
//import Pause from '../../icons/componentes/pause';
//import FullScreen from '../../icons/componentes/full-screen';
//import Volumen from '../../icons/componentes/volumen';
import './playlist.css';

function Playlist (props){
  //    <Play color="red" size={40}/>
      // <Pause color="red" size={40}/>
      // <FullScreen color="black" size={60}/>
      // <Volumen color="yellow" size={100}/>
  return (
   <div className="Playlist">
    {
      props.playlist.map((item) =>{
        return <Media {...item} key={item.id} openModal = {props.handleOpenModal}/>
      })
    }
    </div>
  )
}

export default Playlist;


// class Playlist extends React.Component {
//   render(){
//
//     const playlist = this.props.data.categories[0].playlist;
//
//     console.log(this.props.data);
//     return (
//       <div className="Playlist">
//          {
//            playlist.map((item) =>{
//              return <Media
//                      //title={item.title}
//                      {...item}
//                      key={item.id}/>
//            })
//          }
//       </div>
//     )
//   }
// }
