<template>
	<header>
		<h1>
			<router-link to="/">VueShop</router-link>
		</h1>
		<nav>
			<ul>
				<li>
					<router-link to="/products">Products</router-link>
				</li>
				<li>
					<router-link to="/cart">Cart</router-link>
					<base-badge mode="elegant">{{ cartQuantity }}</base-badge>
				</li>
				<li v-if="isLoggedIn">
					<router-link to="/admin">Admin</router-link>
				</li>
			</ul>
		</nav>
		<div>
			<button v-if="!isLoggedIn" @click="login">Login</button>
			<button v-if="isLoggedIn" @click="logout">Logout</button>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		cartQuantity() {
			return this.$store.getters['cart/quantity'];
		},
		isLoggedIn() {
			return this.$store.getters.isAuthenticated;
		},
	},
	methods: {
		login() {
			this.$store.dispatch('login');
		},
		logout() {
			this.$store.dispatch('logout');
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	margin: 0 10%;
	background-color: white;

	ul {
		display: flex;
		justify-self: center;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin: 0 1rem;
		}
	}

	a {
		padding-bottom: 0.25rem;
		border-bottom: 2px solid transparent;
		font-weight: bold;
		color: #35495e;
		text-decoration: none;
		&:hover,
		&:active,
		&.router-link-active {
			border-color: #42b883;
			color: #42b883;
		}
	}
}
</style>