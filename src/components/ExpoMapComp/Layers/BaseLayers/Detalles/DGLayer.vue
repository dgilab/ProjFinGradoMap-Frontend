<template>
	<g id="DPuestosGen">
		<ServicioInterior/>
		<SalidasEmergencia/>
		<FoodTruck/>
	</g>
</template>

<script>

import ServicioInterior from './Puestos/ServiciosInterior.vue'
import SalidasEmergencia from './Puestos/SalidasEmergencia.vue'
import FoodTruck from './Puestos/FoodTruck.vue'

export default {
	name: 'DestallesGeneralLayer',
	components: {
		ServicioInterior,
		SalidasEmergencia,
		FoodTruck,
	}
}
</script>

<style>

</style>