// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.3.3_eslint@8.38.0_typescript@5.0.4/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.3.3_eslint@8.38.0_typescript@5.0.4/node_modules/nuxt/dist/head/runtime/plugins/vueuse-head-polyfill").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.3.3_eslint@8.38.0_typescript@5.0.4/node_modules/nuxt/dist/app/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.3.3_eslint@8.38.0_typescript@5.0.4/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}
// TODO: remove when webstorm has support for augumenting 'vue' directly
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }