<template>
	<g id="standsp4">
		<polygon v-for="pol in stands.polygons" :key="pol.points" :id="pol.id" :data-name="pol.data_name" class="cls_2" :points="pol.points"/>
		<path v-for="pat in stands.paths" :key="pat.d" :id="pat.id" :data-name="pat.data_name" class="cls_2" :d="pat.d"/>
	</g>
</template>

<script>
import { mapState } from 'vuex';


export default {
	name: 'P4Stands',
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			stands: state => state.Stands.StandsP4
		})
	}
}
</script>

<style>

</style>