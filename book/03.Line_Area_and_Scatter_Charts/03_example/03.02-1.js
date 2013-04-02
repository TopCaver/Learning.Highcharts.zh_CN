//
//面积+虚线 预测图表 示例
//样式见同名png

$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'areaspline',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Population ages 65 and over (% of total)- Japan',
                margin:40,
                align:'right',
                style:{
                    fontFamily:'palatino'
                }

            },
    
            xAxis: {
                labels:{
                    formatter:function(){
                        //'this' keyword is the lable object
                        return this.value;
                    }
                },
                allowDecimals:false,
                lineColor :'#CC2929',
                lineWidth:4,
                tickWidth:0,
                offset:2
            },
            yAxis: {
                opposite:true,
                gridLineWidth:0,
                lineWidth:1,
                title:{
                    text:'(%)',
                    rotation:0,
                    x:10,
                    y:5,
                    align:'high'
                },
            },      
            series: [{
                pointStart:2010,
                showInLegend:false,
                lineColor:'#145252',
                type:'areaspline',
                fillColor:{
                    linearGradient:{
                        x1:0,y1:0,
                        x2:0,y2:1
                    },
                    stops:[[0.0,'#248F8F'],
                           [0.7,'#70DBDB'],
                           [1.0,'#EBFAFA']]
                },
                
                data: [23, 22.8, 22, 24.5, 23.2, 21.5, 25.2, 23.5, 23.3, 22.3, 23.9, 23]
            },{
                     name:'project data',
                     type:'spline',
                     showInLegend:false,
                     lineColor:'#145252',
                     dashStyle:'Dash',
                     data:[[2021,23],[2023,22.8],[2024,22],[2025,28.5]]}
                    ]
        });
    });
    
});
