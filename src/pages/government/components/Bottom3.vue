<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 20:22:50
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { DualAxes } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_line = ref([]);
    const loadData = async () => {
      data_line.value = [
        { year: "1991", value: 3, count: 10 },
        { year: "1992", value: 4, count: 4 },
        { year: "1993", value: 3.5, count: 5 },
        { year: "1994", value: 5, count: 5 },
        { year: "1995", value: 4.9, count: 4.9 },
        { year: "1996", value: 6, count: 35 },
        { year: "1997", value: 7, count: 7 },
        { year: "1998", value: 9, count: 1 },
        { year: "1999", value: 13, count: 20 },
      ];
    };
    //初始化图标
    const initChart = () => {
      plot = new DualAxes(root.value, {
        // data: data_line.value,
        data: [data_line.value, data_line.value],
        legend: {
          position: "top-right",
          itemName: {
            style: {
              fill: "#FFFFFF",
              fontFamily: "TencentSans",
              fontSize: 14,
            },
          },
        },
        xField: "year",
        yField: ["value", "count"],
        geometryOptions: [
          {
            geometry: "line",
            color: "#5B8FF9",
          },
          {
            geometry: "line",
            color: "#5AD8A6",
          },
        ],
        // 配置别名（鼠标点击展示）
        // meta: {
        //   scales: {
        //     alias: "事件",
        //   },
        // },
        //x轴的值
        // xAxis: {
        //   label: {
        //     rotate: -45,
        //     offset: 25,
        //     style: {
        //       fill: "#FFFFFF",
        //       fontFamily: "TencentSans",
        //       fontSize: 16,
        //     },
        //   },
        // },
        //y州的数据
        yAxis: {
          grid: {
            line: {
              style: {
                lineDash: [2, 3],
                strokeOpacity: 0.2,
              },
            },
          },
          
        },
        //底部的导航栏
        // label: {
        //   style: {
        //     fill: "white",
        //     fontFamily: "TencentSans",
        //     fontSize: 16,
        //   },
        // },
        //鼠标点击显示弹出的图标
        tooltip: {
          
          domStyles: {
            "g2-tooltip": {
              // 背景框样式
              padding: "10px",
              background: "rgba(47, 6, 170, 0.8)",
              border: "1px solid #00FFFF",
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "2em",
              fontFamily: "TencentSans",
            },
          },
        },
      });
      plot.render();
    };

    onMounted(async () => {
      await loadData();
      initChart();
    });

    onUnmounted(() => {
      if (plot != null) {
        plot.destroy();
      }
    });

    return {
      root,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
</style>