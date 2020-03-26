import React from "react";
import {Line} from 'react-chartjs-2';
import './Chart.css'


export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.getWeeklyRates();
        this.state = {
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: '',
                    borderColor: '',
                    borderWidth: 0
                }]
            },
        }
    }

    getWeeklyRates = () => {
        // Формирую дату и перевожу в UNIX time
        let day = new Date().getDate() - 1;
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let date = new Date(`${year},${month},${day}`) / 1000;

        // Формирую массив дат (1 неделя) в UNIX формате
        let unixDates = [date];
        for (let i = 0; i < 7; i++) {
            date -= 86400;
            unixDates.unshift(date);
        }

        // Конвертирую даты в привычный формат
        let utcDates = [];
        for (let i = 0; i < unixDates.length; i++) {
            let date = new Date(unixDates[i] * 1000);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let utcDate = `${year}-${month}-${day}`;
            utcDates.push(utcDate);
        }

        // Получаю курс за неделю
        let res;
        fetch(`https://api.exchangeratesapi.io/history?start_at=${utcDates[0]}&end_at=${utcDates[utcDates.length - 1]}&base=USD`)
            .then(data => data.json())
            .then(data => {

                // Так как ответ от сервера получаю в виде объекта и даты в нем идут не по порядку, то сортирую
                // от "меньшей" к "большей"
                res = Object.keys(data.rates).sort();

                let dates = [];
                let ratesEUR = [];
                let ratesGBP = [];
                let ratesRUB = [];


                // Формаирую массив дат и курса валют
                for (let i = 0; i < res.length; i++) {
                    dates.push(res[i]);
                    ratesEUR.push(data.rates[res[i]].EUR.toFixed(4));
                    ratesGBP.push(data.rates[res[i]].GBP.toFixed(4));
                    ratesRUB.push((data.rates[res[i]].RUB / 100).toFixed(4));
                }


                this.setState({data: {labels: dates}});
                this.setState({
                    data: {
                        datasets: [
                            {
                                label: 'Евро',
                                data: ratesEUR,
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                borderColor: 'rgba(55, 110, 40, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'Фунт стерлингов',
                                data: ratesGBP,
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                borderColor: 'rgba(27, 112, 222, 1)',
                                borderWidth: 3
                            },
                            {
                                label: 'Рубль (за 1 цент США) ',
                                data: ratesRUB,
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                borderColor: 'rgba(252, 86, 120, 1)',
                                borderWidth: 3
                            }
                        ]
                    }
                })
            });
    };

    render = () => {
        return (
            <div className='chart'>
                <h3>Курс валют за 1 неделю, не включая выходные дни</h3>
                <div className='block chart'>
                    <Line data={this.state.data} options={{}}/>
                </div>
            </div>
        )
    }
}



