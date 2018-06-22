import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.initialState();

        this.initialState = this.initialState.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.calculateBmi = this.calculateBmi.bind(this);
        this.getBmiResult = this.getBmiResult.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    
    initialState = () => {
        return {
            height: 156,
            weight: 76,
            bmi: 20.9,
            bmiResult: 'Normal Weight',
           // message:'',
            focus:false
        };
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

    calculateBmi = () => {
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(1);
        this.setState({ 
            bmi: bmi, 
            bmiResult: this.getBmiResult(bmi) 
        });
    }

    getBmiResult = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
        if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
        if (bmi >= 30) return 'Obese';
    }

    // calculateBmi = () => {
    //     let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(1);
    //     if (bmi < 18.5) return 'Underweight';
    //     if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight';
    //     if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    //     if (bmi >= 30) return 'Obese';
    //     this.setState({
    //         bmi: bmi,
    //         bmiResult: this.getBmiResult(bmi)
    //     });
    // }

    onBlur() {
        setTimeout(() => {
            if (this.state.focus) {
                this.setState({
                    focus: false
                });
            }
        }, 0);
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
    resetForm = () => {
        this.setState(this.initialState());
    }
    
    render() {
        return (
        <React.Fragment>
            <div>
                Hello
            </div>
        </React.Fragment>
        )
    }
}

export default Calculator;