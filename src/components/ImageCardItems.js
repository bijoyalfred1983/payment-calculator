import React, { Component } from 'react';
import ImageCard from './ImageCard';
import { withRouter } from 'react-router';

const CardItems = [
    { id: 11, btnName: 'priceBtn', imgUrl: '/assets/icons/cash-icon.jpg', labelText: 'Calculate by product price', btnStyle: 'custom-btn btn-xl btn-block p-4 mt-5' },
    { id: 12, btnName: 'creditBtn', imgUrl: '/assets/icons/credit-icon.jpg', labelText: 'Calculate Buying Power', btnStyle: 'custom-btn btn-xl btn-block p-4 mt-5' }
]

class ImageCardItems extends Component {

    handleClick = (name) => {

        (name === CardItems[0].btnName) ? this.switchPage('/CalcByPrice') : this.switchPage('/CalcByCredit');
    }

    switchPage = (pathname) => {
        this.props.history.push(pathname);
    }

    render() {
        let cards = CardItems.map((card, index) => {
            return <ImageCard
                key={index + card.id}
                imgUrl={card.imgUrl}
                btnStyle={card.btnStyle}
                labelText={card.labelText}
                cardId={card.id}
                btnName={card.btnName}
                handleClick={this.handleClick}>
            </ImageCard>;
        });
        return (
            <div className="row">
                {cards}
            </div>
        )
    }
}

export default withRouter(ImageCardItems);
