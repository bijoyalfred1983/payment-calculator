import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import CardContainer from '../containers/CardContainer';
import { withRouter } from 'react-router';
const btnsForPrice = [
    {id:0,name: 'StartOver',labelText:'Start Over', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'},
    {id:1,name: 'ByPrice',labelText:'Calculate By Power', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'}
  ];
class PriceFinanceOpts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: '',
            displayHomeBtns: true
        }
    }
    render() {
        const { displayHomeBtns } = this.state;
        return (
            <div>
                <HeaderContainer btnsToDisplay={'PriceForm'} displayBtns={displayHomeBtns} btnsForPrice={btnsForPrice}/>
                <CardContainer></CardContainer>
            </div>
        );
    }
}

export default withRouter(PriceFinanceOpts);
