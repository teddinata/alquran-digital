import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _97600e8a = () => interopDefault(import('..\\pages\\surat\\_id.vue' /* webpackChunkName: "pages/surat/_id" */))
const _41caca03 = () => interopDefault(import('..\\pages\\tafsir\\_id.vue' /* webpackChunkName: "pages/tafsir/_id" */))
const _72053ade = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/surat/:id?",
    component: _97600e8a,
    name: "surat-id"
  }, {
    path: "/tafsir/:id?",
    component: _41caca03,
    name: "tafsir-id"
  }, {
    path: "/",
    component: _72053ade,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
