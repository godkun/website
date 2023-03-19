<script setup>
import { ref } from 'vue'
import data from '../constants'
const config = ref(data)
// const config = ref(data.filter(item => item.name !== '不卡系列'))
const showWx = ref(false)
const showZf = ref(false)
</script>
<template>
  <div class="footer" id="footer">
    <div class="box">
      <div class="p1">
        <div class="item" v-for="(item, index) in config" :key="index">
          <div class="title">
            <span v-if="item.url">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">{{
                item.name
              }}</a>
            </span>
            <span v-else>{{ item.name }}</span>
          </div>
          <div class="product" v-for="(j, i) in item.children" :key="i">
            <span>
              <a :href="j.url" rel="noopener noreferrer" target="_blank">{{
                j.name
              }}</a>
            </span>
          </div>
        </div>
        <div class="item support">
          <div class="title">支持我们</div>
          <div class="icon-list">
            <div class="hover" v-if="showWx">
              <img src="/images/m7s/footer/wx-pay.jpg" alt />
            </div>
            <div class="hover" v-if="showZf">
              <img src="/images/m7s/footer/zf-pay.jpg" alt />
            </div>
            <div class="icon" @mouseover="showWx = true" @mouseleave="showWx = false">
              <img v-if="!showWx" src="/images/m7s/footer/wx.png" alt />
              <img v-if="showWx" class="active" src="/images/m7s/footer/wx-active.png" alt />
            </div>
            <div class="icon" @mouseover="showZf = true" @mouseleave="showZf = false">
              <img v-if="!showZf" src="/images/m7s/footer/zf.png" alt />
              <img v-if="showZf" class="active" src="/images/m7s/footer/zf-active.png" alt />
            </div>
          </div>
        </div>
        <div class="item wap">
          <div class="title">进群交流</div>
          <img class="qun" src="/images/m7s/qun.png" alt />
        </div>
      </div>
      <div class="p2">
        <div class="rights">Copyright © M7S 开发团队</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less">
</style>
