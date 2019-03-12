/**
 *  Compomente contenedor "Inteligente" Home
 */

 //imports
 import React from 'react';
 import HomeLayout from '../componentes/home-layout';
 import Related from '../componentes/related-layout';
 import Categories from '../../Categories/Componentes/categories';
 import ModalContainer from './../../widgets/contenedores/modalcontainer';
 import Modal from '../../widgets/componentes/modal';
 import Error from '../../error/contenedor/errores';
 import VideoPlayer from '../../player/contenedores/video-player';

 class Home extends React.Component {

   state = {
      modalvisible : false,

   }

   handleOpenModal = (media) => {
     console.log(media);
     this.setState({
       modalvisible :true,
       media
     })
   }

   handleCloseModal = (event) => {
     this.setState({
       modalvisible: false
     })
   }

   render(){
     return (
       <Error>
       <HomeLayout>
         <Related />
         <Categories categories= {this.props.data.categories} handleOpenModal= {this.handleOpenModal}/>
         {
           this.state.modalvisible &&
           <ModalContainer>
           <Modal hadleClick={this.handleCloseModal}>
             <VideoPlayer
               autoplay
               src={this.state.media.src}
               title={this.state.media.title}
               />
           </Modal>
           </ModalContainer>
         }
       </HomeLayout>
       </Error>
     )
   }
 }

 export default Home;
