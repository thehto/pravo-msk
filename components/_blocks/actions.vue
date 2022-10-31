<template>
    <section class="present">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="mb-5">Что нужно сделать, чтобы не пойти в армию?</h3>
                </div>
            </div>
            <div class="row row-flex">
                <div class="col-12 col-md-5">
                    <div class="image">
                        <img src="/images/actions-army.webp" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 offset-md-1">
                    <div class="present-list">
                        <div class="item">
                            <div class="item__icon">
                                <span>1</span>
                            </div>
                            <div class="item__content">
                                <p>Оставьте заявку на сайте.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>2</span>
                            </div>
                            <div class="item__content">
                                <p>С вами свяжется наш специалист.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>3</span>
                            </div>
                            <div class="item__content">
                                <p>Выслушаем и проконсультируем.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>4</span>
                            </div>
                            <div class="item__content">
                                <p>Найдем законный способ предоставить отсрочку.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>5</span>
                            </div>
                            <div class="item__content">
                                <p>Сопровождаем вас на всех этапах, пока отсрочка не будет на руках.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>6</span>
                            </div>
                            <div class="item__content">
                                <p>Хотите остаться дома и не ходить в армию? Тогда оставляйте заявку на сайте «<b>РоссЮрист</b>».</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__icon">
                                <span>7</span>
                            </div>
                            <div class="item__content">
                                <p>Сделаем так, что мобилизация пройдет мимо вас и ваших близких!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.present {
    background-color: #fff;
    padding: 80px 0;
    .image {
        width: 100%;
        height: 100%;
        display: flex;
        //border-radius: $border-radius-small;
        overflow: hidden;
        //clip-path: polygon(93% 0, 100% 12%, 100% 100%, 0 100%, 0 0);
        //clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 13%);
        clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0);
        //border-top-left-radius: 100px;
        //border-bottom-left-radius: 100px;
        //border-top-right-radius: 100px;
        //border-bottom-right-radius: 100px;
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
    .present-list {
        width:  100%;
        display: flex;
        flex-direction: column;
        .item {
            display: flex;
            flex-direction: row;
            margin-top: 15px;
            &:first-child {
                margin-top: 0;
            }
            &__icon {
                flex: none;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 42px;
                height: 42px;
                background-color: $bg-primary;
                border-radius: 0 0% 0px 0%;
                border-radius: 100%;
                :deep(svg) {
                    margin-top: 3px;
                    fill: $text-color-btn;
                    width: 100%;
                    height: 100%;
                    max-width: 18px;
                    max-height: 18px;
                }
                span {
                    color: #fff;
                    font-size: $h4-size;
                    font-weight: 700;
                }
            }
            &__content {
                padding-left: 30px;
                padding-top: 8px;
                p {
                    font-size: $text-size-big;
                    line-height: 1.2rem;
                }
            }
        }
    }
}
@media screen and (max-width: 992px) {
    .present {
        .image {
            clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);
        }
        .present-list {
            margin-top: 30px;
            .item {
                &__icon {
                    width: 36px;
                    height: 36px;
                }
                &__content {
                    padding-top: 9px;
                    padding-left: 15px;
                    p {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}
</style>