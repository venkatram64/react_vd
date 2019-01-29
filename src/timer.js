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
        this.state = {startValue:''};
        this.startTimer = this.startTimer.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    startTimer() {
        //debugger;
        //controlled Components
        this.setState({currentValue:Number(this.state.startValue)})
        setInterval(() =>{
            this.setState(
                {currentValue: this.state.currentValue - 1}
            )
        }, 1000);
    }

    resetTimer(){
        this.setState({currentValue : 150});
    };

    handleInputChange(event){
        this.setState({startValue: event.target.value});
    }

    render(){
        return (
            <div className="Timer">
                <TimerItem currentValue={this.state.currentValue}
                        resetTimerFunction={this.resetTimer}
                />
                <input type="text" value={this.state.startValue} onChange={this.handleInputChange}/>
                <button onClick={this.startTimer}>Start</button>
                
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