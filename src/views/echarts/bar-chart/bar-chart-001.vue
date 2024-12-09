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
            tooltip: {
              /*          trigger: 'item',
                        // formatter: "{b}月 : {c} "
                        formatter: function (a, b, c, d) {
                          return a.value.month + '月总人次:' + a.value.total
                          // 'a:' + JSON.stringify(a)
                        }
                        */
            },
            xAxis: {
              type: 'category',
              name: '年龄段',
              axisLabel: {}
            },
            yAxis: {
              name: '人次'
            },
            series: []
          });
      this.myChart.showLoading();
      setTimeout(() => {
        const data = [
          [
            "年龄段",
            "女",
            "男"
          ],
          [
            "<18",
            13,
            45
          ],
          [
            "18-30",
            54,
            46
          ],
          [
            "31-40",
            33,
            35
          ],
          [
            "41-50",
            23,
            76
          ],
          [
            ">50",
            23,
            16
          ]
        ];
        // 绘制图表
        this.myChart.setOption({
          dataset: {
            source: data
          },
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
          ]
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
