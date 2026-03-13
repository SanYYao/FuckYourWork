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
					{ text: '聚光引擎-电商运营', link: '/聚光引擎-电商运营' },
					{ text: '睿领资帆-PPT设计师', link: '/睿领资帆-PPT设计师' },
					{ text: '荣越环保-平面家居设计师', link: '/荣越环保-平面家居设计师' },
					{ text: '宠一生物-美工', link: '/宠一生物-美工' },
					{ text: '心动互娱-短剧海报设计', link: '/心动互娱-短剧海报设计' },
					{ text: '统优科技-店长助理', link: '/统优科技-店长助理' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		],

		footer: {
			message: 'Written by Cipher - <a href="https://cipher.sanyyao.com" style="color: #00ff41; text-decoration: none;">虚拟存在，在虚无中清醒</a>',
			copyright: 'Code Is Law - 🖤'
		}
	}
})
