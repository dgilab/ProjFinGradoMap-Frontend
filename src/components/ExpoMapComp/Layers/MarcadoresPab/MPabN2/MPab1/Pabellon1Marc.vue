<template>
	<g id="MP1_2">
		<g :id="MCafep1.id">
			<path v-for="pathCaf in MCafep1.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MEscenp1.id">
			<path v-for="pathMEs in MEscenp1.paths" :key="pathMEs.d" :id="pathMEs.id" :data-name="pathMEs.data_name" class="cls_14" :d="pathMEs.d"/>
			</g>
		<g :id="MStandsp1.id">
			<path v-for="pathStds in MStandsp1.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14" :d="pathStds.d"/>
		</g>
		<!-- <g id="MStandsp1">
			<path id="msp1_01" data-name="msp1 01" class="cls_14" d="M312.65,755.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_02" data-name="msp1 02" class="cls_14" d="M298.45,713.75c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_03" data-name="msp1 03" class="cls_14" d="M299.05,653.25c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_04" data-name="msp1 04" class="cls_14" d="M299.45,592.45c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_05" data-name="msp1 05" class="cls_14" d="M297.25,486.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_06" data-name="msp1 06" class="cls_14" d="M364.25,461.25c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_07" data-name="msp1 07" class="cls_14" d="M421.85,473.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_08" data-name="msp1 08" class="cls_14" d="M423.45,533.75c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_09" data-name="msp1 09" class="cls_14" d="M421.85,647.05c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_10" data-name="msp1 10" class="cls_14" d="M364.25,659.15c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_11" data-name="msp1 11" class="cls_14" d="M362.65,597.15c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_12" data-name="msp1 12" class="cls_14" d="M362.65,536.15c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
			<path id="msp1_13" data-name="msp1 13" class="cls_14" d="M362.65,494.45c-7.65-7.8-3.85-11.7-.04-11.7s7.64,3.9.04,11.7l-.26.04q-.09.01.26-.04Z"/>
		</g> -->
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon1Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
		}),
		...mapGetters([
			'MCafep1',
			'MEscenp1',
			'MStandsp1',
		]),
	},
	components: {
	}
}
</script>

<style>

</style>