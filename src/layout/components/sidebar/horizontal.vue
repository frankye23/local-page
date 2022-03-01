<template>
  <div class="horizontal-header">
    <div class="horizontal-header-left" @click="backHome">
      <img
        src="../../../assets/logo.png"
        alt=""
        style="height: 35px; width: 35px"
      />
      <h4 class="ml-4">Apollo</h4>
    </div>
    <el-menu
      ref="menu"
      class="horizontal-header-menu"
      mode="horizontal"
      :default-active="route.path"
      router
      @select="indexPath => menuSelect(indexPath, routers)"
    >
      <sidebar-item
        v-for="route in usePermissionStoreHook().wholeMenus"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
    <div class="horizontal-header-right">
      <!-- 国际化 -->
      <el-dropdown id="header-translation" trigger="click">
        <globalization />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              @click="translationCh"
              ><el-icon class="check-zh" v-show="locale === 'zh'"
                ><IconifyIconOffline icon="check" /></el-icon
              >简体中文</el-dropdown-item
            >
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              @click="translationEn"
              ><el-icon class="check-en" v-show="locale === 'en'"
                ><IconifyIconOffline icon="check" /></el-icon
              >English</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 退出登陆 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="avatars" />
          <p>{{ usename }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="logout">
              <IconifyIconOffline
                icon="logout-circle-r-line"
                style="margin: 5px"
              />
              {{ $t("buttons.hsLoginOut") }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useNav } from "../../hooks/nav";
import { templateRef } from "@vueuse/core";
import SidebarItem from "./sidebarItem.vue";
import avatars from "/@/assets/avatars.jpg";
import { useRoute, useRouter } from "vue-router";
import { watch, nextTick, onMounted, getCurrentInstance } from "vue";
import { usePermissionStoreHook } from "/@/store/modules/permission";
import globalization from "/@/assets/svg/globalization.svg?component";

const route = useRoute();
const { locale } = useI18n();
const routers = useRouter().options.routes;
const menuRef = templateRef<ElRef | null>("menu", null);
const instance =
  getCurrentInstance().appContext.config.globalProperties.$storage;

const {
  logout,
  backHome,
  changeTitle,
  handleResize,
  menuSelect,
  usename,
  getDropdownItemStyle
} = useNav();

onMounted(() => {
  nextTick(() => {
    handleResize(menuRef.value);
  });
});

watch(
  () => locale.value,
  () => {
    changeTitle(route.meta);
  }
);

function translationCh() {
  instance.locale = { locale: "zh" };
  locale.value = "zh";
  handleResize(menuRef.value);
}

function translationEn() {
  instance.locale = { locale: "en" };
  locale.value = "en";
  handleResize(menuRef.value);
}
</script>
<style lang="scss" scoped>
.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}

.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
