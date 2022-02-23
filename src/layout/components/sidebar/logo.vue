<!--
 * @Author: your name
 * @Date: 2022-02-23 12:03:46
 * @LastEditTime: 2022-02-23 16:43:16
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \pure-admin-thin\src\layout\components\sidebar\logo.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="sidebar-logo-container" :class="{ collapse: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <FontIcon
          icon="team-iconlogo"
          svg
          style="width: 35px; height: 35px"
        ></FontIcon>
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        to="/"
      >
        <FontIcon
          icon="team-iconlogo"
          svg
          style="width: 35px; height: 35px"
        ></FontIcon>
        <span class="sidebar-title">{{ title }}</span>
      </router-link>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from "vue";
const props = defineProps({
  collapse: Boolean
});

const title =
  getCurrentInstance().appContext.config.globalProperties.$config?.Title;
</script>
<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;

    .sidebar-title {
      color: #1890ff;
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
