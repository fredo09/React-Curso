/**
 *  Index React
 */

 //Importaciones
import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/contenedores/home';
// import Playlist from './src/playlist/componentes/playlist';
import data from '../api.json';

const app = document.getElementById('home-container');

ReactDom.render( <Home data = {data}/> ,app);






//utiliza para renderizar el componente
//ReactDom.render(que voy a renderizar,  donde lo hare);
// ReactDom.render(<Media
//                  title="¿Que es Html5?"
//                  image="./images/covers/html5.jpg"
//                  author="Fredy Vazquez"
//                  type = "video"
//                  />,app);
//ReactDom.render( <Playlist data={Data} /> ,app);
