import { toRouteType } from "./types";
import { openLink } from "/@/utils/link";
import NProgress from "/@/utils/progress";
import { constantRoutes } from "./modules";
import { split } from "lodash-es";
import { transformI18n } from "/@/plugins/i18n";
import remainingRouter from "./modules/remaining";
import { storageSession } from "/@/utils/storage";
import { Title } from "../../public/serverConfig.json";

import { Router, createRouter } from "vue-router";
import { initRouter, getHistoryMode, handleAliveRoute } from "./utils";

// 创建路由实例
export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: constantRoutes.concat(...remainingRouter),
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

// 路由白名单
const whiteList = ["/login"];

router.beforeEach((to: toRouteType, _from, next) => {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, "add");
    // 页面整体刷新和点击标签页刷新
    if (_from.name === undefined || _from.name === "redirect") {
      handleAliveRoute(newMatched);
    }
  }
  const name = storageSession.getItem("info");
  NProgress.start();
  const externalLink = to?.redirectedFrom?.fullPath;
  if (!externalLink)
    to.matched.some(item => {
      if (!item.meta.title) return "";
      if (Title)
        document.title = `${transformI18n(
          item.meta.title,
          item.meta?.i18n
        )} | ${Title}`;
      else document.title = transformI18n(item.meta.title, item.meta?.i18n);
    });
  if (name) {
    if (_from?.name) {
      // 如果路由包含http 则是超链接 反之是普通路由
      if (externalLink && externalLink.includes("http")) {
        openLink(`http${split(externalLink, "http")[1]}`);
        NProgress.done();
      } else {
        next();
      }
    } else {
      // 刷新
      initRouter(name.username).then((router: Router) => {
        router.push(to.fullPath);
      });
      next();
    }
  } else {
    if (to.path !== "/login") {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next({ path: "/login" });
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
