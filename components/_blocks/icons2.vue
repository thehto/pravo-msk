<template>
	<section class="poch">
		<div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="title">Важные категории <br>с которыми мы можем помочь нашим клиентам</h3>
                </div>
            </div>
			<div class="row">
				<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card__icon">
                            <base-icon name="solid/right-from-bracket"></base-icon>
                        </div>
                        <div class="card__content">
                            <p>Увольнение с военной службы</p>
                        </div>
                    </div>
                </div>
				<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card__icon">
                            <base-icon name="solid/person-rifle"></base-icon>
                        </div>
                        <div class="card__content">
                            <p>Призыв на военную службу</p>
                        </div>
                    </div>
                </div>
				<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card__icon">
                            <base-icon name="solid/hourglass-half"></base-icon>
                        </div>
                        <div class="card__content">
                            <p>Отсрочки от военной службы</p>
                        </div>
                    </div>
                </div>
				<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card__icon">
                            <base-icon name="solid/briefcase-medical"></base-icon>
                        </div>
                        <div class="card__content">
                            <p>Мед.освидетельствование, категория здоровья</p>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.poch {
	background-color: #fff;
    padding: 80px;
    .title {
        width: 100%;
        text-align: center;
        margin-bottom: 60px;
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        &__icon {
            width: 100px;
            height: 100px;
            background-color: $line-color;
            //background-image: linear-gradient(90deg, rgba(var(--text-primary), 0.3), transparent);
            border-radius: 100%;
            //border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 3;
            box-shadow: 0px 0px 0px 10px rgba(var(--line-color), 0.2);
            :deep(svg) {
                width: 42px;
                height: 42px;
                fill: $text-color-btn;
            }
        }
        &__content {
            margin-top: 30px;
            p {
                width: 100%;
                max-width: 250px;
                font-size: 20px;
                font-weight: 700;
                text-align: center;
            }
        }
    }
}
@media screen and (max-width: 992px) {
    .poch {
        padding: 30px 0;
        .title {
            margin-bottom: 0;
        }
        .card {
            margin-top: 30px;
            &__icon {
                width: 80px;
                height: 80px;
                border-radius: 100%;
                :deep(svg) {
                    width: 30px;
                    height: 30px;
                }
            }
            &__content {
                p {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>