<!--
 * @Author: your name
 * @Date: 2021-08-05 10:26:41
 * @LastEditTime: 2021-08-17 09:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dashboard\src\pages\government\components\Bottom1.vue
-->
<!--
  功能 左侧第一个图形
  作者：licy
  邮箱：licy@briup.com
  时间：2021年05月5日 20:21:48
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div ref="root" style="height: 95%"></div>
</template>

<script>
import { Gauge } from "@antv/g2plot";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  // 组件名称
  name: "demo",
  // 组件状态值
  setup() {
    const root = ref(null);
    let plot = null;

    let data_column = ref([]);
    const loadData = async () => {
      data_column.value = [];
    };

    const initChart = () => {
      plot = new Gauge(root.value, {
        data: data_column.value,
        percent: 0.75,
        type: "meter",
        innerRadius: 0.75,
        range: {
          ticks: [0, 1 / 3, 2 / 3, 1],
          color: ["#F4664A", "#FAAD14", "#30BF78"],
        },
        indicator: {
          pointer: {
            style: {
              stroke: "#D0D0D0",
            },
          },
          pin: {
            style: {
              stroke: "#D0D0D0",
            },
          },
        },
        //百分比显示
        statistic: {
          content: {
            style: {
              fontSize: "18px",
              lineHeight: "20px",
              color:'#FFFFFF',
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
