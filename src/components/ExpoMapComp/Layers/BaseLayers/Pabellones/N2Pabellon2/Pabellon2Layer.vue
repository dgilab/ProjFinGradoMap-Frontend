<template>
	<g id="Nivel2Pabellon2">
		<g>
			<polygon id="bp2" class="cls_8" points="41.55 440.25 131.2 440.25 220.85 440.25 220.85 609.3 220.85 778.35 131.2 778.35 41.55 778.35 41.55 609.3 41.55 440.25"/>
			<path class="cls_1" d="M221,778.5H41.4v-338.4h179.6v338.4ZM41.7,778.2h179v-337.8H41.7v337.8Z"/>
		</g>
		<g id="Pabellon2">
			<P2Cafeteria/>
			<P2Stands/>
		</g>
	</g>
</template>

<script>

import P2Cafeteria from './P2Cafeteria.vue'
import P2Stands from './P2Stands.vue'

export default {
	name: 'Pabellon2Layer',
	components: {
		P2Cafeteria,
		P2Stands
	}
}
</script>

<style>

</style>