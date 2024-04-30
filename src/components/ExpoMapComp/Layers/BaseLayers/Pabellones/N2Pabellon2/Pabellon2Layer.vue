<template>
	<g id="Nivel2Pabellon2">
		<g id="capaPabellon2">
			<title>Pabellón 2</title>
			<polygon id="bp2" class="cls_8" v-on:mouseover="eventHover($event)" v-on:mouseleave="eventHover($event)" points="41.55 440.25 131.2 440.25 220.85 440.25 220.85 609.3 220.85 778.35 131.2 778.35 41.55 778.35 41.55 609.3 41.55 440.25" />
		</g>
		<g id="Pabellon2" v-if="false">
			<P2Cafeteria/>
			<P2Stands/>
		</g>
	</g>
</template>

<script>
import { mapActions } from 'vuex'

import P2Cafeteria from './P2Cafeteria.vue'
import P2Stands from './P2Stands.vue'

export default {
	name: 'Pabellon2Layer',
	components: {
		P2Cafeteria,
		P2Stands
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