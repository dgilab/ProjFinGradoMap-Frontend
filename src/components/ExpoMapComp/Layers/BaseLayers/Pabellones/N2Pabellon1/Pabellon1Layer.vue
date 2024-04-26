<template>
	<g id="Nivel2Pabellon1">
		<g id="capaPabellon1">
			<polygon id="bp1" class="cls_8" points="275.45 440.25 365.1 440.25 454.75 440.25 454.75 609.3 454.75 778.35 365.1 778.35 275.45 778.35 275.45 609.3 275.45 440.25" v-on:mouseover="eventHover($event)" v-on:mouseleave="eventHover($event)"/>
		</g>
		<g id="Pabellon1" v-if="false">
			<P1Cafeteria/>
			<P1Escenario/>
			<P1Stands/>

		</g>
	</g>
</template>

<script>

import { mapActions } from 'vuex'

import P1Cafeteria from './P1Cafeteria.vue'
import P1Escenario from './P1Escenario.vue'
import P1Stands from './P1Stands.vue'

export default {
	name: 'Pabellon1Layer',
	components: {
		P1Cafeteria,
		P1Escenario,
		P1Stands
	},
	data(){
		return {
			activo: false
		}
	},
	methods: {
		...mapActions(['eventHover']),
	},
	computed: {
	}
}
</script>

<style>

</style>