import React, {Component} from 'react';

export default class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {startsWith: 200};
    }

    render(){
        return (
            <div className="Timer">
                {this.props.startsWith}
            </div>
        );
    }

}