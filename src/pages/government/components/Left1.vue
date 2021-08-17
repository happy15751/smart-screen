<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 19:06:46
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Line } from "@antv/g2plot";
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
        {
          Date: "2010-01",
          scales: 1998,
        },
        {
          Date: "2010-02",
          scales: 1850,
        },
        {
          Date: "2010-03",
          scales: 1720,
        },
        {
          Date: "2010-04",
          scales: 1818,
        },
        {
          Date: "2010-05",
          scales: 1920,
        },
        {
          Date: "2010-06",
          scales: 1802,
        },
        {
          Date: "2010-07",
          scales: 1945,
        },
        {
          Date: "2010-08",
          scales: 1856,
        },
        {
          Date: "2010-09",
          scales: 2107,
        },
        {
          Date: "2010-10",
          scales: 2140,
        },
        {
          Date: "2010-11",
          scales: 2311,
        },
        {
          Date: "2010-12",
          scales: 1972,
        },
        {
          Date: "2011-01",
          scales: 1760,
        },
        {
          Date: "2011-02",
          scales: 1824,
        },
        {
          Date: "2011-03",
          scales: 1801,
        },
        {
          Date: "2011-04",
          scales: 2001,
        },
        {
          Date: "2011-05",
          scales: 1640,
        },
        {
          Date: "2011-06",
          scales: 1502,
        },
        {
          Date: "2011-07",
          scales: 1621,
        },
        {
          Date: "2011-08",
          scales: 1480,
        },
        {
          Date: "2011-09",
          scales: 1549,
        },
        {
          Date: "2011-10",
          scales: 1390,
        },
        {
          Date: "2011-11",
          scales: 1325,
        },
        {
          Date: "2011-12",
          scales: 1250,
        },
        {
          Date: "2012-01",
          scales: 1394,
        },
        {
          Date: "2012-02",
          scales: 1406,
        },
        {
          Date: "2012-03",
          scales: 1578,
        },
        {
          Date: "2012-04",
          scales: 1465,
        },
        {
          Date: "2012-05",
          scales: 1689,
        },
        {
          Date: "2012-06",
          scales: 1755,
        },
        {
          Date: "2012-07",
          scales: 1495,
        },
        {
          Date: "2012-08",
          scales: 1508,
        },
        {
          Date: "2012-09",
          scales: 1433,
        },
        {
          Date: "2012-10",
          scales: 1344,
        },
        {
          Date: "2012-11",
          scales: 1201,
        },
        {
          Date: "2012-12",
          scales: 1065,
        },
        {
          Date: "2013-01",
          scales: 1255,
        },
        {
          Date: "2013-02",
          scales: 1429,
        },
        {
          Date: "2013-03",
          scales: 1398,
        },
        {
          Date: "2013-04",
          scales: 1678,
        },
        {
          Date: "2013-05",
          scales: 1524,
        },
        {
          Date: "2013-06",
          scales: 1688,
        },
        {
          Date: "2013-07",
          scales: 1500,
        },
        {
          Date: "2013-08",
          scales: 1670,
        },
        {
          Date: "2013-09",
          scales: 1734,
        },
        {
          Date: "2013-10",
          scales: 1699,
        },
        {
          Date: "2013-11",
          scales: 1508,
        },
        {
          Date: "2013-12",
          scales: 1680,
        },
        {
          Date: "2014-01",
          scales: 1750,
        },
        {
          Date: "2014-02",
          scales: 1602,
        },
        {
          Date: "2014-03",
          scales: 1834,
        },
        {
          Date: "2014-04",
          scales: 1722,
        },
        {
          Date: "2014-05",
          scales: 1430,
        },
        {
          Date: "2014-06",
          scales: 1280,
        },
        {
          Date: "2014-07",
          scales: 1367,
        },
        {
          Date: "2014-08",
          scales: 1155,
        },
        {
          Date: "2014-09",
          scales: 1289,
        },
        {
          Date: "2014-10",
          scales: 1104,
        },
        {
          Date: "2014-11",
          scales: 1246,
        },
        {
          Date: "2014-12",
          scales: 1098,
        },
        {
          Date: "2015-01",
          scales: 1189,
        },
        {
          Date: "2015-02",
          scales: 1276,
        },
        {
          Date: "2015-03",
          scales: 1033,
        },
        {
          Date: "2015-04",
          scales: 956,
        },
        {
          Date: "2015-05",
          scales: 845,
        },
        {
          Date: "2015-06",
          scales: 1089,
        },
        {
          Date: "2015-07",
          scales: 944,
        },
        {
          Date: "2015-08",
          scales: 1043,
        },
        {
          Date: "2015-09",
          scales: 893,
        },
        {
          Date: "2015-10",
          scales: 840,
        },
        {
          Date: "2015-11",
          scales: 934,
        },
        {
          Date: "2015-12",
          scales: 810,
        },
        {
          Date: "2016-01",
          scales: 782,
        },
        {
          Date: "2016-02",
          scales: 1089,
        },
        {
          Date: "2016-03",
          scales: 745,
        },
        {
          Date: "2016-04",
          scales: 680,
        },
        {
          Date: "2016-05",
          scales: 802,
        },
        {
          Date: "2016-06",
          scales: 697,
        },
        {
          Date: "2016-07",
          scales: 583,
        },
        {
          Date: "2016-08",
          scales: 456,
        },
        {
          Date: "2016-09",
          scales: 524,
        },
        {
          Date: "2016-10",
          scales: 398,
        },
        {
          Date: "2016-11",
          scales: 278,
        },
        {
          Date: "2016-12",
          scales: 195,
        },
        {
          Date: "2017-01",
          scales: 145,
        },
        {
          Date: "2017-02",
          scales: 207,
        },
      ];
    };
    //初始化图标
    const initChart = () => {
      plot = new Line(root.value, {
        data: data_line.value,
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
        color: "l(90) 0:#D1D1FF 1:#7C82EA",
        // 配置别名（鼠标点击展示）
        meta: {
          scales: {
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