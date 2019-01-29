import React, {Component} from 'react';

const TimerItem = ({currentValue, resetTimerFunction}) => {
    return (
        <div className="Timer" onClick={resetTimerFunction}>
            {currentValue}
        </div>
    );
}

export default class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {currentValue: 150};

        setInterval(() =>{
            this.setState(
                {currentValue: this.state.currentValue - 1}
            )
        }, 1000);
        this.resetTimer = this.resetTimer.bind(this);
    }

    resetTimer(){
        this.setState({currentValue : 150});
    };

    render(){
        return (
            <div className="Timer">
                <TimerItem currentValue={this.state.currentValue}
                        resetTimerFunction={this.resetTimer}
                />
                
            </div>
        );
    }

    

    
}

/*render(){
        return (
            <div className="Timer">
                <TimerItem currentValue={this.state.currentValue}/>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        );
    }*/