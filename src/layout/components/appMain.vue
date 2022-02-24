<!--
 * @Author: your name
 * @Date: 2022-02-23 12:03:46
 * @LastEditTime: 2022-02-23 18:12:30
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \local-page\src\layout\components\appMain.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <section
    :class="[props.fixedHeader ? 'app-main' : 'app-main-nofixed-header']"
    :style="getSectionStyle"
  >
    <router-view>
      <template #default="{ Component, route }">
        <el-scrollbar v-if="props.fixedHeader">
          <el-backtop title="回到顶部" target=".app-main .el-scrollbar__wrap">
            <backTop />
          </el-backtop>
          <transitionMain :route="route">
            <keep-alive
              v-if="keepAlive"
              :include="usePermissionStoreHook().cachePageList"
            >
              <component
                :is="Component"
                :key="route.fullPath"
                class="main-content"
              />
            </keep-alive>
            <component
              v-else
              :is="Component"
              :key="route.fullPath"
              class="main-content"
            />
          </transitionMain>
        </el-scrollbar>
        <div v-else>
          <transitionMain :route="route">
            <keep-alive
              v-if="keepAlive"
              :include="usePermissionStoreHook().cachePageList"
            >
              <component
                :is="Component"
                :key="route.fullPath"
                class="main-content"
              />
            </keep-alive>
            <component
              v-else
              :is="Component"
              :key="route.fullPath"
              class="main-content"
            />
          </transitionMain>
        </div>
      </template>
    </router-view>
  </section>
</template>
<script setup lang="ts">
import {
  h,
  ref,
  computed,
  Transition,
  defineComponent,
  getCurrentInstance
} from "vue";
import { RouterView } from "vue-router";
import backTop from "/@/assets/svg/back_top.svg?component";
import { usePermissionStoreHook } from "/@/store/modules/permission";
const props = defineProps({
  fixedHeader: Boolean
});
const keepAlive: Boolean = ref(
  getCurrentInstance().appContext.config.globalProperties.$config?.KeepAlive
);
const instance =
  getCurrentInstance().appContext.app.config.globalProperties.$storage;

const transitions = computed(() => {
  return route => {
    return route.meta.transition;
  };
});

const hideTabs = computed(() => {
  return instance?.configure.hideTabs;
});

const layout = computed(() => {
  return instance?.layout.layout === "horizontal";
});

const getSectionStyle = computed(() => {
  return [
    hideTabs.value && layout ? "padding-top: 48px;" : "",
    !hideTabs.value && layout ? "padding-top: 60px;" : "",
    hideTabs.value && !layout.value ? "padding-top: 48px" : "",
    !hideTabs.value && !layout.value ? "padding-top: 60px;" : "",
    props.fixedHeader ? "" : "padding-top: 0;"
  ];
});

const transitionMain = defineComponent({
  render() {
    return h(
      Transition,
      {
        name:
          transitions.value(this.route) &&
          this.route.meta.transition.enterTransition
            ? "pure-classes-transition"
            : (transitions.value(this.route) &&
                this.route.meta.transition.name) ||
              "fade-transform",
        enterActiveClass:
          transitions.value(this.route) &&
          `animate__animated ${this.route.meta.transition.enterTransition}`,
        leaveActiveClass:
          transitions.value(this.route) &&
          `animate__animated ${this.route.meta.transition.leaveTransition}`,
        mode: "out-in",
        appear: true
      },
      {
        default: () => [this.$slots.default()]
      }
    );
  },
  props: {
    route: {
      type: undefined,
      required: true
    }
  }
});
</script>

<style scoped>
.app-main {
  width: 100%;
  /* height: 100vh; */
  height: calc(100vh - 259px);
  position: relative;
  overflow-x: hidden;
}

.app-main-nofixed-header {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.main-content {
  margin: 24px;
}
</style>
