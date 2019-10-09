
import React, { Component, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../styles/global.css'



export default class Question extends Component {


  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };




    render() {

      return (
          /*
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ position: 'relative',width: '500px', height: '120px', color: 'white', marginBottom: '30px', fontsize: '500px'}} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              position: 'relative',width: '500px', height: '60px', color: 'white', fontsize: '500px',
              backgroundColor: '#603348',
            }}
          >
            <p style={{fontSize: '40px'}}> {this.props.question}</p>
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: '#603348'}}>
            <p style={{fontSize: '40px'}}> {this.props.answer}</p>
          </BackSide>
        </Flippy>
          */



          <button className={this.state.isToggleOn ? "tab" : "answer" } onClick={this.handleClick}>
              <div><p className={this.state.isToggleOn ? 'preText' : 'postText'}>{this.props.question}</p></div>
            {this.state.isToggleOn ? null: <div>
                <p className={'answerText'}>{this.props.answer}</p>
            </div>
            }
          </button>


      );
    }




}
