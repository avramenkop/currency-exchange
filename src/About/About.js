import React from "react";
import './About.css'

export default class About extends React.Component {
    render = () => {
        return (
            <div className="about">
                <div className="name">Pavel Avramenko</div>
                <div className="contacts">
                    <ul>
                        <li>Phone: +380950135495</li>
                        <li>Email: p.a.avramenko@gmail.com</li>
                        <li>Location: Kyiv, Ukraine</li>
                        <li>Skype: pasha_hp</li>
                        <li>Github: <a href="https://github.com/avramenkop">https://github.com/avramenkop</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}