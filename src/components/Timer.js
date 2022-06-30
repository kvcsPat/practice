import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        console.log('constructor called');
    }

    componentDidMount() {
        console.log('component created');

        setInterval(()=> {
            this.incrementTimer()
        },1000)
    }

    componentWillUnmount() {
        console.log('we did something for real');
    }

    componentDidUpdate() {
        console.log('something changed');
    }

    incrementTimer() {
        this.setState({
            time: this.state.time + 1
        })
    }

    render() {
        console.log('rendered');
        return (
            <>
                <div className={(this.state.time >= 5) ? 'blue' : ''}>
                    {this.state.time}
                </div>
                <button onClick={() => {this.incrementTimer()}}>Click me</button>
            </>
        )
    }
}

export default Timer;