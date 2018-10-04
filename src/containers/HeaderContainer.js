import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';

class HeaderContainer extends Component {

constructor(props){
super(props);
console.log('HeaderContainer');
}
  showButtons = (displayBtns) => {
    if (displayBtns) {
      return this.buttonsToDisplay();
    } else {
      return null;
    }
  }

  buttonsToDisplay = () => {

    const { btnsToDisplay, btnsForPrice, btnsForCredit } = this.props;
    let btnsSelected = ''
    let btnsListSelected = [];

    if (btnsToDisplay === 'PriceForm') {
      btnsSelected = 'PriceForm';
      btnsListSelected = btnsForPrice;
    } else {
      btnsSelected = 'CreditForm';
      btnsListSelected = btnsForCredit
    }

    return <ButtonContainer
      btnsToDisplay = {btnsSelected}
      btnsList = {btnsListSelected}>
    </ButtonContainer>

  }

  render() {
    const { displayBtns } = this.props;
    return (
      <div className="header-container">
        <header className="container">
          {this.showButtons(displayBtns)}
        </header>
      </div>
    )
  }
}
export default HeaderContainer;
