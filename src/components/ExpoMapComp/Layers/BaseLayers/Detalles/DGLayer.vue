<template>
	<g id="DPuestosGen">
		<ServicioInterior v-show="MostLabavos"/>
		<SalidasEmergencia v-show="MostSalidaEmergencia"/>
		<FoodTruck v-show="false"/>
	</g>
</template>

<script>

import { mapGetters } from 'vuex'

import ServicioInterior from './Puestos/ServiciosInterior.vue'
import SalidasEmergencia from './Puestos/SalidasEmergencia.vue'
import FoodTruck from './Puestos/FoodTruck.vue'

export default {
	name: 'DestallesGeneralLayer',
	components: {
		ServicioInterior,
		SalidasEmergencia,
		FoodTruck,
	},
	computed: {
		...mapGetters([
			'MostLabavos',
			'MostSalidaEmergencia'
		]),
	}
}
</script>

<style>

</style>