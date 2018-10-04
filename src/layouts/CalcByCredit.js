import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { withRouter } from 'react-router';
const btnsForCredit = [
    { id: 0, name: 'StartOver', labelText: 'Start Over', btnStyle: 'btn-xl custom-btn-header btn-block p-3', divStyle: 'col-md-6' },
    { id: 1, name: 'ByCredit', labelText: 'Calculate by Product Price', btnStyle: 'btn-xl custom-btn-header btn-block p-3', divStyle: 'col-md-6' }
];
class CalculateByCredit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: 'CreditForm',
            displayHomeBtns: true
        }
    }
    render() {
        const { displayHomeBtns, formName } = this.state;
        return (
            <React.Fragment>
                <HeaderContainer btnsToDisplay={formName} displayBtns={displayHomeBtns} btnsForCredit={btnsForCredit} />
                <FormContainer className='page' formToDisplay={formName} displayBtns={displayHomeBtns} btnsForCredit={btnsForCredit} />
            </React.Fragment>
        );
    }
}

export default withRouter(CalculateByCredit);
