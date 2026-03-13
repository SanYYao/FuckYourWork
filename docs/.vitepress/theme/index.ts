import { h } from 'vue'
import Theme from 'vitepress/theme'
import type { Theme as ThemeType } from 'vitepress'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout)
  }
} satisfies ThemeType
