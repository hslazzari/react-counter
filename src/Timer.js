import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            start: new Date(),
            diff: 0
        }

        const intervalRef = setInterval(() => {
            if(Number(this.props.limit) === this.state.diff) {
                clearInterval(intervalRef);
                return;
            }
            this.setState({
                diff: Math.floor(((new Date()) - this.state.start) / 1000)
            })
        }, 100)
    }

    

    printDiff() {
        const result = this.props.limit - this.state.diff;

        const toStringFormat = (n) => n.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        })

        const hh = Math.floor(result / 3600);
        const mm = Math.floor(result / 60);
        const ss = result - hh * 3600 - mm * 60;

        return `${toStringFormat(hh)}:${toStringFormat(mm)}:${toStringFormat(ss)}`
    }

    render() {
      return <h1>{this.printDiff()}</h1>;
    }
  }

  export default Timer;