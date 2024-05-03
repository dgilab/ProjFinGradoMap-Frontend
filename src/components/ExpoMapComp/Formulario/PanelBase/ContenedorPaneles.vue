<template>
    <div class="contenedor_paneles">
        <PanelCuerpoInteres/>

    </div>
</template>

<script>

import { mapActions } from 'vuex'

import PanelCuerpoInteres from './Paneles/PanelCuerpoInteres'

export default {
	name: 'ContenedorPaneles',
    components: {
		PanelCuerpoInteres
	},
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.contenedor_paneles{
    display: block;
    align-items: center;
    justify-content: flex-top;
    height: 95%;
    background: var(--build-color-light-grey);
    border-radius: 15px;
    text-align: center;
    overflow: auto;
	scrollbar-width: thin;
    padding: 5%;
    transition: all 0.5s;    
}
</style>