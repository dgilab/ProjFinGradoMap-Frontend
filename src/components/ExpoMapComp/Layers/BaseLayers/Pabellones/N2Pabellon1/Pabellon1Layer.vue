<template>
	<g id="Nivel2Pabellon1">
		<g>
			<polygon id="bp1" class="cls_8" points="275.45 440.25 365.1 440.25 454.75 440.25 454.75 609.3 454.75 778.35 365.1 778.35 275.45 778.35 275.45 609.3 275.45 440.25"/>
			<path class="cls_1" d="M454.9,778.5h-179.6v-338.4h179.6v338.4ZM275.6,778.2h179v-337.8h-179v337.8Z"/>
		</g>
		<g id="Pabellon1">
			<P1Cafeteria/>
			<P1Escenario/>
			<P1Stands/>

		</g>
	</g>
</template>

<script>

import P1Cafeteria from './P1Cafeteria.vue'
import P1Escenario from './P1Escenario.vue'
import P1Stands from './P1Stands.vue'

export default {
	name: 'Pabellon1Layer',
	components: {
		P1Cafeteria,
		P1Escenario,
		P1Stands
	}
}
</script>

<style>

</style>