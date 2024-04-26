<template>
	<div class="expoMap">
		<router-view/>
	</div>
</template>

<style lang="scss">
:root{

	--build-color-black: #000000;
	--build-color-white: #ffffff;

	--build-color-basePabellones: #ffffff;
	--build-color-baseMapa: #d6d5d1;
	--build-color-marcadores-grandes: #000000;
	--build-color-marcadores-pequenos: #e7e7e7;
	--build-color-escenarios: #fffb00;
	--build-color-cafeteias: #ffb700;
	--build-color-servicios: #6e91f8;
	--build-color-stands: #257c68;
	--build-color-salidasEmergencia: #23a55b;
	--build-color-foodTruck: #f60;

	--build-color-event-hover: #149f94;

	--build-sombra-base: 0px 1px 2px 4px rgba(0, 0, 0, 0.2);

	--build-transicion-principal: cubic-bezier(0, 0.02, 1, 1.01);
}
body {
	margin: 0;
	padding: 0;
	font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.cls_1{fill: var(--build-color-marcadores-grandes);}
.cls_2{fill: var(--build-color-stands);}
.cls_3{fill: var(--build-color-salidasEmergencia);}
.cls_4{fill: var(--build-color-escenarios);}
.cls_5{fill: var(--build-color-servicios);}
.cls_7{fill: var(--build-color-foodTruck);}
.cls_8{
	fill: var(--build-color-basePabellones);
	stroke-width: .3px;
	stroke: var(--build-color-black); 
	transition: var(--build-transicion-principal);
} //Pabellones Base
.cls_9{fill: var(--build-color-cafeteias);stroke-width: .2px;stroke: var(--build-color-black);}
.cls_13{fill: var(--build-color-white);stroke-width: .3px;stroke: var(--build-color-black);} // Color Texto
.cls_14{fill: var(--build-color-marcadores-pequenos);stroke-width: .3px;stroke: var(--build-color-black);}
.cls_17{fill: var(--build-color-baseMapa);stroke-width: .3px;stroke: var(--build-color-black);}
.cls_19{opacity: 1;}


.hover_Base{
	fill: var(--build-color-event-hover);
	box-shadow: 1px var(--build-sombra-base);

}


</style>
