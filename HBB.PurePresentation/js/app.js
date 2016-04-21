/**
 * Created by liu on 2016/4/13.
 */

import "../lib/bootstrap/css/bootstrap.min.css"
import "../css/layout.css"

import React from 'react';
import { render, findDOMNode } from 'react-dom'

//import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'


import LeftNav from "../js/common/component/LeftNav"
import Clock from "../js/common/component/Clock"
import UserControl from "../js/common/component/UserControl"
var App = React.createClass({

    handleQuit:function () {
        localStorage.setItem('login', 'false')
        this.props.history.replaceState(null, '/Login');
    },


    render:function () {
        return (
            <div className="container-fluid">
                <div className="row">



                    <div className="leftNavigation col-md-2 col-sm-2 col-xs-2">

                        <img className="img-responsive center-block navsymbol-position"  src="./img/Home/logo.png" />

                        <LeftNav />

                        <img className="img-responsive center-block" src="./img/Home/beta.png" width="120" height="40" />
                        <img className="img-responsive center-block lenovo" src="./img/Home/lenovo.png" />
                    </div>


                    <div className="col-md-10 col-sm-10 col-xs-10 col-md-offset-2">

                        <div id="div_header" className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <Clock />
                            </div>


                            <div className="col-md-4 col-sm-4 col-xs-4 userzone" >

                                <UserControl handleQuit={this.handleQuit} />

                            </div>

                            <div className="col-md-2"></div>
                        </div>


                        <div className="row reportRow">
                            <div className="col-md-10 col-sm-10 col-xs-10 rightcontainer">
                                {this.props.children}
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-2">
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>


        );
    }
});

module.exports=App;