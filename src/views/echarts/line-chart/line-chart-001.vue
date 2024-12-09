<template>
  <div id="mychart" style="width: 100%;height: 600px">mychart div</div>
</template>

<script>
// 使用 ES Module 导入package
// 也可选择性引用
// https://echarts.apache.org/v4/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts
import * as echarts from 'echarts';

export default {
  data () {
    return {};
  },
  mounted(){
    try {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('mychart'));

      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }catch(err){
      console.log(err);
    }
  },
  methods: {}
};
</script>
