import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
    
    constructor(props) {
        super(props);
        this.defaultState = {
            height: 156,
            weight: 76,
            bmi: 20.9,
            bmiResult: 'Normal Weight',
            focus: false
        }
        this.state = this.defaultState;
        this.resetForm = this.resetForm.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.calculateBmi = this.calculateBmi.bind(this);
        this.getBmiResult = this.getBmiResult.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    heightChange(e) {
        e.preventDefault();
        this.setState({ 
            height: e.target.value 
        });
    }

    weightChange(e) {
        e.preventDefault();
        this.setState({
            weight: e.target.value
        });
    }

    // heightChange (height) {
    //     this.setState({
    //         height: height
    //     }, this.calculateBmi);
    // }

    // weightChange (weight) {
    //     this.setState({
    //         weight: weight
    //     }, this.calculateBmi);
    // }

    calculateBmi  () {
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(1);
        this.setState({ 
            bmi: bmi, 
            bmiResult: this.getBmiResult(bmi) 
        });
    }

    getBmiResult (bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
        if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
        if (bmi >= 30) return 'Obese';
    }

    onBlur() {
        setTimeout(() => {
            if (this.state.focus) {
                this.setState({
                    focus: false
                });
            }
        },2);
    }
    onFocus() {
        if (!this.state.focus) {
            this.setState({
                focus: true
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.calculateBmi();
    }
    resetForm () {
        this.setState(this.defaultState);
    }
    
    render() {
        return (
        <React.Fragment>
                <div className='calculator'>
                    <h3>BMI Calculator</h3>
                    <div className='bmi-result-container'>
                            <div className='bmi-result-number'>
                                Body Mass Index (BMI) = {this.state.bmi}
                            </div>
                            <div className='bmi-category'>
                                {this.state.bmiResult}
                            </div>
                    </div>

                    <div className='bmi-input'>
                        <div className='input-fields'>
                            <div className='input-group'>
                                <span className='label'>Height (cm)</span>
                                <div className='range-container'>
                                    <input
                                        className='range-input'
                                        value={this.state.height}
                                        type='text'
                                        onChange={this.heightChange}
                                        onBlur={this.onBlur}
                                        onFocus={this.onFocus}
                                        onSubmit={this.handleSubmit} />
                                </div>
                            </div>

                            <div className='input-group'>
                                <span className='label'>Weight (kg)</span>
                                <div className='range-container'>
                                <input
                                    className='range-input'
                                    value={this.state.weight}
                                    type='text'
                                    onChange={this.weightChange}
                                    onBlur={this.onBlur}
                                    onFocus={this.onFocus}
                                    onSubmit={this.handleSubmit} />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='bmi-input'>
                    <button className='button' onClick={this.calculateBmi}> Calculate </button>
                    </div>
                    <div className='bmi-input'>
                        <Button text='Reset' onClick={this.resetForm} />
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default Calculator;