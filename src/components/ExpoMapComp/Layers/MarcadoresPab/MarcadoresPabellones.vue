<template>
	<g id="MarcadoresPabellones">
		<MPGrandes/>
		<Pabellon1Marc/>
		<Pabellon2Marc/>
		<Pabellon4Marc/>

	</g>
</template>

<script>

import MPGrandes from './MPabN2/MPGrandes.vue'

import Pabellon1Marc from './MPabN2/MPab1/Pabellon1Marc'
import Pabellon2Marc from './MPabN2/MPab2/Pabellon2Marc'
import Pabellon4Marc from './MPabN2/MPab4/Pabellon4Marc'

export default {
	name: "MarcadoresPabellones",
	components: {
		MPGrandes,
		Pabellon1Marc,
		Pabellon2Marc,
		Pabellon4Marc
	}
}
</script>

<style>

</style>