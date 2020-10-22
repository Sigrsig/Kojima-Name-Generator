import React, {Component} from 'react';

class NameNum extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count: "d6",
          cond: ""
        }
    }

    rollFour() {
        this.setState({
            count: this.state.count = Math.floor(Math.random()*6)+1
        });  
        if (this.state.count == 6) {
          this.setState({
            cond: this.state.cond = "You have 1 name + 6 other alternate names."
          });
        }
        else {
          this.setState({
            cond: this.state.cond = "You have 1 name."
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

export default NameNum;