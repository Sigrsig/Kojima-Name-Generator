import React, {Component} from 'react';

class DEight extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count: "d8",
          cond: ""
        }
    }

    rollFour() {
        this.setState({
            count: this.state.count = Math.floor(Math.random()*8)+1
        });  
        if (this.state.count <= 5) {
          this.setState({
            cond: this.state.cond = "You do not have this condition."
          });
        }
        else if (this.state.count == 6){
            this.setState({
                cond: this.state.cond = "You're big. Your name must have Big- at the beginning of it."
            });
        }
        else if (this.state.count == 7){
            this.setState({
                cond: this.state.cond = "You are older than you once were. Your name must have Old- at the beginning of it."
            });
          }
        else {
            this.setState({
                cond: this.state.cond = "You are how you currently are. (--add answer from sect 2, num 11 to the beginning of name--)"
            });
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.count}: {this.state.cond}</p>
                <button onClick={() => this.rollFour()}>Roll</button>
            </div>
        );
    }
}

export default DEight;