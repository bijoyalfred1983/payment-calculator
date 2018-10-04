import React, { Component } from 'react';
import { withRouter } from 'react-router'
import SummaryLabel from './SummaryLabel';

class CalcSummary extends Component {

    handleClick = (eve) => {
        eve.preventDefault();
        let path = '/CardContainer';
        this.switchPage(path);
    }

    switchPage = (pathname) => {
        this.props.history.push({
            pathname: pathname
        });
    }

    render() {
        const { sumarryFields } = this.props
        return (
            <React.Fragment>
                {
                    sumarryFields.map((summaryField) => {
                        return <SummaryLabel fieldLabel={summaryField.fieldLabel} fieldValue={this.props[summaryField.name]} {...this.props}></SummaryLabel>
                    })
                }
            </React.Fragment>
        );
    }
}

export default withRouter(CalcSummary);




