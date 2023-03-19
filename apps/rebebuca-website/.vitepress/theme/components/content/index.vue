<script lang="ts" setup>
import { UrlEnum } from '@m7s/shared/types'
import { ref } from 'vue'
const active = ref(0)
const list = [
  {
    title: '功能丰富'
  },
  {
    title: '体积轻量'
  },
  {
    title: '跨平台'
  }
]
const url = ref({
  ...UrlEnum
})

function change(index: number) {
  active.value = index
}
</script>

<template>
  <!--顶部导航 -->
  <div class="content">
    <section id="m7s">
      <div class="box">
        <div class="m7s-feature">
          <div class="m7s-tab">
            <div
              class="item"
              @click="change(index)"
              v-for="(item, index) in list"
              :class="active == index ? 'active' : ''"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="m7s-item" v-if="active == 0">
            <div class="left">
              <div class="feature-desc">
                <p>
                  1. 支持软件自动更新
                  <br />
                  2. 支持中英语言切换、暗黑模式主题
                  <br />
                  3. 拥有数据库储存能力，支持数据长期保存
                  <br />
                  4. 基于分组列表 + 分组详情的交互模式，拥有更好的用户体验
                  <br />
                  5. 分组列表支持分组增删改查、分组状态监控
                  <br />
                  6. 分组详情支持 ffmpeg 请求增删改查，并支持对 ffmpeg 执行进程进行停止、重启等操作
                  <br />
                  7. ffmpeg 参数支持可视化配置、输入联想、手动选择、一键复制等操作
                </p>
              </div>
            </div>
            <div class="right">
              <img src="/images/m7s/ui.png" alt="" srcset="" />
            </div>
          </div>
          <div class="m7s-item" v-if="active == 1">
            <div class="left">
              <div class="feature-desc">
                <div class="h1">体积轻量</div>
                <p>
                  在包含 ffmpeg 二进制程序后，安装包只有 30M 不到
                </p>
              </div>
            </div>
            <div class="right">
              <img src="/images/m7s/dmg-size.png" alt="" srcset="" />
            </div>
          </div>
          <div class="m7s-item" v-if="active == 2">
            <div class="left">
              <div class="feature-desc">
                <p>
                  1. 支持 Windows 、 Mac 、 Linux 安装
                  <br>
                  2. 支持 Mac(arm64) 安装
                </p>
              </div>
            </div>
            <div class="right">
              <div class="download">
                <div class="download-item windows">
                  <div class="iconfont icon-windows"></div>
                </div>
                <div class="download-item apple">
                  <div class="iconfont icon-apple"></div>
                </div>
                <div class="download-item linux">
                  <div class="iconfont icon-linux"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
