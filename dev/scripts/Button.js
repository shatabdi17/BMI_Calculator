import React from 'react';

class Button extends React.Component {
    constructor(props) { 
        super(props); 
    }

    render() {
        return (
            <React.Fragment>
            <div className='button' onClick={this.props.onClick}>
                {this.props.text}
            </div>
             </React.Fragment>
        );
    }
}

export default Button;