<!--<template>
	<div v-html="src"></div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: () => "solid/user",
        },
        type: {
            type: String,
            default: () => "font-awesome",
        },
    },
    data() {
        return {
            icon: null
        }
    },
    mounted() {
            //const src = require(`~/assets/icons/${this.type}/${this.name.split('/')[0]}/${this.name.split('/')[1]}.svg?raw`)
            //this.icon = src
            console.log(this.name.split('/')[0]+'/'+this.name.split('/')[1]);
    },
    computed: {
        src() {
            //const src = require(`~/assets/icons/${this.type}/${this.name.split('/')[0]}/${this.name.split('/')[1]}.svg?raw`)
            return ''
        }
    }
}
</script>
<style lang="scss" scoped>
:deep() svg {
	width: 100%;
	height: auto;
}
</style>-->
<template>
	<div v-html="icon"></div>
</template>

<script>
import fas_gamepad from "~/assets/icons/font-awesome/solid/gamepad.svg?raw";
import fas_play from "~/assets/icons/font-awesome/solid/play.svg?raw";
import fas_link from "~/assets/icons/font-awesome/solid/link.svg?raw";
import fas_bars_staggered from "~/assets/icons/font-awesome/solid/bars-staggered.svg?raw";
import fas_home from "~/assets/icons/font-awesome/solid/home.svg?raw";

import fal_link from "~/assets/icons/font-awesome/light/link.svg?raw";
import fal_bars_staggered from "~/assets/icons/font-awesome/light/bars-staggered.svg?raw";
import fal_check from "~/assets/icons/font-awesome/light/check.svg?raw";
import far_check from "~/assets/icons/font-awesome/regular/check.svg?raw";

import fat_play_angle_left from "~/assets/icons/font-awesome/thin/angle-left.svg?raw";
import fat_play_angle_right from "~/assets/icons/font-awesome/thin/angle-right.svg?raw";
import fat_xmark from "~/assets/icons/font-awesome/thin/xmark.svg?raw";

import fab_discord from "~/assets/icons/font-awesome/brands/discord.svg?raw";
import fab_telegram from "~/assets/icons/font-awesome/brands/telegram.svg?raw";
import fab_whatsapp from "~/assets/icons/font-awesome/brands/whatsapp.svg?raw";
import fab_youtube from "~/assets/icons/font-awesome/brands/youtube.svg?raw";

import far_angle_left from "~/assets/icons/font-awesome/regular/angle-left.svg?raw";
import far_angle_right from "~/assets/icons/font-awesome/regular/angle-right.svg?raw";
import far_angle_down from "~/assets/icons/font-awesome/regular/angle-down.svg?raw";
import far_angle_up from "~/assets/icons/font-awesome/regular/angle-up.svg?raw";

import fas_phone from "~/assets/icons/font-awesome/solid/phone.svg?raw";

import fas_shield_check from "~/assets/icons/font-awesome/solid/shield-check.svg?raw";
import fas_user_shield from "~/assets/icons/font-awesome/solid/user-shield.svg?raw";
import fas_money_bill_transfer from "~/assets/icons/font-awesome/solid/money-bill-transfer.svg?raw";
import fas_messages_question from "~/assets/icons/font-awesome/solid/messages-question.svg?raw";

import fas_person1 from "~/assets/icons/font-awesome/solid/person-military-to-person.svg?raw";
import fas_person2 from "~/assets/icons/font-awesome/solid/person-military-rifle.svg?raw";

import fas_right_bracket from "~/assets/icons/font-awesome/solid/right-from-bracket.svg?raw";
import fas_person_rifle from "~/assets/icons/font-awesome/solid/person-rifle.svg?raw";
import fas_hourglass_half from "~/assets/icons/font-awesome/solid/hourglass-half.svg?raw";
import fas_briefcase_medical from "~/assets/icons/font-awesome/solid/briefcase-medical.svg?raw";
import fas_message_quote from "~/assets/icons/font-awesome/solid/message-quote.svg?raw";

export default {
	props: {
		name: {
			type: String,
			default: () => "solid/user",
		},
		type: {
			type: String,
			default: () => "font-awesome",
		},
	},
	data() {
		return {
			icons: [
				//solid
				{
					name: "phone",
					size: "solid",
					raw: fas_phone,
				},
				{
					name: "play",
					size: "solid",
					raw: fas_play,
				},
				{
					name: "gamepad",
					size: "solid",
					raw: fas_gamepad,
				},
				{
					name: "link",
					size: "solid",
					raw: fas_link,
				},
				{
					name: "bars-staggered",
					size: "solid",
					raw: fas_bars_staggered,
				},
				{
					name: "home",
					size: "solid",
					raw: fas_home,
				},

				//light
				{
					name: "link",
					size: "light",
					raw: fal_link,
				},
				{
					name: "bars-staggered",
					size: "light",
					raw: fal_bars_staggered,
				},
				{
					name: "check",
					size: "light",
					raw: fal_check,
				},
				{
					name: "check",
					size: "regular",
					raw: far_check,
				},

				//thin
				{
					name: "angle-left",
					size: "thin",
					raw: fat_play_angle_left,
				},
				{
					name: "angle-right",
					size: "thin",
					raw: fat_play_angle_right,
				},
				{
					name: "xmark",
					size: "thin",
					raw: fat_xmark,
				},

				//brands
				{
					name: "discord",
					size: "brands",
					raw: fab_discord,
				},
				{
					name: "telegram",
					size: "brands",
					raw: fab_telegram,
				},
				{
					name: "whatsapp",
					size: "brands",
					raw: fab_whatsapp,
				},
				{
					name: "youtube",
					size: "brands",
					raw: fab_youtube,
				},

                //regular
				{
					name: "angle-right",
					size: "regular",
					raw: far_angle_right,
				},
				{
					name: "angle-left",
					size: "regular",
					raw: far_angle_left,
				},
				{
					name: "angle-down",
					size: "regular",
					raw: far_angle_down,
				},
				{
					name: "angle-up",
					size: "regular",
					raw: far_angle_up,
				},

				{
					name: "user-shield",
					size: "solid",
					raw: fas_user_shield,
				},
				{
					name: "shield-check",
					size: "solid",
					raw: fas_shield_check,
				},
				{
					name: "money-bill-transfer",
					size: "solid",
					raw: fas_money_bill_transfer,
				},
				{
					name: "messages-question",
					size: "solid",
					raw: fas_messages_question,
				},

				{
					name: "person-military-rifle",
					size: "solid",
					raw: fas_person2,
				},
				{
					name: "person-military-to-person",
					size: "solid",
					raw: fas_person1,
				},
				{
					name: "right-from-bracket",
					size: "solid",
					raw: fas_right_bracket,
				},
				{
					name: "person-rifle",
					size: "solid",
					raw: fas_person_rifle,
				},
				{
					name: "hourglass-half",
					size: "solid",
					raw: fas_hourglass_half,
				},
				{
					name: "briefcase-medical",
					size: "solid",
					raw: fas_briefcase_medical,
				},
				{
					name: "message-quote",
					size: "solid",
					raw: fas_message_quote,
				}
			],
		};
	},
	computed: {
		icon() {
			const size = this.name.split("/")[0];
			const name = this.name.split("/")[1];
			console.log(size + "/" + name);

			for (let i = 0; i < this.icons.length; i++) {
				const e = this.icons[i];
				if (e.name == name && e.size == size) {
					//console.log('icon use: '+name)
					return e.raw;
					/*return {
                        type: this.name.split('/')[0],
                        name: this.name.split('/')[1],
                        svg: e.raw
                    }*/
				}
			}
			//console.log(this.name.split('/')[0]+'/'+this.name.split('/')[1])
			//return {
			//type: this.name.split('/')[0],
			//name: this.name.split('/')[1],
			//svg: ''
			//}
		},
	},
};
</script>