
<template>
  <div id="mychart" style="width: 100%;height: 600px">mychart div</div>
</template>

<script>
// vue+echarts ① echarts在vue中的使用 https://blog.csdn.net/zujiasheng/article/details/126510924

// 使用 ES Module 导入package
// https://echarts.apache.org/v4/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts
import * as echarts from 'echarts';

// 如果想要全局引入,
// Vue.prototype.$echarts = echarts
// 然后你就可以使用this.$echarts

export default {
  data() {
    return {
      mychart: undefined
    };
  },
  // 不能写在created里面, 不然会在init的时候报错
  mounted() {
    try {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('mychart'));
      // 绘制图表
      this.myChart.setOption(
          {
            toolbox: {
              feature: {
                dataView: {},
                saveAsImage: {
                  pixelRatio: 2
                }
              }
            },
            // 设置鼠标悬浮在折线点上的提示
            tooltip: {
              // trigger on hovering 折线上的点
              trigger: 'item',
              // approach 1
              // formatter: "{b}月 : {c} "

              // approache 2: callback function
              formatter: function (a) {
                return a.value.month + '月总人次: ' + a.value.total;
                // you can check the content of a with:
                // 'a:' + JSON.stringify(a)
              }
            },
            dataset: {
              dimensions: ['month', 'total'],
              source: []
            },
            xAxis: {
              type: 'category',
              name: '月份',
              axisLabel: {
                formatter: function (value, index) {
                  return value + '月';
                }
              }
            },
            yAxis: {
              name: '人次'
            },
            series: [
              {
                type: 'line',
                name: '人次'
              }
            ]
          }
      );
      this.myChart.showLoading();
      setTimeout(() => {
        const data = [
          {
            month: 1,
            total: 123
          },
          {
            month: 2,
            total: 53
          },
          {
            month: 3,
            total: 433
          }
        ];
        // 绘制图表
        this.myChart.setOption({
          dataset: {
            source: data
          }
        });
        this.myChart.hideLoading();
      }, 1000);
    } catch (err) {
      console.log(err);
    }

  },
  methods: {}
};
</script>
