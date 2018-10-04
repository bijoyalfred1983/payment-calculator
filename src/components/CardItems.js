import React, { Component } from 'react';
import Card from '../components/Card';
class CardItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    render() {
        const { isLoading,financeOpts } = this.props;
        let cards = !isLoading && (financeOpts.length > 0) ? financeOpts.map((financeOpt) => {
            return (<div class="col-md-4"><Card   
            deferPeriod={financeOpt.deferPeriod}
            deferType = {financeOpt.deferType} 
            totalcost={financeOpt.estimateTotalCost}  
            estimateMonths = {financeOpt.estimateMonths}
            minimumPurchaseAmount = {financeOpt.minimumPurchaseAmount}
            description={financeOpt.merchantCodeDescription}></Card></div>);
        }) : null;
        return (
            <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                <div class='card-deck pt-4'>{cards}</div>
                <div className="loader">
                    <div className="icon"></div>
                </div>
            </div>
            /* let cards = this.props.cards.map((card, index) => {
                 return (<div class="col-md-4"><Card card={card}></Card></div>);
             });
             return (
                 <div class='card-deck'>{cards}</div>
             )*/
        )
    }
}

export default CardItems;
