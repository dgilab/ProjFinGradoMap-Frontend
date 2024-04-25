<template>
	<g id="Nivel2Pabellon4">
		<g>
			<polygon id="bp4" class="cls_8" points="41.55 53.15 131.15 53.15 220.75 53.15 220.75 222.05 220.75 390.95 131.15 390.95 41.55 390.95 41.55 222.05 41.55 53.15"/>
			<path class="cls_1" d="M220.9,391.1H41.4V53h179.5v338.1ZM41.7,390.8h178.9V53.3H41.7v337.5Z"/>
		</g>
		<g id="Pabellon4">
			<P4Cafeteria/>
			<P4Stands/>
		</g>
	</g>
</template>

<script>

import P4Cafeteria from './P4Cafeteria.vue'
import P4Stands from './P4Stands.vue'

export default {
	name: 'Pabellon4Layer',
	components: {
		P4Cafeteria,
		P4Stands
	}
}
</script>

<style>

</style>