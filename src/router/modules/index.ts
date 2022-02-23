/*
 * @Author: your name
 * @Date: 2022-02-23 12:03:46
 * @LastEditTime: 2022-02-23 17:45:27
 * @LastEditors: your name
 * @Description:
 * @FilePath: \pure-admin-thin\src\router\modules\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 静态路由
import homeRouter from "./home";
// import errorRouter from "./error";
import externalLink from "./externalLink";
import remainingRouter from "./remaining";
import { RouteRecordRaw, RouteComponent } from "vue-router";

import {
  ascending,
  formatTwoStageRoutes,
  formatFlatteningRoutes
} from "../utils";
import { buildHierarchyTree } from "/@/utils/tree";
import productRouter from "./product";

// 原始静态路由（未做任何处理）
const routes = [homeRouter, externalLink, productRouter];

// 导出处理后的静态路由（三级及以上的路由全部拍成二级）
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
);

// 用于渲染菜单，保持原始层级
export const constantMenus: Array<RouteComponent> = ascending(routes).concat(
  ...remainingRouter
);
