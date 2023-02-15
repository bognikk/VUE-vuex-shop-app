<template>
	<li class="product">
		<div class="product__data">
			<div class="product__image">
				<img :src="image" :alt="title" />
			</div>
			<div class="product__text">
				<h3>{{ title }}</h3>
				<base-badge mode="highlight" :no-margin-left="true">
					<h4>${{ price }}</h4>
				</base-badge>
				<p>{{ description }}</p>
			</div>
		</div>
		<div class="product__actions">
			<button @click="addToCart">Add to Cart</button>
		</div>
	</li>
</template>

<script>
export default {
	props: ['id', 'image', 'title', 'price', 'description'],
	methods: {
		addToCart() {
			this.$store.dispatch('cart/addToCart', {
				id: this.id,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.product {
	padding: 1rem;
	margin: 1.5rem auto;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 12px;

	&__data {
		display: flex;
	}

	&__image {
		margin-right: 1rem;

		img {
			height: 10rem;
			width: 10rem;
			object-fit: cover;
		}
	}

	&__text h3 {
		margin: 0 0 0.5rem 0;
	}

	&__text h4 {
		margin: 0;
	}

	&__actions {
		text-align: center;
	}
}
</style>