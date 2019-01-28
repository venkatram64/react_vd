

import React from "react";


const Author = (props) => {
	return (
		<div>
			--<em>{props.author.name}</em>
		</div>
	);
};

const OneQuote = (props) => {
	return (
		<li>
			{props.quote.body}
			<Author author={props.quote.author}/>
		</li>
	);
};

const QuoteList = (props) => {
	return (
		<ul>
			{props.quotes.map(quote => <OneQuote quote={quote}/>)}
		</ul>
	);
};

export default QuoteList;