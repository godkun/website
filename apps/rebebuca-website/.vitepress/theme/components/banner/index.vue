<script lang="ts" setup>
import { ref } from 'vue'
import data from '../constants'
</script>

<template>
  <!--顶部导航 -->
  <div class="banner" id="banner">
    <div class="box">
      <div class="left">
        <div class="item-1" style="font-weight:bold;">Rebebuca</div>
        <div class="item-2"> Rust 桌面端 FFMPEG 管理器</div>
        <!-- <a href="http://localhost:3001/guide/introduction.html" target="_blank">
          <div class="item-4">快速开始</div>
        </a> -->
        <a href="https://rebebuca.com/guide/introduction.html" target="_blank" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <div class="item-4">快速开始</div>
        </a>
      </div>
      <!-- <div class="right"></div> -->
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less">

</style>
