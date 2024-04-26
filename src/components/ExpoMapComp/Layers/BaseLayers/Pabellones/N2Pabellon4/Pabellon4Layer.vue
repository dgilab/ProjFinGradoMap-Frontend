<template>
	<g id="Nivel2Pabellon4">
		<g id="capaPabellon4">
			<polygon id="bp4" class="cls_8" points="41.55 53.15 131.15 53.15 220.75 53.15 220.75 222.05 220.75 390.95 131.15 390.95 41.55 390.95 41.55 222.05 41.55 53.15" v-on:mouseover="eventHover($event)" v-on:mouseleave="eventHover($event)"/>
		</g>
		<g id="Pabellon4" v-if="false">
			<P4Cafeteria/>
			<P4Stands/>
		</g>
	</g>
</template>

<script>
import { mapActions } from 'vuex'


import P4Cafeteria from './P4Cafeteria.vue'
import P4Stands from './P4Stands.vue'

export default {
	name: 'Pabellon4Layer',
	components: {
		P4Cafeteria,
		P4Stands
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