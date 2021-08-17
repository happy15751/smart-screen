<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 20:23:55
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Bar } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_bar = ref([]);
    const loadData = async () => {
      data_bar.value = [
        {
          year: "2013",
          value: 4,
          type: "Lon",
        },
        {
          year: "2014",
          value: 3,
          type: "Lon",
        },
        {
          year: "2015",
          value: 3.5,
          type: "Lon",
        },
        {
          year: "2016",
          value: 8,
          type: "Lon",
        },
        {
          year: "2017",
          value: 4.9,
          type: "Lon",
        },
        {
          year: "2018",
          value: 1,
          type: "Lon",
        },
        {
          year: "2019",
          value: 7,
          type: "Lon",
        },
        {
          year: "2020",
          value: 9,
          type: "Lon",
        },
        {
          year: "2021",
          value: 13,
          type: "Lon",
        },
        {
          year: "2013",
          value: 5,
          type: "Bor",
        },
        {
          year: "2014",
          value: 4,
          type: "Bor",
        },
        {
          year: "2015",
          value: 3.5,
          type: "Bor",
        },
        {
          year: "2016",
          value: 5,
          type: "Bor",
        },
        {
          year: "2017",
          value: 4.9,
          type: "Bor",
        },
        {
          year: "2018",
          value: 6,
          type: "Bor",
        },
        {
          year: "2019",
          value: 7,
          type: "Bor",
        },
        {
          year: "2020",
          value: 9,
          type: "Bor",
        },
        {
          year: "2021",
          value: 23,
          type: "Bor",
        },
      ];
    };
    //初始化图标
    const initChart = () => {
      plot = new Bar(root.value, {
        data: data_bar.value,
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
        isStack: true,
        xField: "value",
        yField: "year",
        seriesField: "type",
        // 配置别名（鼠标点击展示）
        meta: {
          value: {
            alias: "事件",
          },
          
        },
        //x轴的值
        xAxis: {
          label: {
            rotate: -45,
            offset: 25,
            style: {
              fill: "#FFFFFF",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
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
          //底部的导航栏
          label: {
            // 可手动配置 label 数据标签位置
            position: "middle", // 'left', 'middle', 'right'
            // 可配置附加的布局方法
            layout: [
              // 柱形图数据标签位置自动调整
              { type: "interval-adjust-position" },
              // 数据标签防遮挡
              { type: "interval-hide-overlap" },
              // 数据标签文颜色自动调整
              { type: "adjust-color" },
            ],
          },
        },
        //鼠标点击显示弹出的图标
        tooltip: {
          // fields: ["value"],
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