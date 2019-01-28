import React from "react";
import QuoteList from "./quoteList";
import Timer from "./timer";



const quoteData = [
	{body:"Insanity is hereditary. You get it from your children",
		author:{name:"Sam Levenson"}},
	{body:"When nothing is going right, go left",
	    author:{name:"Unknown"}},
	{body:"Be yourself; everyone else is already taken",
		author:{name:"Oscar Wilde"}}
];

export default class App extends React.Component {
	render(){
		return  <div>
					<QuoteList quotes={quoteData}/>
					<Timer startsWith={200}/>
				</div>;
	}

}