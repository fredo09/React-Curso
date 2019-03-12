/**
 *  Componente VideoPlayerLayout
 */

 import React from 'react';
 import './videoplayerlayout.css';

 const VideoPlayerLayout = (props) => (
      <div className="VideoPlayerLayout" ref={props.setRef}>
        {props.children}
      </div>
   )


 export default VideoPlayerLayout;
