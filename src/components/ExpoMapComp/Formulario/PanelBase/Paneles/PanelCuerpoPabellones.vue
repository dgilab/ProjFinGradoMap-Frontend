<template>
	<div class="Panel_cuerpo_pab">
        <div class="Cont_compo">
            <div class="Ppabellones">
                <div class="cpm TituloPanelPabellones">
                    <h1>Pabellones</h1>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones/>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones/>
                </div>
                <div class="cpm g_cont_pabe">
                    <SelectPabellones/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import SelectPabellones from '../Seleccionables/SelectPabellones'

export default {
	name: 'PanelCuerpoPabellones',
    data () {
        return {
            idLavabos: "lavPubli",
            textSwitcherLabavos: "Mostrar Lavabos Públicos",
            idEmergencia: "salEmergen",
            textSwitcherEmergencia: "Mostrar Salidas de emergencia",
            idFoodTrucks: "foodTruck",
            textSwitcherFoodTrucks: "Mostrar FoodTrucks",
        }
    },
    components: {
        SelectPabellones,
	},
    computed: {
		...mapGetters([
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
}






</style>