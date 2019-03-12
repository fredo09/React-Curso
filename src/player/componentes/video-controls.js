/**
 * Componente Video-Controls
 */

 //imports
 import React from 'react';
 import './videocontrols.css';

 const VideoControls = (props) => (
   <div className="VideoPlayerControls">
     {props.children}
   </div>
 )


 export default VideoControls;
