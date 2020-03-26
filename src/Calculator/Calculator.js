import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    calculateRate = (event) => {
        event.preventDefault();
        let amount = event.target.amount;
        let currencyName = event.target.currencyName;
        this.setState({result: (amount.value / this.props.rate[currencyName.value]).toFixed(2)});
    };

    render = () => {
        return (
            <React.Fragment>
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>
                        <form onSubmit={this.calculateRate}>
                            <input type="number" name='amount'/>
                            <select name="currencyName" id="">
                                {Object.keys(this.props.rate).map(currencyName => (
                                    <option value={currencyName} key={currencyName}>{currencyName}</option>
                                ))}
                            </select>
                            <button type='submit'>Calculate rate</button>
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>USD {this.state.result}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}




