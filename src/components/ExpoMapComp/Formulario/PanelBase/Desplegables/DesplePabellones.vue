<template>
	<div class="DesplePabellones">
        <div class="VerEnMapaDes" :data-idRela="idRelacMap" @click="zoomIn($event)">
            <p>Ampliar en el mapa</p>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'DesplePabellones',
    props: {
        idProp: String,
        idRelacMap: String,
    },
    methods: {
		...mapActions([
            'zoomIn'
        ])
	},
    computed: {
        ...mapGetters([
        ])
    },
    components: {
    },

}
</script>

<style lang="scss" scoped>

.DesplePabellones{
    // width: 90%;
    // padding: 1vh;
    border-radius: 0px 0px 30px 30px;
    background: var(--bs-gray-500);
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;#ECECEC
}

</style>