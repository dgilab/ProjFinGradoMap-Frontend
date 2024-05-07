<template>
	<div class="SelectPabellones">
        <div class="t">
            <div class="nomPabe">
                <p>Pabellón 1</p>
            </div>
            <div class="aaaaa">
                <IconFlechaIzq2 class="fleee"/>
            </div>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import IconFlechaIzq2 from '../Iconos/IconFlechaIzq2.vue'

export default {
	name: 'SelectPabellones',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions([
        ])
	},
    computed: {
        ...mapGetters([
        ])
    },
    components: {
        IconFlechaIzq2
    },

}
</script>

<style lang="scss" scoped>

.SelectPabellones{
    width: 100%;
    padding: 1vh;
    border-radius: 15px;
    background: var(--build-color-light-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    cursor: pointer;
}
.SelectPabellones:hover{
    box-shadow: 0px 0px 3px 0px black;
}

.t{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    // background: red;
}
.nomPabe{
    width: 100%;
    font-size: 1.25vw;
    text-align: left;
    // background: blue;
}

.aaaaa{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

}

// .fleee{
//     // background: yellow; 
    
// }


</style>