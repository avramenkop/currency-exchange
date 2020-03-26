import React from 'react';
import './Rate.css';

import Calculator from "../Calculator/Calculator";
import Chart from "../Chart/Chart";

export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.getDailyRates();
        this.state = {
            date: '',
            currencyRate: {},
        };
        this.currency = ['EUR', 'GBP', 'RUB'];
    }

    getDailyRates = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(data => data.json())
            .then(data => {
                this.setState({date: data.date});
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                this.setState({currencyRate: result})
            });
    };

    render = () => {
        return (
            <React.Fragment>
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map((currencyName) => (
                        <div className="block flex-item" key={currencyName}>
                            <div className="currency-name">{currencyName}</div>
                            <div className="currency-in">{this.state.currencyRate[currencyName].toFixed(2)}*</div>
                            <p>*Можно купить за 1 доллар США</p>
                        </div>
                    ))}
                </div>
                <Chart/>
                <Calculator rate={this.state.currencyRate}/>
            </React.Fragment>
        )
    }
}




