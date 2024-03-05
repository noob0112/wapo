/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
  typography: {
    // default: {
    //   css: {
    //     pre: false,
    //     code: false,
    //     "pre code": false,
    //     "code::before": false,
    //     "code::after": false,
    //   },
    // },
  },
}
