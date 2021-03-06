/**
 * Created by liu on 2016/4/13.
 */
import React from 'react'

var intervalRef;
var Clock = React.createClass({
    getInitialState:function () {
        return {date:'',
                hour:'',
                min:'',
                sec:''
        }
    },
    componentDidMount:function () {
            let monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            let dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            let newDate = new Date();
            newDate.setDate(newDate.getDate());
            let currentDate=
            newDate.getFullYear() + '年' + monthNames[newDate.getMonth()] + newDate.getDate() + '日 ' + dayNames[newDate.getDay()];
        let that = this;
        intervalRef=setInterval(function(){
            let seconds = new Date().getSeconds();
            let minutes = new Date().getMinutes();
            let hours = new Date().getHours();
            that.setState({date:currentDate,
                hour:(hours < 10 ? "0" : "") + hours,
                min:(minutes < 10 ? "0" : "") + minutes,
                sec:(seconds < 10 ? "0" : "") + seconds
            });},1000);
    },
    componentWillUnmount:function () {
        clearInterval(intervalRef);
    },
    render:function () {
        return (
            <div className="left">
                <div className="clock-position">
                    <div id="Date" ref="Date" className="left clock-date">{this.state.date}</div>
                    <ul className="clock left clock-time">
                        <li id="hours" ref="hours">{this.state.hour}</li>
                        <li>:</li>
                        <li id="min" ref="min">{this.state.min}</li>
                        <li>:</li>
                        <li id="sec" ref="sec">{this.state.sec}</li>
                    </ul>
                </div>
            </div>           
        );
    }
});

module.exports=Clock;