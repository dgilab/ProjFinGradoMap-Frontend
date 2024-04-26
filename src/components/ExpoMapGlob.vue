<template>
	<div class="ExpoMapGlob">
		<MapaExpojoveNivel2/>
	</div>
</template>

<script>
import { useStore } from 'vuex'

import MapaExpojoveNivel2 from '@/components/ExpoMapComp/MapExpoJoNivel2.vue';


export default {
	name: 'ExpoMapGlob',
	components: {
		MapaExpojoveNivel2
	},
	data(){
		return {
			store: useStore(),
		}
	},
	computed: {
	},
}
</script>

<style>

</style>