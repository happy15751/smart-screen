<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-16 20:01:40
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Pie } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_pie = ref([]);
    const loadData = async () => {
      data_pie.value = [
        { type: "分类一", value: 27 },
        { type: "分类二", value: 25 },
        { type: "分类三", value: 18 },
        { type: "分类四", value: 15 },
        { type: "分类五", value: 10 },
        { type: "分类六", value: 12 },
        { type: "分类七", value: 19 },
        { type: "其他", value: 5 },
      ];
    };



    //初始化图标
    const initChart = () => {
      plot = new Pie(root.value, {
        data: data_pie.value,
        appendPadding: 10,
        angleField: "value",
        colorField: "type",
        radius: 1,
        // 设置圆弧起始角度
        startAngle: Math.PI,
        endAngle: Math.PI * 1.7,
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
        // 配置别名（鼠标点击展示）
        meta: {
          type: {
            alias: "办理业务",
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
            type: "inner",
            offset: "-8%",
            content: "{name}",
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
        //鼠标点击显示弹出的图标
        tooltip: {
          fields: ["type"],
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

        interactions: [{ type: "element-active" }],
        pieStyle: {
          lineWidth: 0,
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