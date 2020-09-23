import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return(
            <button 
            id="counter"
            className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-green"
            color={this.props.color}
            onClick={() => this.setState({ count: this.state.count + 1 })}
            onContextMenu={(e) => {
                e.preventDefault();
                this.setState({ count: this.state.count - 1 })}} 
            >
            Count: {this.state.count}
            </button>
        )
    }

}

export default CounterButton;