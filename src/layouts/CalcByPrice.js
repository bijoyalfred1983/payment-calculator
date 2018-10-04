import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { withRouter } from 'react-router';
const btnsForPrice = [
    {id:0, name: 'StartOver',labelText:'Start Over', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'},
    {id:1, name: '',labelText:'Calculate By Power', btnStyle:'btn-xl custom-btn-header btn-block p-3', divStyle:'col-md-6'},

  ];
class CalculateByPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: 'PriceForm',
            displayHomeBtns: true
        }
    }
    render() {
        const { displayHomeBtns,formName } = this.state;
        return (
            <div>
                <HeaderContainer btnsToDisplay={formName} displayBtns={displayHomeBtns} btnsForPrice={btnsForPrice}/>
                <FormContainer  className='page' formToDisplay={formName} displayBtns={displayHomeBtns} btnsForCredit={btnsForPrice}/>
            </div>
        );
    }
}

export default withRouter(CalculateByPrice);
