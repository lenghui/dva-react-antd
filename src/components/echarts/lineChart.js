import React from 'react'
import echarts from 'echarts'
// 
// import 'echarts/lib/chart/line';
// 引入提示框和标题组件(非常好用)
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

class LineChart extends React.Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {text: '折线图'},
            tooltip: {},
            xAxis: {
                name: '日期',
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                name: '产量',
                type: 'value'
            },
            series: [{
                name: '产量',
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