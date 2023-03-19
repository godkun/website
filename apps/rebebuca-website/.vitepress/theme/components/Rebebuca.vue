<script setup lang="ts">
import Roles from './Roles.vue'
import Head from './head/index.vue'
import Banner from './banner/index.vue'
import Content from './content/index.vue'
import Footer from './footer/index.vue'
import { UrlEnum } from '@m7s/shared/types'
import { ref, onMounted } from 'vue'
const url = ref({
  ...UrlEnum
})
</script>

<template>
  <div class="app">
    <div class="app-head">
      <Head></Head>
    </div>
    <div class="app-banner">
      <Banner></Banner>
    </div>
    <div class="app-main">
      <Content></Content>
    </div>
    <div class="app-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="less">
.app {
  min-height: 100vh;
  background: linear-gradient(288deg, #080128 0%, #191c4a 48%, #224172 100%);
  &-head {
    display: flex;
    justify-content: center;
  }
  &-main {
    min-height: calc(100vh - 245px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: #fff;
    .main {
      padding: 0 260px;
      margin-top: 104px;

      .section {
        .container {
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .img {
            height: 269px;
          }

          .intro {
            .h1 {
              font-size: 80px;
              font-weight: bold;
              color: #e86024;
            }
            .h2 {
              font-size: 26px;
              font-weight: 400;
              color: #707070;
              .enhance {
                font-size: 40px;
                color: #e86024;
                font-weight: bold;
              }
            }

            .h3 {
              font-size: 28px;
              font-weight: 400;
              color: #282828;
            }
          }
        }

        .more {
          margin-top: 138px;
          width: 100%;
          display: flex;
          justify-content: space-between;

          .item {
            width: 30%;
            position: relative;
            min-height: 400px;
          }

          .header {
            .download {
              display: flex;
              height: 200px;
              justify-content: space-between;
              align-items: center;
              color: #fff;

              .download-item {
                padding: 20px 0px;
                border-radius: 2px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30%;

                .iconfont {
                  font-size: 60px;
                }
              }

              .windows {
                background-color: #0066aa;

                &:hover {
                  background-color: #f2f2f2;
                  color: #0066aa;
                }
              }

              .apple {
                background-color: #a9a9a9;

                &:hover {
                  background-color: #f2f2f2;
                  color: #a9a9a9;
                }
              }

              .linux {
                background-color: #ee4433;

                &:hover {
                  background-color: #f2f2f2;
                  color: #ee4433;
                }
              }
            }

            .download-desc {
              margin-top: 8px;
              color: #707070;
            }
          }

          .go {
            border-radius: 2%;
            position: relative;
            font-size: 12px;
            box-shadow: 0 5px 10px -5px black;

            .language-go {
              padding: 0;
            }

            border-radius: 2%;
            position: relative;
            font-size: 12px;
            box-shadow: 0 5px 10px -5px black;

            pre {
              height: 300px;
              overflow: hidden;
            }

            .language-go {
              padding: 10px;
            }

            svg {
              position: absolute;
              top: 10px;
              left: 10px;
            }
          }

          .bottom {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .title {
              text-align: center;
              font-size: 26px;
              height: 37px;
              font-weight: bold;
              color: #707070;
            }

            .desc {
              margin-top: 8px;
              color: #707070;
            }
          }
        }
      }
    }
  }
}
</style>
