<template>
	<section>
		<h2>Your Cart</h2>
		<h3>
			Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge>
		</h3>
		<ul>
			<cart-item
				v-for="item in cartItems"
				:key="item.productId"
				:prod-id="item.productId"
				:title="item.title"
				:image="item.image"
				:price="item.price"
				:qty="item.qty"
			></cart-item>
		</ul>
	</section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
	components: {
		CartItem,
	},
	computed: {
		cartTotal() {
			return this.$store.getters['cart/totalSum'].toFixed(2);
		},
		cartItems() {
			return this.$store.getters['cart/products'];
		},
	},
};
</script>

<style lang="scss" scoped>
section {
	max-width: 40rem;
	margin: 2rem auto;

	h2 {
		padding-bottom: 1rem;
		border-bottom: 2px solid #ccc;
		color: #292929;
		text-align: center;
	}
	h3 {
		text-align: center;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
}
</style>