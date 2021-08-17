<template>
  <div class="container_government">
    <!-- 顶部 -->
    <div class="header">
      <div class="title">山西农业大学新生报道信息化</div>
    </div>
    <!-- /顶部 -->
    <!-- 内容 -->
    <div class="content">
      <!-- 第一行 -->
      <div class="content_one">
        <!-- 左侧 -->
        <div class="content_one_left">
          <div class="content_one_left_1 chart_box">
            <Box title="实时报道人数">
              <template v-slot:content>
                <Left1/>
              </template>
            </Box>
          </div>
          <div class="content_one_left_2 chart_box">
            <Box title="新生来源">
              <template v-slot:content>
                <Left2/>
              </template>
            </Box>
          </div>
        </div>
        <!-- / 左侧 -->
        <!-- 中间 -->
        <div class="content_one_center">
          <div class="chart_box content_one_center_map">
            <Map/>  
          </div>
        </div>
        <!-- / 中间 -->
        <!-- 右侧 -->
        <div class="content_one_right">
          <div class="content_one_right_1 chart_box">
            <Box title="入住新生数">
              <template v-slot:content>
                <Right1/>
              </template>
            </Box>
          </div>
          <div class="content_one_right_2 chart_box">
            <Box title="院系报道情况">
              <template v-slot:content>
                <Right2/>
              </template>
            </Box>
          </div>
        </div>
        <!-- / 右侧 -->
      </div>
      <!-- /第一行 -->
      <!-- 第二行 -->
      <div class="content_two">
        <div class="content_tow_1 chart_box">
          <Box title="系统性能">
            <template v-slot:content>
              <Bottom1/>
            </template>
          </Box>
        </div>
        <div class="content_tow_2 chart_box">
          <Box title="空气情况">
            <template v-slot:content>
              <Bottom2/>
            </template>
          </Box>
        </div>
        <div class="content_tow_3 chart_box">
          <Box title="男女生出生年月">
            <template v-slot:content>
              <Bottom3/>
            </template>
          </Box>
        </div>
        <div class="content_tow_4 chart_box">
          <Box title="新生男女比">
            <template v-slot:content>
              <Bottom4/>
            </template>
          </Box>
        </div>
      </div>
      <!-- /第二行 -->
    </div>

    <!-- /内容 -->
  </div>
</template>
<script>
import Box from '@/components/Box.vue'
import Map from './components/Map'
import Left1 from './components/Left1'
import Left2 from './components/Left2'
import Right1 from './components/Right1'
import Right2 from './components/Right2'
import Bottom1 from './components/Bottom1'
import Bottom2 from './components/Bottom2'
import Bottom3 from './components/Bottom3'
import Bottom4 from './components/Bottom4'

export default {
  components:{
    Box,
    Map,
    Left1,
    Left2,
    Right1,
    Right2,
    Bottom1,
    Bottom2,
    Bottom3,
    Bottom4
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.container_government {
  div {
    box-sizing: border-box;
  }
  .header {
    height: 200px;
    background: url('../../assets/layout/header.png');
    background-size: 100% 200px;
    .title {
      width: 380px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      font-size: 28px;
    }
  }
  .content {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    .chart_box {
      background:url('../../assets/layout/chart_box_bg.png');
      background-size: 100% 100%;
      margin: 0 .5em .5em .5em;
      padding:.5em;
    }
    .content_one {
      flex: 2;
      display: flex;
      flex-direction: row;
      .content_one_left,
      .content_one_right {
        flex: 1;
        display: flex;
        flex-direction: column;
        & > div {
          flex: 1;
        }
      }
      .content_one_center {
        flex: 2;
        display: flex;
        flex-direction: column;
        & > div {
          background:url('../../assets/layout/chart_center_box_bg.png');
          background-size: 100% 100%;
          flex: 1;
          margin: 0 0 .5em 0;
        }
        .content_one_center_map {
          padding:1em .5em;
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }
    .content_two {
      flex: 1;
      display: flex;
      flex-direction: row;
      & > div {
        flex: 1;
      }
    }
  }
}
</style>