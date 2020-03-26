import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rate from "../Rate/Rate";
import Offices from "../Offices/Offices";
import About from "../About/About";
import Error404 from "../Error404/404";
import Cookies from "../Cookies/Cookies";
import './App.css';


export default class App extends React.Component {
    render = () => {
        return (
            <React.Fragment>
                <Header/>
                <div className="container" id='container'>
                    <main>
                        <Switch>
                            <Route exact path='/' component={Rate}/>
                            <Route path='/offices' component={Offices}/>
                            <Route path='/about' component={About}/>
                            <Route component={Error404}/>
                        </Switch>
                    </main>
                </div>
                <Cookies/>
                <Footer/>
            </React.Fragment>
        )
    }
}




