import React, { Component } from 'react';
import Box from './box';

class ColorBoxes extends Component {
    static defaultProps = {
        maxBoxes: 16
    }
    constructor(props) {
        super(props)


    }

    render() {
        let arr = Array.from({ length: this.props.maxBoxes})
        return (
            <div>
                {
                arr.map(() => (
                        <Box />
                ))}
            </div>

       )
    }
}

export default ColorBoxes;