/*
 * @Author: your name
 * @Date: 2022-02-23 12:03:46
 * @LastEditTime: 2022-03-01 14:04:54
 * @LastEditors: your name
 * @Description:
 * @FilePath: \local-page\src\router\modules\externalLink.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const externalLink = {
  path: "/external",
  name: "external",
  component: Layout,
  meta: {
    icon: "link",
    title: $t("menus.externalLink"),
    i18n: true,
    rank: 190
  },
  children: [
    {
      path: "https://www.baidu.com",
      meta: {
        title: $t("menus.help"),
        i18n: true,
        rank: 191
      }
    }
  ]
};

export default externalLink;
