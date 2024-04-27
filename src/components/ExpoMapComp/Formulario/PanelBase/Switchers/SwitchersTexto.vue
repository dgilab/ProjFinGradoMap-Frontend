<template>
	<div class="SwitchersTexto">
        <p class="texto">{{ textProp }}</p>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'SwitchersTexto',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.SwitchersTexto{
    max-width: 100%;
    text-align: left;
}

.texto{
    font-size: 1vw;
    padding-inline-start: 2vh;
}

</style>