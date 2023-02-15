<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
	data() {
		return {
			isLoggedIn: false,
		};
	},
	methods: {
		login() {
			this.isLoggedIn = true;
		},
		logout() {
			this.isLoggedIn = false;
		},
	},
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

button {
	padding: 0.5rem 1.5rem;
	border: 1px solid #35495e;
	border-radius: 30px;
	color: #fff;
	font: inherit;
	font-weight: 700;
	background-color: #35495e;
	cursor: pointer;

	&:hover,
	&:active {
		border: 1px solid #42b883;
		color: #35495e;
		background-color: #42b883;
	}
}
</style>