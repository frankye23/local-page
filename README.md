<!--
 * @Author: yedaf
 * @Date: 2022-02-22 10:45:27
 * @LastEditTime: 2022-02-23 18:07:18
 * @LastEditors: yedaf
 * @Description: readme 文档
 * @FilePath: \local-page\README.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

# Vue 3 + Typescript + Vite

I use official template Vue 3 + Typescript to build .The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Other techs

element-plus + vue-router + vuex + vue-i18n

## The template I use in this project

[vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Getting started

```bash
# clone the project
git clone https://github.com/frankye23/home-page.git

# install dependencies
pnpm install

### install one package
pnpm add ''

# serve with hot reload at localhost:8086
pnpm dev
```

This will automatically open http://192.168.126.1:8848/.
