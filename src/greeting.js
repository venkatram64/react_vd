import React, {Component} from 'react';

class MyGreeting extends Component {

    //reactJs Life cycle methods
    componentWillMount(){
        console.log("In componentWillMount!!!");
    }

    componentDidMount(){
        console.log("In componentDidMount!!!");
    }

    componentWillReceiveProps(nextProps){
        console.log("In componentWillReceiveProps!!! ", nextProps);
    }

    shouldComponentUpdate(){
        console.log("In shouldComponentUpdate!!!");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("In componentWillUpdate!!!");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("In componentDidUpdate!!!");
    }

    componentWillUnmount(){
        console.log("In componentWillUnMount!!!");
    }

    render(){
        return (<div> {this.props.greeting} </div>);
    }
}

export default class Greeting extends Component {

    constructor(props){
        super(props);

        this.state = {greeting: "Hello"};
        setTimeout(() =>{
            this.setState({greeting: "Hi"});
        }, 5000)
    }

    render(){
        console.log("In Greeting render...");
        return (
            <div className="Greeting">
              <MyGreeting greeting={this.state.greeting}/>  
            </div>
        );
    }
    
}
