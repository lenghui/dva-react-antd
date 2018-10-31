import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';
import React from 'react'

class TextyAnim extends React.Component{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <h1><Texty>{this.state.show && 'Ant Motion'}</Texty></h1>
      </div>
    );
  }
}

export default TextyAnim;