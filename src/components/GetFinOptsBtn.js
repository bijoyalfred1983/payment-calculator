import React from 'react';
import ButtonItem from './ButtonItem';

const GetFinOptsBtn = (props) => {
    const { btnName, labelText, btnStyle } = props;
    return (
        <div>
            <ButtonItem key={btnName}
                labelText={labelText}
                btnName={btnName}
                btnStyle={btnStyle}
                handleClick={props.handleClick} >
            </ButtonItem>
        </div>
    )
}

export default GetFinOptsBtn;
