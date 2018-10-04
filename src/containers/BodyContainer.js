import React, { Component } from 'react';
import ButtonContainer from './containers/ButtonContainer'

class BodyContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <ButtonContainer showButtons={this.state.displayBtns} containerName={this.state.name}>{this.state.name}</ButtonContainer>
      </div>
    )
  }
}
export default BodyContainer;
