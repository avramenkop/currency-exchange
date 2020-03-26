import React from "react";
import './404.css'


export default class Error404 extends React.Component {
    render = () => {
        return (
            <div className='error404'>
                <h1>Ошибка 404</h1>
                <p>Такой страницы не существует</p>
            </div>
        )
    }
}



