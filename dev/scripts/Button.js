import React from 'react';

class Button extends React.Component {
    constructor(props) { 
        super(props); 
    }

    render() {
        return (
            <React.Fragment>
            <button className='button' onClick={this.props.onClick}>
                {this.props.text}
            </button>
             </React.Fragment>
        );
    }
}

export default Button;