<template>
	<div class="Panel_cuerpo_pab">
        <div class="Cont_compo">
            <div class="Ppabellones">
                <div class="TituloPanelPabellones">
                    <h1>Pabellones</h1>
                </div>
                <div class="g_cont_pabe">

                    a
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


export default {
	name: 'PanelCuerpoPabellones',
    data () {
        return {

        }
    },
    components: {

	},
    computed: {
		...mapGetters([
			'MostFoodTrucks'
		]),
	},
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.Panel_cuerpo_pab{
    padding-block-end: 5%;
    width: 100%;
}
.Cont_compo{
    border-radius: 15px;
    background: var(--build-color-white);
    display: block;
    padding: 2%;
}

.Ppabellones{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.TituloPanelPabellones{
    h1{
        text-align: center;
        font-size: 2vw;
    }
}


.g_cont_pabe{
    background: red;
    width:80%;
    display: flex;
    justify-content: flex-start;
}


</style>