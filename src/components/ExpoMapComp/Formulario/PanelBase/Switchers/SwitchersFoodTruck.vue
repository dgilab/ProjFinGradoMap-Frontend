<template>
	<div class="SwitchersFoodTruck">
        <div class="Contenido_ft">
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
            <p>aa</p>
        </div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'SwitchersFoodTruck',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions([''])
	}

}
</script>

<style lang="scss" scoped>

.SwitchersFoodTruck{
    width: 90%;
    padding-inline: 1vh;
    border-radius: 30px 0px;
    background: var(--build-color-light-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Contenido_ft{
    width: 90%;
}


</style>