import React from 'react';

const SummaryLabel = (props) => {
    return (
        <div class="row mt-3">
            <div class="col-md-6 ">
                <label class="col-form-label form-control-label summary-font" ><i>{props.fieldLabel}</i></label>
            </div>
            <div class="col-md-6 text-right">
                <h5><span>${props.fieldValue}</span></h5>
            </div>
        </div>
    );
}

export default SummaryLabel;



