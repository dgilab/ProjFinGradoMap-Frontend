<template>
	<g id="MPG">
		<g v-for="marcador in marcadores" :key="marcador.id" :id="marcador.id">
			<path v-for="pat in marcador.paths" :key="pat.d" class="cls_1" :d="pat.d"/>
		</g>
	</g>
</template>

<script>


import { mapState } from 'vuex';

export default {
	name: "MPGrandes",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			marcadores: state => state.MarcadoresGlobGrand
		})
	},
	components: {
	}
}
</script>

<style>

</style>