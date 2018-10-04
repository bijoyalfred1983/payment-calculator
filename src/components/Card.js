import React from 'react';

const Card = (props) => {
	// return (
	// 	<div class="card h-100">
	// 		<div class="card-body">
	// 			<h4 class="card-title" id={props.card.id}>{props.card.title}</h4>
	// 			<h1 class="card-title" id={props.card.id}>$300</h1>
	// 			<div class='text-left'>
	// 				<p class="card-text" id={props.card.id}>{props.card.body}</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
	return (
		<div class="card h-100">
			<div class="card-body">

				<h3 class="card-title justify-content-center" id={null}>Finanace Details</h3>
				
				<h5 class="card-text justify-content-center pt-2" id={null}><span>Payment Option: </span>{props.deferType}</h5>
				<h5 class="card-title" id={null}><span>Estimated Months: </span>{props.estimateMonths}</h5>
				<h5 class="card-title" id={null}><span>Estimated Total Cost: </span>{props.totalcost}<span>$</span></h5>
				<h5 class="card-title" id={null}><span>Min Purchase Amount: </span>{props.minAmt}<span>$</span></h5>
					<p class="card-text pt-2" id={null}>{props.description}</p>
				</div>
		</div>
	)
}

export default Card;
