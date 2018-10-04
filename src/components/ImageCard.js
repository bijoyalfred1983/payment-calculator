import React from 'react';
import ImageIcon from './ImageIcon';
import ButtonItem from '../components/ButtonItem';
const PUBLIC_URL = process.env.PUBLIC_URL ;

const ImageCard = (props) => {
    const {cardId, imgUrl, btnName, labelText, btnStyle} = props;
    return (
        <div className="col-md-6">
            <ImageIcon key={cardId} imgSrc={PUBLIC_URL+ imgUrl}> </ImageIcon>
            <ButtonItem key={cardId+btnName} labelText={labelText} btnName={btnName} btnsToDisplay='homeBtn' btnStyle={btnStyle} handleClick={props.handleClick} ></ButtonItem>
        </div>
    )
}

export default ImageCard;
