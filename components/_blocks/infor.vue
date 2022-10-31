<template>
	<section class="infor">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="infor__container">
						<p>В связи с объявленией специальной военной операции (СВО), а также в последующем частичной мобилизации - у военнослужащих и призывников возникает множество вопросов и проблем при незнании законодательной базы, поэтому к нам начали ежедневно обращаться сотни людей за консультацией, начиная с действующих военнослужащих, заканчивая призванными мобилизованными и теми, кто желает ее избежать.</p>
						<p>Как показывает наша практика, если имеются нарушения прав военнослужащих при прохождении военной службы или при увольнении с неё, вам всегда будет необходима помощь юриста. Такого рода вопросы разрешаются в большей своей части в судебном порядке, а огромное количество положительных решений военного суда свидетельствует о качестве работы наших военных юристов.</p>
						<p>После уточнения всех существенных моментов дела военный юрист выработает правовую позицию, составит исковое заявление и обратится в суд за восстановлением нарушенного права. Разрешение вопросов в военном в суде происходит значительно быстрее нежели в судах общей юрисдикции, поэтому сроки разрешения Вашего вопроса значительно сокращаются. </p>
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

	&__container {
		padding-left: 30px;
		border-left: 4px solid $bg-primary;
		p {
			margin-top: 15px;
			&:first-child {
				margin-top: 0;
			}
		}
	}


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
@media screen and (max-width: 992px) {
	.infor {
		padding: 30px 0;
		&__container {
			padding-left: 15px;
		}
	}
}
</style>