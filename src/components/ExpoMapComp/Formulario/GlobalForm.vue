<template>
	<div class="GlobalForm">
		<div class="FromPanel">
			<div class="Panel_titulo">
				<h1>Feria ExpoJove</h1>
			</div>
			<div class="Panel_cuerpo">
				<ContenedorPaneles/>
			</div>
			<div class="babrirF_g">
				<div class="but_abrir_form" title="Notificar Error" @click="abrirFormInci">
					<i class="fa-solid fa-bug" style="color: #000000;"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

import ContenedorPaneles from './PanelBase/ContenedorPaneles.vue'
import Swal from 'sweetalert2'

export default {
	name: 'GlobalForm',
	data () {
        return {
			nombre: ' ',
			descripcion: ' ',
        }
    },
	components: {
		ContenedorPaneles
	},
	computed: {

	},
	methods: {
		...mapActions(['mostrarInteres']),
		abrirFormInci(){
			console.log()
			Swal.fire({
				title: 'Formulario de incidencia',
				html:
					`<select id="swal-selector" class="swal2-select">
						<option disabled selected value>Selecciona</option>
						<option value="estructura">Error de estructura</option>
						<option value="colores">Error de colores</option>
						<option value="dimensiones">Error de dimensiones</option>
						<option value="Terminal">Error del Terminal</option>
						<option value="otro">Otro</option>
					</select>
					<textarea id="swal-textarea" class="swal2-textarea" style="display: none;" maxlength="100"></textarea>`,
					// '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
					// '<input id="swal-input2" class="swal2-input" placeholder="Descripción">',
				showCancelButton: true,
				confirmButtonText: 'Enviar',
				cancelButtonText: 'Cancelar',
				showLoaderOnConfirm: true,
				preConfirm: () => {
					// this.nombre = Swal.getPopup().querySelector('#swal-input1').value;
					// this.descripcion = Swal.getPopup().querySelector('#swal-input2').value;
					return new Promise((resolve, reject) => {
						const seleccion = document.getElementById('swal-selector').value;
						if (seleccion === 'otro') {
							const texto = document.getElementById('swal-textarea').value;
							console.log(texto)
							console.log((resolve, reject)) // llamar api para enviar el correo 
						} else {
							console.log(seleccion)
							console.log((resolve, reject))
						}
					})

				}
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						title: 'Cargando',
						allowOutsideClick: false,
						onBeforeOpen: () => {
							Swal.showLoading();
						}
					});
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.GlobalForm{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
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
}
.Panel_titulo{
	height: 10vh;
	width: 80%;
	border-radius: 20px;
	box-shadow: 0px 2px 0px 0px black;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: default;
}
h1{
	text-align: center;
	font-size: 3vw;
	letter-spacing: 3px;
	font-weight: bold;
}
.Panel_cuerpo{
	height: 71vh;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
}
.babrirF_g{
	display: flex;
	justify-content: flex-start;
	width: 70%;
	
	// bottom: 0;
}

.but_abrir_form{
	border: 1px solid black;
	width: 60px;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: #F0F0F0;
	cursor: pointer;
	border-radius: 0px 0px 15px 15px;
	
}
.but_abrir_form:hover{
	box-shadow: inset 0px 0px 10px -2px rgba(102,102,102,1);
}

.swal2-container {
	z-index: 9999 !important;
}


</style>