import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count: "d4",
          cond: ""
        }
    }

    rollFour() {
        this.setState({
            count: this.state.count = Math.floor(Math.random()*4)+1
        });  
        if (this.state.count == 4) {
          this.setState({
            cond: this.state.cond = "You have this condition. Your last name will include the suffix -man. If your name already has -man at the end of it, I guess you're just going to have -manman at the end of your name."
          });
        }
        else {
          this.setState({
            cond: this.state.cond = "You do not have this condition."
          });
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.count}: {this.state.cond}</p>
                <button class="roll-butt" onClick={() => this.rollFour()}>Roll</button>
            </div>
        );
    }
}

export default Counter;