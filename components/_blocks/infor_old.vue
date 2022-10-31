<template>
	<section class="infor">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3 class="title text-center2">
						Даем
						<span class="red">100%</span> гарантию, что
						<span class="red">останетесь дома</span> и вас никуда не заберут!
					</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
                    <div class="place-left">
                        <h4 class="mt-5 text-center2">
                            Ежедневно к нам обращаются сотни людей за консультацией.
                            <br />Мы объясняем, что в стране объявлена пока не полная, а частичная мобилизация. Что это значит?
                        </h4>
                    </div>
				</div>
			</div>

			<div class="row row-flex cards">
				<div class="col-6">
					<div class="card">
						<div class="card__image">
                            <img src="/images/bg-test.jpg" alt="">
                        </div>
						<div class="card__content">
							<p>При частичной мобилизации призывают людей по определенным военным специальностям. Если вы не служили в армии, вам не нужно переживать по поводу мобилизации.</p>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="card">
						<div class="card__image">
                            <img src="/images/bg-test.jpg" alt="">
                        </div>
						<div class="card__content">
							<p>Но если в стране объявлена частичная мобилизация, никто не знает, сколько человек призовут. Даже если вы получили повестку, не факт, что именно вас заберут в армию. Дело в том, что еще нужно пройти комиссию, медосмотр.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.infor {
	background-color: #fff;
	padding: 80px;
	.red {
		color: $bg-primary;
	}
	.title {
		width: 100%;
	}
    .cards {
        margin-top: 40px;
    }
    .place-left {
        border-left: 2px solid $bg-primary;
        padding-left: 20px;
    }
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
        width: 100%;
        //border-radius: 10px;
        //overflow: hidden;
		&__image {
			width: 100%;
			height: 100%;
			position: absolute;
            z-index: 0;
            border-radius: $border-radius-small;
            background-color: #f9f9f9;
            background-image: linear-gradient(20deg, #eee, #fff);
            border: 1px solid #eee;
            &:before {
                content: "";
                width: 20px;
                height: 20px;
                background-color: $bg-primary;
                position: absolute;
                top: 10px;
                right: 10px;
                border-radius: 100%;
            }
			img {
                opacity: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__content {
            z-index: 1;
            padding: 30px 50px;
            width: 100%;
			p {
				width: 100%;
                font-weight: 500;
				//text-align: center;
                line-height: 1.3rem;
                color: $text-primary;
			}
		}
	}
}
</style>