import React, { Component } from 'react';
import ButtonItem from '../components/ButtonItem';
import { withRouter } from 'react-router';


class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnsToDisplay: props.btnsList || []
    }
  }

  handleClick = (name) => {
    //console.log('ButtonContainer name==>' + name);
    const { btnsToDisplay } = this.props;
    let pathSelected = '/';
    if (name && name === 'StartOver') {
      this.switchPage(pathSelected);
    } 
    else {
      pathSelected = (btnsToDisplay === 'PriceForm') ? "/CalcByCredit" : "/CalcByPrice";
      this.switchPage(pathSelected);
    }
  }

  switchPage = (pathname) => {
    this.props.history.push({
      pathname: pathname
    });
  }

  render() {
    const { btnsToDisplay } = this.state;
    return (
      <div className="row">
        {
          btnsToDisplay.map(btnItem =>
            <ButtonItem
              id={btnItem.id}
              btnName={btnItem.name}
              labelText={btnItem.labelText}
              devStyle={btnItem.divStyle}
              btnStyle={btnItem.btnStyle}
              handleClick={this.handleClick}>
            </ButtonItem>)
        }
      </div>
    )
  }
}

export default withRouter(ButtonContainer);

