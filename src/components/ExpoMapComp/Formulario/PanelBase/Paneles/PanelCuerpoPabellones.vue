<template>
	<div class="Panel_cuerpo_pab">
        <div class="Cont_compo">
            <div class="Ppabellones">
                <div class="cpm TituloPanelPabellones">
                    <h1>Pabellones</h1>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones :pabProp="nomP1" :idProp="idP1" :variMost="vM1"/>
                    <transition name="despleg">
                        <div v-if="!DesplegP1">
                            <DesplePabellones :pabNom="nomP1" :idProp="idPabe1" :idRelacMap="idP1"/>
                        </div>
                    </transition>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones :pabProp="nomP2" :idProp="idP2" :variMost="vM2"/>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones :pabProp="nomP3" :idProp="idP3" :variMost="vM3"/>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones :pabProp="nomP4" :idProp="idP4" :variMost="vM4"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import SelectPabellones from '../Seleccionables/SelectPabellones'
import DesplePabellones from '../Desplegables/DesplePabellones'

export default {
	name: 'PanelCuerpoPabellones',
    data () {
        return {
            nomP1: "Pabellón 1",
            nomP2: "Pabellón 2",
            nomP3: "Pabellón 3",
            nomP4: "Pabellón 4",
            idP1: "bp1",
            idP2: "bp2",
            idP3: "bp3",
            idP4: "bp4",
            vM1: "desP1",
            vM2: "desP2",
            vM3: "desP3",
            vM4: "desP4",

            idPabe1: "idPabe1",
        }
    },
    components: {
        SelectPabellones,
        DesplePabellones,
	},
    computed: {
		...mapGetters([
            'DesplegP1',
            'DesplegP2',
            'DesplegP3',
            'DesplegP4',
            'InfoPabesDesp',
		]),
	},
    methods: {
		...mapActions([
        ])
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

.cpm{
    padding: 1% 0% 1% 0%;
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
        font-weight: bold;
    }
}


.g_cont_pabe{
    width:80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}






</style>