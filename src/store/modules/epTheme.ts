/*
 * @Author: your name
 * @Date: 2022-02-23 17:57:55
 * @LastEditTime: 2022-03-01 13:55:22
 * @LastEditors: your name
 * @Description:
 * @FilePath: \local-page\src\store\modules\epTheme.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { store } from "/@/store";
import { defineStore } from "pinia";
import { getConfig } from "/@/config";
import { storageLocal } from "/@/utils/storage";

export const useEpThemeStore = defineStore({
  id: "pure-epTheme",
  state: () => ({
    epThemeColor:
      storageLocal.getItem("responsive-layout")?.epThemeColor ??
      getConfig().EpThemeColor,
    epTheme:
      storageLocal.getItem("responsive-layout")?.theme ?? getConfig().Theme
  }),
  getters: {
    getEpThemeColor() {
      return this.epThemeColor;
    }
  },
  actions: {
    setEpThemeColor(newColor) {
      const layout = storageLocal.getItem("responsive-layout");
      this.epTheme = layout?.theme;
      this.epThemeColor = newColor;
      layout.epThemeColor = newColor;
      storageLocal.setItem("responsive-layout", layout);
    }
  }
});

export function useEpThemeStoreHook() {
  return useEpThemeStore(store);
}
