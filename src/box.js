import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: this.changeColor(),
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor() {
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

        this.setState({ color: randomColor })

        return randomColor;
    }

    render () {
        return (
            <div onClick={this.changeColor} className='Box' style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}

export default Box;