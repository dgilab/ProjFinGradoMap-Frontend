<template>
	<div class="GlobalForm">
		<div class="FromPanel">
			<div class="Panel_titulo">
				<h1>Feria ExpoJove</h1>
			</div>
			<div class="Panel_cuerpo">
				<ContenedorPaneles/>
			</div>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

import ContenedorPaneles from './PanelBase/ContenedorPaneles.vue'

export default {
	name: 'GlobalForm',
	components: {
		ContenedorPaneles
	},
	computed: {

	},
	methods: {
		...mapActions(['mostrarInteres'])
	}
}
</script>

<style lang="scss" scoped>
.GlobalForm{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	.FromPanel{
		width: 80%;
		height: 97vh;
		box-shadow: 0px 0px 20px 0px black;
		border-radius: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--build-color-white);
		.Panel_titulo{
			height: 10vh;
			width: 80%;
			border-radius: 20px;
			box-shadow: 0px 2px 0px 0px black;
			display: flex;
			justify-content: center;
			align-items: center;
			h1{
				text-align: center;
				font-size: 3vw;
				letter-spacing: 3px;
				font-weight: bold;
			}
		}
	}
}
.Panel_cuerpo{
	height: 71vh;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

}



</style>