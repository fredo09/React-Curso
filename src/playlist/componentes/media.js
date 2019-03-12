/**
 *  Componente
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import './media.css';

 //ComponentePuro
 class Media extends React.PureComponent {
   state = {
     author : 'Jose Alfredo'
   }
  // Con EMACS 2015
  //  constructor(props){
  //    super(props);
  //    this.state = {
  //      author : props.author
  //    }
  // //   this.handleClick = this.handleClick.bind(this);
  //  }

   handleClick = (e) => {
  //   console.log(this.props.image);
    // this.setState({
    //   author : 'Jose Alfredo'
    // });
    this.props.openModal(this.props); //Se ejecuta el metodo y le adicionamos otro parametro
   }

  render(){
    const styles ={
      container :{
        color : '#44546b',
        cursor:'pointer',
        width: 342,
        border: '1px solid red'
      }
    }

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img src={this.props.cover} alt="" width={342} height={182} className="Media-image"/>
          <h3 className="Media-tittle">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    );
  }
 }

 //PropTypes
Media.propTypes = {
  cover : PropTypes.string,
  title : PropTypes.string.isRequired,
  author : PropTypes.string,
  type : PropTypes.oneOf(['video', 'audio'])
}

//Exportando componente
export default Media;
