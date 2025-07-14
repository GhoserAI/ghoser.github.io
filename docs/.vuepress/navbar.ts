/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import {defineNavbarConfig} from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
    // {text: 'Home', link: '/'},
    // {text: 'Blog', link: '/blog/'},
    // { text: 'Tags', link: '/blog/tags/' },
    // {text: 'Archives', link: '/blog/archives/'},
    {text: 'Guide', icon: 'icon-park-outline:guide-board', link: '/guide/'},
])

export const zhNavbar = defineNavbarConfig([
    // {text: '首页', link: '/zh/'},
    // {text: '博客', link: '/zh/blog/'},
    // { text: '标签', link: '/zh/blog/tags/' },
    // {text: '归档', link: '/zh/blog/archives/'},
    // {
    //     text: '指南', icon: 'icon-park-outline:guide-board',
    //     items: [{text: '示例', link: '/zh/notes/guide/1.快速开始/'}]
    // },
    {text: '指南', icon: 'icon-park-outline:guide-board', link: '/zh/guide/'},
])

