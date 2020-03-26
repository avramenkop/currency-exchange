import React from 'react';
import './Footer.css';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftColumn: {
                '/sitemap/': 'Карта сайта',
                '/sitemaps.xml': 'Google Sitemap',
            },
            rightColumn: {
                '/contact': 'Контакты',
                '/d': 'Гарантии',
                '/s': 'О сервисе',
                '/o': 'Условия возврата',
                '/p': 'Соглашение о использовании сервиса',
            }
        }
    }

    render = () => {
        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite
                                    Level</a></h1>
                                <p> All Rights Reserved</p>

                            </div>
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        {Object.keys(this.state.leftColumn).map(link =>
                                            <li key={link}>
                                                <a href={link} tooltip={this.state.leftColumn[link]}>{this.state.leftColumn[link]}</a>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        {Object.keys(this.state.rightColumn).map(link =>
                                            <li key={link}>
                                                <a href={link} tooltip={this.state.rightColumn[link]}>{this.state.rightColumn[link]}</a>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}




