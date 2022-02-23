/*
 * @Author: your name
 * @Date: 2022-02-23 12:03:46
 * @LastEditTime: 2022-02-23 17:38:00
 * @LastEditors: your name
 * @Description:
 * @FilePath: \pure-admin-thin\src\router\modules\remaining.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const remainingRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/login.vue"),
    meta: {
      title: $t("menus.hslogin"),
      showLink: false,
      i18n: true,
      rank: 101
    }
  },
  {
    path: "/redirect",
    name: "redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: $t("menus.hshome"),
      i18n: true,
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("/@/views/redirect.vue")
      }
    ]
  }
];

export default remainingRouter;
