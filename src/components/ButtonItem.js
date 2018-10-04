import React from 'react';

const ButtonItem = (props) => {

	const handleClickEvent = (event) => {
		//console.log('ButtonItem-->'+props.btnName);
		if (event) {
			event.preventDefault();
		}
		props.handleClick(props.btnName);
		
	}

	const displayHomeButton = () => {
		return (<React.Fragment>
			{constructButton()}
		</React.Fragment>)
	}

	const constructButton = () => {
		return (<button key={props.id} name={props.btnName} className={props.btnStyle} onClick={handleClickEvent}>
			{props.labelText}
		</button>)
	}

	const displayHeaderButton = () => {
		return (<div key={props.id} className={props.devStyle}>
			{constructButton()}
		</div>)
	}

	return (
		(props.btnToDisply === 'HomeBtns') ? displayHomeButton() : displayHeaderButton()
	)

}

export default ButtonItem;
