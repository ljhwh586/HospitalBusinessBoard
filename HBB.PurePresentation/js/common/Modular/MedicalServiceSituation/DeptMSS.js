/**
 * Created by liu on 2016/5/4.
 */
import React from 'react';
import { render, findDOMNode } from 'react-dom'
import Globle from "../../../Globle"
import options from "../../../option"
import echarts from "echarts"

var deptMSSOption = {
    title: {
        text: '专科候诊/未就诊人次统计'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
        }
    },
    legend: {
        selectedMode: false,
        x:250,
        data: ['候诊人次', '未就诊人次']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: false },
            dataView: { show: false, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    grid: {
        x: '40',
        y: '30',
        x2: '5',
        y2: '40'



    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['Cosco', 'CMA', 'APL', 'OOCL', 'Wanhai', 'Zim']//科室列表
        }
    ],
    yAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0.1]
        }
    ],
    series: [
        {
            name: '候诊人次',
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    color: 'tomato',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius: 0,
                    label: {
                        show: false, position: 'insideTop'
                    }
                }
            },
            data: [260, 200, 220, 120, 100, 80]//候诊人次列表
        },
        {
            name: '未就诊人次',
            type: 'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderColor: 'tomato',
                    barBorderWidth: 6,
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            for (var i = 0, l = options.defaultoption.xAxis[0].data.length; i < l; i++) {
                                if (options.defaultoption.xAxis[0].data[i] == params.name) {
                                    return options.defaultoption.series[0].data[i] + params.value;
                                }
                            }
                        },
                        textStyle: {
                            color: 'tomato'
                        }
                    }
                }
            },
            data: [40, 80, 50, 80, 80, 70]//就诊人次列表
        }
    ]
};




const DeptMSS = React.createClass({

    componentDidMount:function () {

        const chartDom = this.refs.chart;
        const chart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);

        chart.on('click',function (params) {

            console.log(params);
            //this.props.handleClickTimePoint(params.seriesIndex);
        }.bind(this));

        deptMSSOption.series[0].data.length = 0;
        deptMSSOption.series[1].data.length = 0;
        deptMSSOption.xAxis[0].data.length = 0;
        
        this.props.depts.forEach(function(dept){
            deptMSSOption.xAxis[0].data.push(dept.SpecialistName);
            deptMSSOption.series[0].data.push(dept.JZnums);
            deptMSSOption.series[1].data.push(dept.HZnums - dept.JZnums);

        });
        
        chart.setOption(deptMSSOption);

    },



    componentWillUnmount:function () {

        echarts.dispose(this.refs.chart)
    },
    render:function () {
        return (


            <div>
                <div className="row">
                    <div className="col-md-12" style={{"height":"30px"}}>


                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div ref="chart" className="detail-chart"></div>

                    </div>
                </div>
            </div>
            
        );
    }
    
    
    
});

module.exports=DeptMSS;

