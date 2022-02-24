/*
 * @Author: your name
 * @Date: 2022-02-23 17:57:55
 * @LastEditTime: 2022-02-23 18:28:24
 * @LastEditors: your name
 * @Description:
 * @FilePath: \local-page\src\utils\storage\responsive.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 响应式storage
import { App } from "vue";
import Storage from "responsive-storage";

export const injectResponsiveStorage = (app: App, config: ServerConfigs) => {
  const configObj = Object.assign(
    {
      // 国际化 默认中文zh
      locale: {
        type: Object,
        default: Storage.getData(undefined, "locale") ?? {
          locale: config.Locale ?? "zh"
        }
      },
      // layout模式以及主题
      layout: {
        type: Object,
        default: Storage.getData(undefined, "layout") ?? {
          layout: config.Layout ?? "horizontal",
          theme: config.Theme ?? "default",
          darkMode: config.DarkMode ?? false,
          sidebarStatus: config.SidebarStatus ?? true,
          epThemeColor: config.EpThemeColor ?? "#409EFF"
        }
      },
      configure: {
        type: Object,
        default: Storage.getData(undefined, "configure") ?? {
          grey: config.Grey ?? false,
          weak: config.Weak ?? false,
          hideTabs: config.HideTabs ?? false,
          showLogo: config.ShowLogo ?? true,
          showModel: config.ShowModel ?? "smart",
          multiTagsCache: config.MultiTagsCache ?? false
        }
      }
    },
    config.MultiTagsCache
      ? {
          // 默认显示首页tag
          tags: {
            type: Array,
            default: Storage.getData(undefined, "tags") ?? [
              {
                path: "/welcome",
                parentPath: "/",
                meta: {
                  title: "menus.hshome",
                  i18n: true,
                  icon: "home-filled"
                }
              }
            ]
          }
        }
      : {}
  );

  app.use(Storage, configObj);
};
