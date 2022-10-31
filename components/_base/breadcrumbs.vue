<template>
	<section class="breadcrumbs">
        <!--<div class="overlay"></div>-->
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1>{{title}}</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<ul class="breadcrumb">
						<li class="item">
							<nuxt-link :to="'/'" class="title">
								Главная
							</nuxt-link>
						</li>
						<li v-for="(item, i) in items" :key="i" class="item">
							<base-icon class="icon" name="thin/angle-right"></base-icon>
							<nuxt-link :to="item.to" class="title">{{ item.title }}</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
<!--<script>
//import { mapState } from "vuex";
export default {
    /*computed: {
        ...mapState("ui", {
            skeletonLoading: (state) => state.skeletonLoading,
        }),
    },
    created() {
        this.$store.commit("ui/changeSkeletonLoading", {
            skeletonLoading: false,
        });
    },*/
    data() {
        return {
            items: [
                {
                    title: "Новости",
                    path: "/news",
                },
                {
                    title: "В лесу родилась рыбка",
                    path: "/news/6114df0f361a7fc2d685b8aa",
                },
                {
                    title: "нвоый сайт 2",
                    path: "/news/6114ffe9fc98d8c6c3abd37d/novyy-say2t",
                },
                {
                    title: "news1",
                    path: "/news/6114df0f361a7fc2d685b8aa/v-lesu-rodilas-rybka",
                },
                {
                    title: "not",
                    path: "/news/6114df0f361a7fc2d685b8aas",
                },
            ],
            post: [],
        };
    },
    async fetch() {
        /*const res = await fetch(
            `http://localhost:3333/api/v1/news/${this.id}`
        ).then((result) => result.json());*/
        //const res = await this.$axios.$get("/api/v1/news");

        /*if (process.client) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("готово!"), 1000);
            });

            let result = await promise;
        }*/
        this.post = [];

        /*if (res.success) {
            this.post = res.data;
        } else {
            if (process.server) {
                this.$nuxt.context.res.statusCode = 404;
            }
            // use throw new Error()
            throw new Error("Post not found");
        }*/
    },
};
</script>-->
<script>
export default {
    props: {
        title: {
            type: String
        },
        items: {
            type: Array
        }
    },
	data() {
		//console.log(this.$route)
		return {
			crumbs: [
				{
					title: "Личный кабинет",
					to: "/news",
				},
				{
					title: "Тест",
					to: "/news/6127b766ddd41c4ea7957601/testim-tegi-aga",
				},
			],
		};
	},
	/*  name: 'Breadcrumb',
  computed: {
    crumbs () {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          title: 'startCase(path)'
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  }*/
};
</script>
<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    align-items: flex-end;
	background-color: #eee;
	padding: 134px 0px 30px 0;
	min-height: 320px;
    position: relative;
    overflow: hidden;

	//background-image: url(/images/bg.jpg);
	background-position: center center;
	background-size: cover;
	//background: linear-gradient(to bottom, rgb(13, 17, 23) 20%, rgb(22, 25, 36));
	//padding: 50px 0;
	/*ul::-webkit-scrollbar {
		width: 10px;
		height: 3px;
		background-color: #000;
		margin-left: 3px;
		opacity: 0;
	}
	ul::-webkit-scrollbar-thumb {
		background-color: #bbb;
		border-radius: 0;
		box-shadow: inset 0px 0px 0px #f3faf7;
	}
	ul::-webkit-scrollbar-thumb:hover {
		background-color: #eee;
	}*/

    .overlay {
        background-color: rgba(0, 1, 2, 0.8);
    }

    h1, .breadcrumb {
        z-index: 2;
        position: relative;
    }

	ul {
		display: flex;
		flex-direction: row;
		margin: 20px 0;
		li {
			display: flex;
			flex-direction: row;
			align-items: center;
			.preloader {
				height: 20px;
				width: 80px;
			}
			a,
			span {
				font-size: 15px;
				font-weight: 300;
				line-height: 22px;
				-webkit-font-smoothing: subpixel-antialiased;
			}
			a {
				color: $text-color-secondary;
				opacity: 1;
				&:hover {
					//background-size: 0% 1px;
					opacity: 1;
				}
			}
			span {
				color: #818181;
			}
			.icon {
				width: 22px;
				height: 22px;
				margin: 0 5px;
				opacity: 0.3;
				:deep() svg {
					fill: #fff;
					max-width: 22px;
					max-height: 22px;
				}
			}
			&:first-child:before {
				display: none;
			}
			&:last-child {
				a {
					opacity: 0.65;
					//color: #fff;
				}
			}
		}
		@media screen and (max-width: $screen-lg) {
			white-space: nowrap;
		}
		@media screen and (max-width: $screen-lg) {
			overflow-y: auto;
			padding-bottom: 10px;
		}
	}
	@media screen and (max-width: $screen-lg) {
		padding-bottom: 10px;
		&:hover {
			ul::-webkit-scrollbar {
				opacity: 1;
			}
		}
	}
}
</style>