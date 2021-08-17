<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 19:44:23
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Area } from '@antv/g2plot';
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_area = ref([]);
    const loadData = async () => {
      data_area.value = [
        {
          Date: "2021-01",
          scales: 1298,
        },
        {
          Date: "2021-02",
          scales: 850,
        },
        {
          Date: "2021-03",
          scales: 172,
        },
        {
          Date: "2021-04",
          scales: 818,
        },
        {
          Date: "2021-05",
          scales: 1720,
        },
        {
          Date: "2021-06",
          scales: 182,
        },
        {
          Date: "2021-07",
          scales: 945,
        },
        {
          Date: "2021-08",
          scales: 186,
        },
        {
          Date: "2021-09",
          scales: 2107,
        },
        {
          Date: "2021-10",
          scales: 2140,
        },
        {
          Date: "2021-11",
          scales: 2311,
        },
        {
          Date: "2021-12",
          scales: 1972,
        },
       
      ];
    };
    //初始化图标
    const initChart = () => {
      plot = new Area(root.value, {
        data: data_area.value,
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
        xField: "Date",
        yField: "scales",
        color: "#bed742",
        // 配置别名（鼠标点击展示）
        meta: {
          scales: {
            alias: "业务量",
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
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
        //鼠标点击显示弹出的图标
        tooltip: {
          fields: [ "scales"],
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