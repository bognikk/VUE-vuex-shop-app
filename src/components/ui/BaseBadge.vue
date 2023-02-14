<template>
	<span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: ['mode', 'noMarginLeft'],
};
</script>

<style scoped>
.badge {
	display: inline-block;
	padding: 0.3rem 1.25rem;
	margin: 0 0.75rem;
	border-radius: 30px;
	color: #000;
	font-weight: 700;
	background-color: #ccc;
}

.nml {
	margin-left: 0;
}

.badge--highlight {
	background-color: #f0b800;
}

.badge--elegant {
	background-color: #b2abf2;
}
</style>