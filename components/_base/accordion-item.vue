<template>
	<div class="accordion__item" v-bind:class="{active: visible}">
		<div class="accordion__trigger" :class="{'accordion__trigger_active': visible}" @click="open">
			<slot name="accordion-trigger"></slot>
			<div class="accordion__event">
				<base-icon name="regular/angle-right" class="accordion__icon" v-bind:class="{active: visible}"></base-icon>
			</div>
		</div>
		<transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
			<div class="accordion__content" v-show="visible">
				<slot name="accordion-content"></slot>
			</div>
		</transition>
	</div>
</template>


<script>
export default {
	props: {},
	inject: ["Accordion"],
	data() {
		return {
			index: null,
		};
	},
	computed: {
		visible() {
			return this.index == this.Accordion.active;
		},
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null;
			} else {
				this.Accordion.active = this.index;
			}
		},
		start(el) {
			el.style.height = el.scrollHeight + "px";
		},
		end(el) {
			el.style.height = "";
		},
	},
	created() {
		this.index = this.Accordion.count++;
	},
};
</script>

<style lang="scss" scoped>
.accordion__item {
	cursor: pointer;
	border-radius: 0px;
	border-top: 1px solid rgba(145, 156, 176, 0.2);
	position: relative;
	box-shadow: 0 -5px 15px 0 rgba(145, 156, 176, 0.1);
}

.accordion__trigger {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	.accordion-title {
		color: rgba(var(--text-primary), 0.65);
		margin-bottom: 0 !important;
		line-height: 1.5rem;
	}
}

.accordion-enter-active,
.accordion-leave-active {
	will-change: height, opacity, padding;
	transition: height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
	overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
	height: 0 !important;
	opacity: 0;
}
.accordion__content {
	padding: 0px;
	transition: 0.3s;
	color: $text-primary;
	:deep() p {
		color: $text-primary;
		margin: 0 0 10px 0;
	}
}
.accordion__event {
	svg {
		transition: 0.3s;
		&.active {
			transform: rotate(135deg);
		}
	}
}

.accordion__icon {
	display: flex;
	justify-content: center;
	align-items: center;
	:deep() svg {
		color: $text-primary;
		width: 30px;
		height: 30px;
		fill: #919cb0;
		transform: rotate(0deg);
		transition: 0.2s;
	}
	&.active {
		:deep() svg {
			fill: $bg-primary;
			transform: rotate(90deg);
		}
	}
}

.accordion__trigger_active {
	.accordion-title {
		color: $text-primary;
	}
}
.active {
	.accordion__content {
		padding: 30px;
		padding-top: 0;
	}
}
</style>