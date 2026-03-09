import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "F-Word Your Work",
	description: "Some Works",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					//					{ text: 'Markdown Examples', link: '/markdown-examples' },
					//					{ text: 'Runtime API Examples', link: '/api-examples' },
					{ text: '聚光引擎-电商运营', link: '/聚光引擎-电商运营' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})
