<template>
	<g id="MP2_2">
		<g :id="MCafep2.id" v-if="false">
			<path v-for="pathCaf in MCafep2.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MStandsp2.id" v-if="false">
			<path v-for="pathStds in MStandsp2.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14" :d="pathStds.d"/>
		</g>
		<!-- <g id="MStandsp2">
			<path id="msp2_01" data-name="msp2 01" class="cls_14" d="M71.55,696.45c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_02" data-name="msp2 02" class="cls_14" d="M71.55,591.25c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_03" data-name="msp2 03" class="cls_14" d="M72.65,533.75c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_04" data-name="msp2 04" class="cls_14" d="M72.45,476.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_05" data-name="msp2 05" class="cls_14" d="M110.75,486.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_06" data-name="msp2 06" class="cls_14" d="M142.85,486.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_07" data-name="msp2 07" class="cls_14" d="M133.55,511.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_08" data-name="msp2 08" class="cls_14" d="M132.25,558.55c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_09" data-name="msp2 09" class="cls_14" d="M132.25,642.65c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_10" data-name="msp2 10" class="cls_14" d="M115.95,702.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_11" data-name="msp2 11" class="cls_14" d="M149.65,702.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_12" data-name="msp2 12" class="cls_14" d="M111.65,735.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_13" data-name="msp2 13" class="cls_14" d="M146.75,728.45c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_14" data-name="msp2 14" class="cls_14" d="M192.95,734.35c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_15" data-name="msp2 15" class="cls_14" d="M193.25,695.65c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_16" data-name="msp2 16" class="cls_14" d="M193.25,636.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_17" data-name="msp2 17" class="cls_14" d="M193.25,576.75c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_18" data-name="msp2 18" class="cls_14" d="M193.25,533.25c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_19" data-name="msp2 19" class="cls_14" d="M193.25,508.25c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_20" data-name="msp2 20" class="cls_14" d="M178.05,477.85c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_21" data-name="msp2 21" class="cls_14" d="M203.15,477.55c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp2_22" data-name="msp2 22" class="cls_14" d="M194.05,457.75c-7.6-7.85-3.77-11.73.04-11.7s7.61,3.95-.04,11.7l-.26.04q-.09.01.26-.04Z"/>
		</g> -->
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon2Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			// MCafep2: state => state.MarcP.MP2_2.MCafep2,
			// MStandsp2: state => state.MarcP.MP2_2.MStandsp2,
		}),
		...mapGetters([
			'MCafep2',
			'MStandsp2',
		]),
	},
	components: {
	}
}
</script>

<style>

</style>