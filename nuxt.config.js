export default {
	server: {
		host: '0', // default: localhost
		port: process.env.PORT || 3000
	},
	ssr: false,
	productionSourceMap: false,

	head: {
		title: 'РоссЮрист',
		titleTemplate: '%s | РоссЮрист',
		htmlAttrs: {
			lang: 'ru',
			amp: true
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'РоссЮрист'
			},
			{ name: 'format-detection', content: 'telephone=no' },
			//{ hid: 'robots', name: 'robots', content: 'noindex' },
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'black-translucent'
			},

			{
				hid: "og:title",
				property: "og:title",
				content: "РоссЮрист"
			},
			{
				hid: "og:description",
				property: "og:description",
				content: ""
			},
			{
				hid: "og:type",
				property: "og:type",
				content: ""
			},
			/*{
				hid: "og:image",
				property: "og:image",
				content: "/og-image.png"
			},*/
			{
				hid: "og:url",
				property: "og:url",
				content: "https://pravomsk24.ru"
			},
			{
				hid: "og:locale",
				property: "og:locale",
				content: "ru_RU"
			},


		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: "apple-touch-icon",
				type: "image/png",
				href: "/icons/apple-touch-icon/apple-touch-icon.png" //If Icon is inside @/assets/ folder or available at '/...'
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "57x57",
				href: "/icons/apple-touch-icon/apple-touch-icon-57x57.png" //If Icon is inside @/assets/ folder or available at '/...'
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "72x72",
				href: "/icons/apple-touch-icon/apple-touch-icon-72x72.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "76x76",
				href: "/icons/apple-touch-icon/apple-touch-icon-76x76.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "114x114",
				href: "/icons/apple-touch-icon/apple-touch-icon-114x114.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "120x120",
				href: "/icons/apple-touch-icon/apple-touch-icon-120x120.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "144x144",
				href: "/icons/apple-touch-icon/apple-touch-icon-144x144.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "152x152",
				href: "/icons/apple-touch-icon/apple-touch-icon-152x152.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "180x180",
				href: "/icons/apple-touch-icon/apple-touch-icon-180x180.png"
			},
			{
				rel: "apple-touch-icon",
				type: "image/png",
				sizes: "167x167",
				href: "/icons/apple-touch-icon/apple-touch-icon-167x167.png"
			},

			/*{
				rel: "apple-touch-startup-image",
				href: "/images/launch.png"
			},
			
			<meta name="apple-mobile-web-app-capable" content="yes">*/

		],
	},

	pwa: {
		meta: {
			title: 'РоссЮрист',
			author: 'Seenve',
			favicon: false,
			theme_color: '#ffffff',
		},
		manifest: {
			name: 'РоссЮрист',
			short_name: 'РоссЮрист', //app name
			lang: 'ru',
		},
	},

	loading: {
		color: '#873efe',
		height: '3px',
		continuous: true,
		throttle: 0
	},
	loadingIndicator: {
		name: 'circle',
		color: '#873efe',
		background: 'white'
	},

	styleResources: {
		sass: [],
		scss: [
			'@/assets/scss/_base/_variables.scss',
			'@/assets/scss/_mixins/*.scss',
		],
		less: [],
	},

	css: [
		'@/assets/scss/index.scss',
	],

	plugins: [
		//{ src: '~plugins/owl-carousel.js', ssr: false },
	],

	components: true,

	buildModules: [
		["@nuxtjs/svg"],
		['@nuxtjs/pwa'],
		['@nuxtjs/moment', {

		}]
	],

	svg: {
		vueSvgLoader: {
			// vue-svg-loader options
		},
		svgSpriteLoader: {
			// svg-sprite-loader options
		},
		fileLoader: {
			// file-loader options
		}
	},

	image: {
		//domains: ['nuxtjs.org'],
		screens: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
			//'2xl': 1536
		},
	},

	modules: [
		['@nuxtjs/style-resources'],
		['@nuxtjs/axios'],
		['@nuxt/image'],
	],

	router: {
        //base: './',
        //mode: 'hash',
		scrollBehavior: async (to, from, savedPosition) => {
			if (process.client) {
				if (savedPosition) {
					return savedPosition
				}

				const findEl = async (hash, x) => {
					return document.querySelector(hash) ||
						new Promise((resolve, reject) => {
							if (x > 50) {
								return resolve()
							}
							setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
						})
				}

				if (to.hash) {
					let el = await findEl(to.hash)
					//smoothScrollTo(0, el.offsetTop - 72, 500);
					if ('scrollBehavior' in document.documentElement.style) {
						return window.scrollTo({ top: el.offsetTop-72, behavior: 'smooth' })
					} else {
						return window.scrollTo(0, el.offsetTop-72)
					}
				}
			}
			return { x: 0, y: 0 }
		}

	},

	axios: {
		prefix: '/api/',
		proxy: true,
	},

	proxy: {
		'/api': {
			//target: 'https://pravomsk24.ru',
			target: "/",
			pathRewrite: { '^/api/': '' },
			headers: { 'X-API-KEY': 'apiKey' },
			//logLevel: 'debug',
		},
	},

	build: {
        extend(config, ctx) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /(node_modules)/
            });
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        }
	}
}
