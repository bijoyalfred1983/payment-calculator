import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class FormField extends Component {

  handleInputChange = (evt) => {
    evt.preventDefault();
    if (this.props) {
      this.props.handleInputChange(evt);
    }
  }
  handleBlur = (field) => (evt) => {
    if(field ==='productPrice' ||field ==='avilableCredit'){
      this.props.handleBlur(field);
    }
  }

  //const isNotEmpty = a => a.trim().length > 0
  render() {
    const { labelTxt, fieldName, id, autoFocus } = this.props;

    return (
      <React.Fragment>
        <div class="col-10 mt-5">
          <label key={id}><strong>{labelTxt}</strong></label>
          <NumberFormat key={id}
            name={fieldName}
            className='form-control form-control-lg'
            prefix={'$'}
            onChange={this.handleInputChange}
            autoFocus={autoFocus}
            onBlur={this.handleBlur(fieldName)}/>
        </div>
      </React.Fragment>
    )

  }

}

export default FormField;



