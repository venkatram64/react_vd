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
        this.state = {};
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        //debugger;
        //working with dom elements
        this.setState({currentValue:Number(this.refs.startInput.value)})
        this.refs.startInput.focus();
        setInterval(() =>{
            this.setState(
                {currentValue: this.state.currentValue - 1}
            )
        }, 1000);
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
                <input type="text" ref="startInput"/>
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