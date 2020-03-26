import React from "react";
import './Offices.css'

export default class Offices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            office1: {
                address: 'Большая Васильковская, 9',
                tel: '(095)-111-11-11',
                img: '1.jpg'
            },
            office2: {
                address: 'пр. Бажана, 73',
                tel: '(095)-222-22-2',
                img: '2.jpg'
            }
        };
    }

    render = () => {
        return (
            <div className="offices">
                <h2>Пункты обмена</h2>
                {Object.keys(this.state).map(items => (
                    <div className='office' key={items}>
                        <hr/>
                        <p>{this.state[items].address}</p>
                        <p>{this.state[items].tel}</p>
                        <img className='img' src={this.state[items].img} alt='office'/>
                    </div>
                ))}
            </div>
        );
    }
}



