import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import CardContainer from '../containers/CardContainer';
import { withRouter } from 'react-router';
const btnsForCredit = [
    {id:0, name: 'StartOver',labelText:'Start Over', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'},
    {id:1, name: 'ByCredit',labelText:'Calculate by Product Price', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'}
];
class CreditFinanceOpts extends Component {
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
                <HeaderContainer btnsToDisplay={'CreditForm'} displayBtns={displayHomeBtns} btnsForCredit={btnsForCredit}/>
                <CardContainer></CardContainer>
            </div>
        );
    }
}

export default withRouter(CreditFinanceOpts);;
