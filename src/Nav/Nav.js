import React from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            '/': 'Главная',
            '/offices': 'Пункты обмена',
            '/about': 'О нас'
        }
    }

    render = () => {
        return (
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {Object.keys(this.state).map( (link) => <li key={link}><NavLink to={link}>{this.state[link]}</NavLink></li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}




