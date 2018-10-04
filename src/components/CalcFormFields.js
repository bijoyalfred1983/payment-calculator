import React, { Component } from 'react';
import FormField from './FormField';

class CalcFormFields extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      FormFields: props.formFields
    }
  }

  handleInputChange=(evt)=>{
    this.props.handleInputChange(evt)
  }
  handleBlur=()=>{
   this.props.handleBlur()
  }
  render() {
    const { FormFields } = this.state;
    return (
      <div class='form-group'>{
        FormFields.map(field =>
          <FormField
            labelTxt={field.labelTxt}
            id={field.id}
            fieldName={field.name} 
            autoFocus={field.autoFocus} 
            handleInputChange={this.handleInputChange}
            handleBlur={this.handleBlur}>
          </FormField>)
      }</div>
    );
  }
}

export default CalcFormFields;



