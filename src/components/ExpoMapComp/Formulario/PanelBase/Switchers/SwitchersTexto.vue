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
    max-width: 80%;
}

.texto{
    font-size: 1vw;
}

</style>