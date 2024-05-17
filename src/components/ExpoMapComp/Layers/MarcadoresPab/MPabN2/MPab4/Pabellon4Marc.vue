<template>
	<g id="MP4_2">
		<g :id="MCafep4.id" v-if="false">
			<path v-for="pathCaf in MCafep4.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MStandsp4.id" v-if="false">
			<path v-for="pathStds in MStandsp4.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14" :d="pathStds.d"/>
		</g>
		<!-- <g id="MStandsp4">
			<path id="msp4_01" data-name="msp4 01" class="cls_14" d="M67.95,313.65c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp4_02" data-name="msp4 02" class="cls_14" d="M130.65,287.75c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp4_03" data-name="msp4 03" class="cls_14" d="M131.15,150.85c-14.25-13.8-7.17-20.67-.07-20.66s14.23,6.91.07,20.66l-.52.07q-.17.02.52-.07Z"/>
			<path id="msp4_04" data-name="msp4 04" class="cls_14" d="M193.05,297.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp4_05" data-name="msp4 05" class="cls_14" d="M192.75,351.55c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp4_06" data-name="msp4 06" class="cls_14" d="M193.05,375.15c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
		</g> -->
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon4Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			// MCafep4: state => state.MarcP.MP4_2.MCafep4,
			// MStandsp4: state => state.MarcP.MP4_2.MStandsp4,
		}),
		...mapGetters([
			'MCafep4', 
			'MStandsp4'
		])
	},
	components: {
	}
}
</script>

<style>

</style>