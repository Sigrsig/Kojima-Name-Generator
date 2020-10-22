import React, {Component} from 'react';

class DTwelve extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count: "d12",
          cond: ""
        }
    }

    rollFour() {
        this.setState({
            count: this.state.count = Math.floor(Math.random()*12)+1
        });  
        if (this.state.count == 12) {
          this.setState({
            cond: this.state.cond = "You are a clone of someone else, or you have been brainwashed into becoming a mental doppelganger of someone else. ind someone who has completed this worksheet and replace 50% of your Kojima name with 50% off their Kojima name"
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

export default DTwelve;