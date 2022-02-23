<!--
 * @Author: yedaf
 * @Date: 2022-02-21 14:15:49
 * @LastEditTime: 2022-02-23 16:18:40
 * @LastEditors: your name
 * @Description: fpoter部分组件
-->
<template>
  <div class="footer">
    <div class="container web">
      <el-row class="footer-content">
        <el-col class="item" :span="4">
          <h5>产品</h5>
          <ul>
            <li>
              <span>product1</span>
            </li>
            <li>
              <span>product2</span>
            </li>
          </ul>
        </el-col>
        <el-col class="item" :span="4">
          <h5>公司</h5>
          <ul>
            <li>
              <router-link to="/about-us">关于我们</router-link>
            </li>
            <li>
              <router-link to="/help">联系我们</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
      <div class="footer-link">
        <span>this is a link</span>
      </div>

      <div class="footer-copyright">
        <p class="copyright">© Copyright yedaf 2022. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.footer {
  background-color: #333;
  padding-top: 30px;
  .web {
    margin: 0 auto;
    display: block;
    .footer-content {
      color: #fff;
      padding: 20px 5px;
      .item {
        float: left;
        h5 {
          margin-bottom: 20px;
          font-size: 16px;
        }
        ul {
          padding-left: 0;
          li {
            margin-bottom: 10px;
            a {
              color: #aaa !important;
            }
          }
        }
        span {
          color: #aaa;
        }
      }
      .media {
        .international {
          float: right;
          padding: 5px 10px;
          width: 140px;
          text-align: center;
          border: 1px solid #fff;
          box-sizing: border-box;
        }
      }
    }
    .footer-link {
      color: #aaa;
      a {
        padding-right: 10px;
        color: #aaa;
        &:hover {
          color: #fff;
        }
      }
    }
    .footer-copyright {
      margin-top: 20px;
      color: #aaa;
      font-size: 12px;
      .copyright {
        text-align: center;
        padding-bottom: 15px;
        .beian {
          color: #aaa;
        }
      }
    }
  }
  .mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    display: none;
  }
}
</style>
