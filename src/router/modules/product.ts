/*
 * @Author: your name
 * @Date: 2022-02-23 17:36:52
 * @LastEditTime: 2022-02-23 17:53:37
 * @LastEditors: your name
 * @Description: yedaf
 * @FilePath: \pure-admin-thin\src\router\modules\product.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const productRouter = {
  path: "/product",
  name: "product",
  component: Layout,
  redirect: "/products",
  meta: {
    icon: "link",
    title: $t("menus.product"),
    i18n: true,
    rank: 0
  },
  children: [
    {
      path: "/products",
      name: "products",
      component: () => import("../../views/products/index.vue"),
      meta: {
        title: $t("menus.product"),
        i18n: true
      }
    }
  ]
};

export default productRouter;
