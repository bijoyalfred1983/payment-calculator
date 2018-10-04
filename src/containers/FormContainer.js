import React, { Component } from 'react';
import localforage from "localforage";
import CalcSummary from '../components/CalcSummary';
import CalcFormFields from '../components/CalcFormFields';
import GetFinOptsBtn from '../components/GetFinOptsBtn';
import { withRouter } from 'react-router';
const priceFormFields = [
  { labelTxt: 'Product Price', name: 'productPrice', fieldValue: 0, autoFocus: true },
  { labelTxt: 'Warranty Price', name: 'warrantyAmt', fieldValue: 0, autoFocus: false },
  { labelTxt: 'Down Payment', name: 'downPayment', fieldValue: 0, autoFocus: false }
];

const sumarryFields = [
  { id: 0, fieldLabel: 'Product Price', name: 'productPrice', fieldValue: 0 },
  { id: 1, fieldLabel: 'Product Tax', name: 'productTax', fieldValue: 0 },
  { id: 2, fieldLabel: 'Warranty Amount', name: 'warrantyAmt', fieldValue: 0 },
  { id: 3, fieldLabel: 'Warranty Tax', name: 'warrantyTax', fieldValue: 0 },
  { id: 4, fieldLabel: 'Down Payment', name: 'downPayment', fieldValue: 0 }
];

const financeBtnLabel = 'Get Financing Options';
const financeBtnStyle = 'custom-btn btn-xl btn-block p-2 mt-5';

class FormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formToDisplay: props.formToDisplay,
      avilableCredit: 0,
      downPayment: 0,
      taxRate: 0.1,
      warrantyAmt: 0,
      warrantyTax: 0,
      warrantyTaxable: true,
      productPrice: 0,
      productTax: 0,
      totalFinanaceAmt: 0,
      warrantyTaxCalc: 0,
      selectedFields: priceFormFields,
      sumarryFields: sumarryFields,
      totalAmtLabel: 'Total Finance Amount',
      touched: {
        productPrice: false
      }
    }
    if (props.formToDisplay === 'PriceForm') {
      this.persistData('productPrice', this.state.productPrice);
    }
  }

  changeSummaryField = (summaryfieldObj, formToDisplay) => {

    let cloneFields = Object.assign([], this.state.sumarryFields);

    if (summaryfieldObj.length > 0) {
      summaryfieldObj.map((summaryfield, index) => {
        cloneFields[index].id = summaryfieldObj[index].id
        cloneFields[index].fieldLabel = summaryfieldObj[index].fieldLabel;
        cloneFields[index].name = summaryfieldObj[index].name;
        cloneFields[index].fieldValue = summaryfieldObj[index].fieldValue;
      })
    }

    (formToDisplay === 'CreditForm') ? cloneFields.splice(1, 1) : cloneFields;
    return cloneFields;
  }

  handleBlur(event, field) {

    //console.log('FormContainer =>handleBlur ' + event);
    this.setState({
      // touched: {this.state.touched, [field]: true }
    });

  }

  componentDidMount() {
    const { formToDisplay } = this.state;
    const { sumarryFields, totalAmtLabel } = this.state
    let newSummaryFields = sumarryFields[0];
    let totalAmtlabel = totalAmtLabel;
    let fieldObj = {
      labelTxt: 'Product Price',
      name: 'productPrice',
      autoFocus: true
    };
    let summaryfieldObj = [{
      id: 0,
      fieldLabel: 'Product Price',
      name: 'productPrice',
      fieldValue: 0
    }];
    if (formToDisplay !== 'PriceForm') {
      summaryfieldObj = [{
        id: 0,
        fieldLabel: 'Avilable credit',
        name: 'avilableCredit',
        fieldValue: 0
      },
      {
        id: 1,
        fieldLabel: 'Product Tax',
        name: 'productTax',
        fieldValue: 0
      }];
      fieldObj = {
        labelTxt: 'Avilable Credit',
        name: 'avilableCredit',
        autoFocus: "true"
      };
      totalAmtlabel = 'Amt Avilable for Purchase';
    }
    newSummaryFields = this.changeSummaryField(summaryfieldObj, formToDisplay);
    let newFields = this.changeField(fieldObj);
    this.updateState(newSummaryFields, newFields, totalAmtlabel);
  }

  shouldMarkError = (field) => {
    // const hasError = errors[field];
    // const shouldShow = this.state.touched[field];

    // return hasError ? shouldShow : false;
  };

  persistData = (keyToPersist, valueToPersist) => {

    localStorage.setItem(keyToPersist, valueToPersist);

  }

  changeField = (fieldObj) => {
    let fields = Object.assign([], this.state.selectedFields);
    fields[0].labelTxt = fieldObj.labelTxt;
    fields[0].name = fieldObj.name;
    return fields;
  }

  updateState = (cloneFields, fields, totalAmtlabel) => {
    this.setState({
      sumarryFields: cloneFields,
      selectedFields: fields,
      totalAmtLabel: totalAmtlabel
    })
  }

  handleInputChange = (evt) => {

    let noPrefix = this.removePrefix((evt.target.value).trim());
    this.setState({
      [evt.target.name]: Number(noPrefix).toFixed(2),

      productTax: Number(this.state.productPrice * this.state.taxRate).toFixed(2),
      warrantyTax: (this.state.warrantyTaxable && this.state.warrantyAmt > 0) ? Number(this.state.warrantyAmt * this.state.taxRate).toFixed(2) : 0,
      warrantyTaxCalc: Number(1 + this.state.taxRate)
    }, () => {

      console.log('this.state.productPrice' + this.state.productPrice)
      this.persistData('productPrice', Number(this.state.productPrice));
      this.setState({
        productTax: Number(this.state.productPrice * this.state.taxRate).toFixed(2),
        warrantyTax: (this.state.warrantyTaxable && this.state.warrantyAmt > 0) ? Number(this.state.warrantyAmt * this.state.taxRate).toFixed(2) : 0,
        warrantyTaxCalc: Number(1 + this.state.taxRate)
      })
    })
  }

  removePrefix = (prefixNumber) => {
    return prefixNumber.replace(/\$/g, "");
  }

  displayTotalAmt = () => {

    const { formToDisplay } = this.state;
    let totalAmount = 0;

    totalAmount = (formToDisplay === 'PriceForm') ? this.totalForProductPrice() : this.totalForCreditAvilable();

    return totalAmount;

    //this.setState({totalFinanaceAmt:totalAmount});
  }

  totalForProductPrice = () => {
    const { productPrice, downPayment, warrantyTaxCalc, warrantyAmt, warrantyTaxable } = this.state;
    let result = 0;
    if (warrantyTaxable) {
      result = parseFloat(((productPrice - downPayment) * warrantyTaxCalc) + (warrantyAmt * warrantyTaxCalc)).toFixed(2);
    }
    else {
      result = parseFloat(((productPrice - downPayment) * warrantyTaxCalc) + (warrantyAmt)).toFixed(2);
    }

    return result;
  }

  totalForCreditAvilable = () => {
    /*L – (w + t * w) >= p + t * p
    L is credit limit. $100
    W is warranty cost. $10.
    P is product cost. Unknown.
    T is tax rate. 10%
    $100 – (10 + 0.1 * 10) >= p + 0.1p
    $89 >= 1.1p
    $89/1.1
    $80.909090… >= P*/

    const { productPrice, avilableCredit, downPayment, productTax, warrantyAmt, warrantyTax, taxRate } = this.state;
    let newProductPrice = Number(localStorage.getItem('productPrice'));
    let totalProductPrice = 0;

    if (newProductPrice && newProductPrice > 0) {
      totalProductPrice = parseFloat(newProductPrice + (Number(taxRate) * newProductPrice)).toFixed(2);
    }

    let warrantyTotal = (Number(warrantyAmt) + (Number(taxRate) * Number(warrantyAmt)));

    console.log('totalProductPrice' + totalProductPrice);


    return parseFloat(avilableCredit - warrantyTotal).toFixed(2);

  }

  handleClick = (evt) => {

    (this.state.formToDisplay === 'PriceForm') ? this.switchPage('/PriceFinanceOpts') : this.switchPage('/CreditFinanceOpts');
  }

  switchPage = (pathname, stateValue) => {
    this.props.history.push({
      pathname: pathname
    });
  }

  render() {
    const { selectedFields, sumarryFields, totalAmtLabel, formToDisplay } = this.state;
    return (
      <div class="container d-flex container-height">
        <div class="col-md-12">
          <div class='row mt-5'>
            <form class="col-md-6">
              <CalcFormFields formFields={selectedFields} handleInputChange={this.handleInputChange} handleBlur={this.handleBlur.bind(this)}></CalcFormFields>
            </form>
            <div class="col-md-6 mt-4">
              <CalcSummary sumarryFields={sumarryFields} {...this.state}></CalcSummary>
              <div class="row mt-3">
                <div class="col-md-8 ">
                  <label class="form-control-label"><div className="label-font-xl">{totalAmtLabel}</div></label>
                </div>
                <div class="col-md-4 text-right">
                  <h5><span>$</span>{this.displayTotalAmt()}</h5>
                </div>
              </div>
              <GetFinOptsBtn id={0} labelText={financeBtnLabel} btnStyle={financeBtnStyle} handleClick={this.handleClick}></GetFinOptsBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FormContainer);