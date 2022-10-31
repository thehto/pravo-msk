<template>
	<header v-bind:class="{ opened: open, active: scrollingDown || scrollingUp}">
		<div class="container">
			<div class="row">
				<div class="col-xxl-3 col-xl-3 col-lg-2 col-md-4 col-sm-6 col-6">
					<nuxt-link to="/" class="logo active">
						<img src="/logo.png">
					</nuxt-link>
				</div>
				<div class="col-md-8 col-sm-6 col-6 toolbar">
					<div class="nav-toogle" v-on:click="navToogle">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="col-xxl-7 col-lg-7 col-md-5 nav-menu">
					<ul class="menu">
						<li>
							<nuxt-link to="/#komu">Кому помогаем?</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/#present">Что предлагаем?</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/#secure">Военнослужащим</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/#actions">Мобилизация</nuxt-link>
						</li>
					</ul>
					<div class="phone menu-phone">
						<base-icon name="solid/phone" class="icon"></base-icon>
						<div class="phone__content">
							<a href="tel:88007751419">8 800 775 14 19</a>
							<small>* Бесплатная консультация</small>
						</div>
					</div>
				</div>
				<div class="col-xxl-2 col-lg-2 col-md-3 btns">
					<div class="phone">
						<base-icon name="solid/phone" class="icon"></base-icon>
						<div class="phone__content">
							<a href="tel:88007751419">8 800 775 14 19</a>
							<small>* Бесплатная консультация</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
//import logo from '~/assets/icons/ui/logo.png?raw';
export default {
	data: () => ({
		scrollingUp: false,
		scrollingDown: false,
		prevScrollpos: 0,
		open: false,
		//logo: logo
	}),
	computed: {
		getMainNavClasses() {
			return {
				"scroll-up": this.scrollingUp,
				"scroll-down": this.scrollingDown,
			};
		},
	},
	methods: {
		navToogle() {
			this.open = !this.open;
		},
		scrollNow() {
			if (process.client) {
				const currentScrollPos = window.pageYOffset;

				if (currentScrollPos == 0) {
					this.scrollingUp = false;
					this.scrollingDown = false;
					return;
				}

				if (currentScrollPos < 100) return; // set offset here

				if (this.prevScrollpos > currentScrollPos) {
					// up
					this.scrollingDown = false;
					this.scrollingUp = true;
				} else {
					// down
					this.scrollingUp = false;
					this.scrollingDown = true;
				}

				this.prevScrollpos = currentScrollPos;
			}
		},
		handleScroll() {
			let doScoll;
			if (process.client) {
				window.onscroll = () => {
					this.open = false;
					clearTimeout(doScoll);
					doScoll = setTimeout(this.scrollNow, 10); // firing less scroll events
				};
			}
		},
		handleScroll2() {
			this.scrollNow();
		},
	},
	created() {
		setTimeout(this.handleScroll, 50);
	},
	mounted() {
		if (process.client) {
			this.prevScrollpos = window.pageYOffset;
		}
	}
	/*beforeMount() {
		window.addEventListener("wheel", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("wheel", this.handleScroll);
	},*/
};
</script>
<style lang="scss" scoped>
header {
	position: fixed;
	top: -81px;
	left: 0%;
	width: 100%;
	z-index: 999;
	//background: rgb(13, 17, 23);
	//background: linear-gradient(to bottom, rgb(13, 17, 23) 20%, rgb(22, 25, 36));
	//background-color: #1f2434;
	//background-color: rgba(15, 19, 33, 1);

	//background-color: #0d1117;
	padding: 35px 0;
	padding-top: 115px;
	transition: 0.1s;
	a:not(.btn) {
		font-weight: 200;
	}
	/*clip-path: polygon(
		50% 0,
		100% 0,
		100% calc(100% - 50px),
		50% 100%,
		0 calc(100% - 50px),
		0 0
	);*/
	/* clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), 0% 100%); */
	//padding-bottom: 60px;
	outline: 0px solid rgba(255, 255, 255, 0.2);
	&:before {
		display: none;
		content: "";
		z-index: -1;
		position: absolute;
		inset: 0px;
		//width: 100%;
		//height: 100%;
		backdrop-filter: blur(2rem);
	}
	.logo {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		max-width: 272px;
		transition: 0.1s;
		img {
			transition: 0.1s;
			width: 100%;
			bottom: -2px;
			//margin-left: -20%;
			//position: absolute;
		}
	}
	.menu {
		width: 100%;
		justify-content: flex-end;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		//min-height: 54px;
		min-height: 100%;
		li {
			margin-right: 30px;
			padding: 0;
			font-size: 18px;
			font-weight: 500;
			a {
				color: rgba(var(--line-color), 1); // 45, 55, 72
				position: relative;
				font-size: 17px;
				font-weight: 500;
				&:hover {
					color: #000;
					text-decoration: none;
					&:before {
						width: 100%;
					}
				}
				&:before {
					content: "";
					width: 0px;
					height: 2px;
					background-color: #E52020;
					//background-image: $gradient-90;
					position: absolute;
					bottom: -6px;
					transition: 0.2s cubic-bezier(0.47, 0.11, 0, 0.96);
				}
			}
		}
	}
	/*&.active {
		padding: 35px 0;
		clip-path: polygon(
			50% 0,
			100% 0,
			100% calc(100% - 0px),
			50% 100%,
			0 calc(100% - 0px),
			0 0
		);
		background: transparent;
	}*/
	.btns {
		display: inline-flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
	}
	.toolbar {
		display: none;
		align-items: center;
		justify-content: flex-end;
	}
	.nav-toogle {
		display: flex;
		width: 18px;
		height: 14px;
		position: relative;
		transform: rotate(0);
		transition: 0.3s ease-in-out;
		position: relative;
		cursor: pointer;
		&:before {
			content: "";
			width: 30px;
			height: 30px;
			display: flex;
			position: absolute;
			top: -8px;
			left: -6px;
		}
		span {
			display: block;
			position: absolute;
			height: 2px;
			width: 100%;
			background: #232323;
			border-radius: 9px;
			opacity: 1;
			left: 0;
			transform: rotate(0);
			transition: 0.2s ease-in-out;
			&:nth-child(1) {
				top: 0;
			}
			&:nth-child(2) {
				top: 6px;
			}
			&:nth-child(3) {
				top: 6px;
			}
			&:nth-child(4) {
				top: 12px;
			}
		}
	}
	&.active {
		outline: 1px solid rgba(0, 0, 0, 0.1);
		outline-offset: 0px;
		padding: 15px 0;
		padding-top: 95px;
		//box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);

		//background-color: rgba(13, 17, 23, 0.65);
		background-color: rgba(255, 255, 255, 0.6);
		&:before {
			display: flex;
		}
		.logo {
			max-width: 220px;
			img {
				width: 100%;
			}
		}
	}
	.phone {
		display: flex;
		flex-direction: row;
		align-items: center;
		&__content {
			display: flex;
			flex-direction: column;
			flex: none;
			a {
				flex: none;
				font-size: $h4-size;
				font-family: $font-default;
				font-weight: 700;
			}
			small {
				margin-top: 3px;
			}
		}
		.icon {
			flex: none;
			width: 32px;
			height: 32px;
			border-radius: 100%;
			margin-right: 10px;
			background-color: $bg-primary;
			display: flex;
			justify-content: center;
			align-items: center;
			:deep(svg) {
				fill: $text-color-btn;
			} 
		}
		&.menu-phone {
			display: none;
		}
	}
}
@media screen and (max-width: 992px) {
	header {
		.logo {
			display: block;
			img {
				width: 140px;
				bottom: -2px;
				//margin-left: -20%;
				//position: absolute;
			}
		}
		.toolbar {
			display: flex;
		}
		.nav-menu {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 999;
			background-color: rgba(13, 17, 23, 0.5);
			background-color: rgba(250,250,250,0.9);
			border-left: 1px solid #eee;
			backdrop-filter: blur(10px);
			transition: 0.2s;
			height: 100vh;
			box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.3);
			transition: 0.2s;
			width: 0;
			min-width: 0;
			padding: 0;
		}
		.btns {
			display: none;
		}
		&.opened {
			.nav-menu {
				width: 80%;
				min-width: 220px;
				padding: 0 15px;
				.menu {
					display: flex;
					flex-direction: column;
					li {
						margin: 10px 0;
						a {
							font-size: 20px;
						}
					}
				}
			}
			.nav-toogle {
				position: fixed;
				z-index: 1001;
				span {
					//background-color: #fff;
					&:nth-child(1) {
						top: 18px;
						width: 0;
						left: 50%;
					}
					&:nth-child(2) {
						transform: rotate(45deg);
					}
					&:nth-child(3) {
						transform: rotate(-45deg);
					}
					&:nth-child(4) {
						top: 18px;
						width: 0;
						left: 50%;
					}
				}
			}
		}
		&.active + &.opened {
			.nav-toogle {
				top: 42px;
			}
		}
		&:not(.opened) {
			.menu {
				display: none;
			}
			.phone {
				&.menu-phone {
					display: none;
					margin-top: 50px;
				}
			}
		}
		.menu {
			padding-top: 50px;
			min-height: inherit;
		}
		.phone {
			&.menu-phone {
				display: inline-flex;
				margin-top: 50px;
			}
		}
	}
}
@media screen and (max-width: 576px) {
	header {
		outline: 1px solid rgba(255, 255, 255, 0.2);
		outline-offset: 0px;
		padding: 15px 0;
		padding-top: 95px;
		box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
		/*background: linear-gradient(
			to bottom,
			rgba(13, 17, 23, 1) 90%,
			rgba(13, 17, 23, 0.65)
		);*/
		//background-color: rgba(13, 17, 23, 0.65);
		&:before {
			display: flex;
		}
		.logo {
			display: block;
			img {
				width: 100px;
				bottom: -2px;
				//margin-left: -20%;
				//position: absolute;
			}
		}
	}
}
@media screen and (max-width: 1366px) {

}
</style>