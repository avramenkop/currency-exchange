import React from "react";

export default class Cookies extends React.Component{

    enableCookies = () => {
        let cookieInfo = document.querySelector('#cookie_info');
        localStorage.setItem('class', 'hidden');
        let cl = localStorage.getItem('class');
        cookieInfo.classList.add(cl);
    };

    render = () => {
        return (
            <div className="container" id="cookie_info">
                <div className="site-content">
                    <div className="well">На нашем сайте мы используем cookie для сбора информации технического
                        характера.<br/>В
                        частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                        местоположения.&nbsp;
                        <button className="btn btn-primary btn-sm" onClick={this.enableCookies}>OK</button>
                    </div>
                </div>
            </div>
        );
    }
}