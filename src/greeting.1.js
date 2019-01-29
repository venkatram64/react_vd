import React, {Component} from 'react';

class MyGreeting extends Component {

    //reactJs Life cycle methods
    componentWillMount(){
        console.log("In componentWillMount!!!");
    }

    componentDidMount(){
        console.log("In componentDidMount!!!");
    }

    componentWillReceiveProps(){
        console.log("In componentWillReceiveProps!!!");
    }

    shouldComponentUpdate(){
        console.log("In shouldComponentUpdate!!!");
        return true;
    }

    componentWillUpdate(){
        console.log("In componentWillUpdate!!!");
    }

    componentDidUpdate(){
        console.log("In componentDidUpdate!!!");
    }

    componentWillUnmount(){
        console.log("In componentWillUnMount!!!");
    }

    render(){
        return (<div> Hello </div>);
    }
}

export default class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {showGreeting:true};
        setTimeout(() =>{
            this.setState({showGreeting: false});
        }, 5000)
    }

    render(){
        console.log("In Greeting render...");
        return (
            <div className="Greeting">
              {this.state.showGreeting && <MyGreeting />}  
            </div>
        );
    }
    
}
