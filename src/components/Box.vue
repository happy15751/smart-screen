<!--
  功能：盒子容器
  作者：licy
  邮箱：licy@briup.com
  时间：2021年04月17日 21:03:36
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="box_container">
    <!-- 标题 -->
    <div class="title_bar">
      <!-- 顶部选项卡 -->
      <div class="options_box">
        <div class="options">
          <div :class="index == i ? 'current' : ''" v-for="(o, i) in options" :key="o.name" @click="tabOptionHandler(i)">{{ o.label }}</div>
        </div>
      </div>
      <!-- 顶部标题 -->
      <div class="title">
        <span class="title_icon"></span>
        <span>{{ title }}</span>
      </div>
    </div>
    <!-- 描述 -->
    <!-- <slot name="introduce"></slot> -->
    <ul class="introduce" v-if="introduces.length>0">
      <li v-for="introduce in introduces" :key="introduce.label">
        <span class="label">{{introduce.label}} </span>
        <span class="num">{{introduce.value}}</span>
        <span class="unit">{{introduce.unit}}</span>
      </li>
    </ul>
    <!-- 内容 -->
    <div class="box_content" @mouseover="mouseoverHandler" @mouseout="mouseoutHandler">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {
    title: {
      type: [String],
      default: ()=>{
        return ''
      },
    },
    options: {
      type: [Array],
      default: ()=>{
        return [];
      },
    },
    introduces :{
      type:[Array],
      default:()=>{
        return []
      }
    }
  },
  // 组件状态值
  data() {
    return {
      index: 0,
      timmer: null, //计时器
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 点击optiono
    tabOptionHandler(index){
      this.index = index;
      this.$emit('optionChange', this.options[index]);
    },
    mouseoverHandler() {
      this.suspend();
    },
    mouseoutHandler() {
      this.begin();
    },
    begin() {
      
      // 每隔3秒切换一次
      this.timmer = setInterval(() => {
        if (this.index < this.options.length - 1) {
          ++this.index;
        } else {
          this.index = 0;
        }
        this.$emit('optionChange', this.options[this.index]);
      }, 50000);
      // }, 3000000);
    },
    suspend() {
      clearInterval(this.timmer);
    },
  },
  // 以下是生命周期钩子
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    // 先触发一次
    clearInterval(this.timmer);
    this.$emit('optionChange', this.options[this.index]);
    this.begin();
  },
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeUnmount() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  unmounted() {
    clearInterval(this.timmer);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
ul {
  margin:0;padding:0; list-style: none;
}
.box_container {
  height: 100%;
  font-family: TencentSans;
  display: flex;
  flex-direction: column;
  .title_bar {
    height: 30px;
    margin-bottom: 10px;
    // 标题
    .title {
      font-size: 24px;
      align-items: center;
      font-family: TencentSans;
      font-weight: normal;
      background-image: -webkit-linear-gradient(top, #ffffff, #2080cd);
      -webkit-background-clip: text;
      color: #fff !important;
      display: flex;
      .title_icon {
        width: 24px;
        height: 30px;
        background: url('../assets/icons/box_title_icon.png');
        background-size: 24px 30px;
        margin-right:.5em;
        margin-top: 5px;
      }
    }
    .options_box {
      cursor:pointer;
      float: right;
      padding-top: 14px;
      .options {
        height: 20px;
        line-height: 20px;
        display: flex;
        & > div {
          height:34px;
          line-height: 34px;
          font-size: 22px;
          padding:0 10px;
          text-align: center;
          background: linear-gradient(90deg, #2137A9, #19229B);
          margin-right: 5px;
        }
        & > div.current {
          background: linear-gradient(90deg, #0D4BD8, #2385FF);
        }
        
      }
    }
  }
  ul.introduce {
    height: 40px;
    font-size: 20px;
    padding:.5em 0;
    & > li {
      float:left;
      margin-right: .5em;
      .num {
        // color:#00FFFF;
        color:#28E0ED;
        padding:0 1px;
      }
    }
  }
  ul.introduce::after {
    content: "";
    display: block;
    clear: both;
  }
  .box_content {
    flex: 1;
  }
}
</style>