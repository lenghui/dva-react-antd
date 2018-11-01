import React from 'react'
import echarts from 'echarts'

class LineChart extends React.Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400, margin: "0 auto" }}></div>
        );
    }

}

export default LineChart;