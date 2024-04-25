<template>
	<div class="ExpoMapGlob">
		<MapaExpojoveNivel2/>

	</div>
</template>

<script>

import MapaExpojoveNivel2 from '@/components/ExpoMapComp/MapExpoJoNivel2.vue';
import { useStore } from 'vuex'

export default {
	name: 'ExpoMapGlob',
	components: {
		MapaExpojoveNivel2
	},
	data(){
		return {
			store: useStore(),
		}
	}
}
</script>

<style>

</style>