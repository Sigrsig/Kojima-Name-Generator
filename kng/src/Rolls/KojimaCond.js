import React, {Component} from 'react';

class KojimaCond extends Component {

    constructor(props) {
        super(props)

        this.state = {
          count: "d12",
          cond: ""
        }
    }

    rollFour() {
        this.setState({
            count: this.state.count = Math.floor(Math.random()*100)+1
        });  
        if (this.state.count == 69) {
          this.setState({
            cond: this.state.cond = "Oh no. You are Hideo Kojima. Hideo Kojima created you and is also you. You are the man who created himself and there is nothing you can do about it. You're in Kojima's world --your world-- and that's just the breaks, pal. Stop this worksheet now. You're Hideo Kojima. Go do things Hideo Kojima does."
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
                <button onClick={() => this.rollFour()}>Roll</button>
            </div>
        );
    }
}

export default KojimaCond;