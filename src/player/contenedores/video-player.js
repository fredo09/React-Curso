/**
*  Componente Video
*/

//imports
import React from 'react';
import VideoPlayerLayout from './../componentes/videoplayerlayout';
import Video from './../componentes/video';
import Title from './../Componentes/title';
import PlayPausa from './../componentes/play-pause';
import Timer from './../componentes/timer';
import VideoControls from './../componentes/video-controls';
import ProgressBar from './../componentes/progress-bar';
import Spinner from './../componentes/spinner';
import Volumen from './../componentes/volumen';
import FullScreen from './../componentes/fullscreen';

class VideoPlayer extends React.Component {

  state ={
    pause : true,
    duration: 0,
    currentTime: 0,
    loading : false,

  }

  //Cambiar elemento DOM de play a pause
  handleToggleClick = (e) =>{
    this.setState({
      pause: !this.state.pause
    })
  }

  //Cambiar el stado de un Componente segun yo lo necesite
  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  //Calculando el tiempo del video
  handleLoadedMetadata = (e) => {
    this.video = e.target;
    this.setState({
      duration : this.video.duration //Duracion del video despues de cargar la metadata
    })
  }

  //Actualiza el tiempo del video
  handleTimeUpdate = (e) =>{
    this.setState({
      currentTime : this.video.currentTime
    })
  }

  FormatNumber = (number) =>{
    const second = '00';
    return second.substring(0, second.length - number.length ) + number;
  }

  FormatTimer = (secs) =>{
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${minutes}:${this.FormatNumber(seconds.toString())}`;
  }

  //Con esto podemos mover la barra del video y actualizar el video tambien
  handleProgressChange =(e) =>{
    this.video.currentTime = e.target.value;
  }

  //Cuando la barra del video se este moviendo aparecera el spinner
  handleSeeking = (e) => {
      this.setState({
        loading :true
      })
  }

  //Cuando la barra del video no se este moviendo se quitara el spinner
  handleSeeked = (e) =>{
    this.setState({
      loading :false
    })
  }

  //Cmabiando el volumen
  handleVolumenChange = (e) =>{
    this.video.volume = e.target.value;
    console.log(this.video.volume);
  }

  handleMuteClick = () => {
    console.log('click');
  }

  GetNavegador = () => {
    const chorme = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const mozilla = navigator.userAgent.toLowerCase().indexOf('mozilla') > -1;

    if(chorme){
      return 'chorme';
    }else {
      return 'mozilla';
    }
  }

  //FullScreen
  handleFullScreenClick = (e) =>{
    if (this.GetNavegador() == 'chorme'){
      if(!document.webkitIsFullScreen){
        this.videoplayer.webkitRequestFullscreen();
      }else{
        document.webkitExitFullscreen();
      }
    }else{
      if(!document.mozFullScreen){
        this.videoplayer.mozRequestFullScreen();
      }else{
        document.mozCancelFullScreen();
      }
    }
  }

  //Elemento del VideoPlayer
  setRef = (element) => {
    this.videoplayer = element;
  }

  render(){
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
        >
        <Title title={this.props.title}/>
        <VideoControls>
          <PlayPausa handleClick={this.handleToggleClick} pause={this.state.pause} />
          <Timer
            duration={this.FormatTimer(this.state.duration)}
            currentTime={this.FormatTimer(this.state.currentTime)}/>
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
            />
          <Volumen
            handleVolumenChange={this.handleVolumenChange}
            handleMuteClick ={this.handleMuteClick}
            />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
        </VideoControls>
        <Spinner actived ={this.state.loading} />
        <Video
          pause ={this.state.pause}
          autoplay={this.props.autoplay}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeUpdate = { this.handleTimeUpdate }
          handleSeeking = { this.handleSeeking }
          handleSeeked = { this.handleSeeked }
          src={this.props.src}/>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
