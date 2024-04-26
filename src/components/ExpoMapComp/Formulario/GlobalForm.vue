<template>
	<div class="GlobalForm">
		<div class="FromPanel">
			<div class="Panel_titulo">
				<h1>Feria ExpoJove</h1>
			</div>
			<div class="Panel_cuerpo">
				<div class="Panel_cuerpo_int">
					<div class="PInteres">
						<h1>Puntos de Interés</h1>
						<div class="g_cont_switch">
							<div class="form-check form-switch contenedor_swicher">
								<div class="prueba">
									<input @click="mostrarInteres($event)" class="form-check-input" data-selector="lavPubli" type="checkbox" role="switch" id="flexSwitchCheckDefault">
									<label class="form-check-label texto_switcher" for="flexSwitchCheckDefault">Lavabos Públicos</label>
								</div>
							</div>
							<div class="form-check form-switch contenedor_swicher">
								<div class="prueba">
									<input @click="mostrarInteres($event)" class="form-check-input" data-selector="salEmergen" type="checkbox" role="switch" id="flexSwitchCheckDefault">
									<label class="form-check-label texto_switcher" for="flexSwitchCheckDefault">Salidas de emergencia</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'GlobalForm',
	components: {
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
		.Panel_titulo{
			height: 10vh;
			width: 80%;
			border-radius: 20px;
			box-shadow: 0px 2px 0px 0px black;
			display: flex;
			justify-content: center;
			align-items: center;
			h1{
				font-size: 50px;
				letter-spacing: 3px;
				font-weight: bold;
			}
		}
		.Panel_cuerpo{
			height: 71vh;
			width: 80%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			.Panel_cuerpo_int{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				height: 95%;
				background: var(--build-color-light-grey);
				border-radius: 15px;
				text-align: center;
				.PInteres{
					width: 90%;
					border-radius: 15px;
					background: var(--build-color-white);
					.g_cont_switch{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
						.contenedor_swicher{
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							border-radius: 15px;
							height: 5vh;
							width: 80%;
							background: #d000ff;
							.prueba {
								width: 80%;
								.texto_switcher{
									color: var(--build-color-white);
									// font-weight: bold;
									font-size: 20px;
								}
							}
						}
					}
				}
			}
		}
	}
}



</style>