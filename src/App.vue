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
			products: [
				{
					id: 'p1',
					image: 'https://m.media-amazon.com/images/I/91hspw4TUaS.jpg',
					title: 'Book Collection',
					description:
						'A collection of must-read books. All-time classics included!',
					price: 99.99,
				},
				{
					id: 'p2',
					image:
						'https://fgl.scene7.com/is/image/atmosphere/FGL_333244655_70_a-The-North-Face-Mountain-25-Tent-NF0A3S6MC8T?wid=800&hei=800&bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1',
					title: 'Mountain Tent',
					description: 'A tent for the ambitious outdoor tourist.',
					price: 129.99,
				},
				{
					id: 'p3',
					image:
						'https://img.freepik.com/premium-psd/paper-food-delivery-box-packaging-mockup_439185-5381.jpg?w=360',
					title: 'Food Box',
					description:
						'May be partially expired when it arrives but at least it is cheap!',
					price: 6.99,
				},
			],
			cart: { items: [], total: 0, qty: 0 },
		};
	},
	provide() {
		return {
			isLoggedIn: this.isLoggedIn,
			products: this.products,
			cart: this.cart,
			addProductToCart: this.addProductToCart,
			removeProductFromCart: this.removeProductFromCart,
			login: this.login,
			logout: this.logout,
		};
	},
	methods: {
		addProductToCart(productData) {
			const productInCartIndex = this.cart.items.findIndex(
				(ci) => ci.productId === productData.id
			);

			if (productInCartIndex >= 0) {
				this.cart.items[productInCartIndex].qty++;
			} else {
				const newItem = {
					productId: productData.id,
					title: productData.title,
					image: productData.image,
					price: productData.price,
					qty: 1,
				};
				this.cart.items.push(newItem);
			}
			this.cart.qty++;
			this.cart.total += productData.price;
		},

		removeProductFromCart(prodId) {
			const productInCartIndex = this.cart.items.findIndex(
				(cartItem) => cartItem.productId === prodId
			);
			const prodData = this.cart.items[productInCartIndex];
			this.cart.items.splice(productInCartIndex, 1);
			this.cart.qty -= prodData.qty;
			this.cart.total -= prodData.price * prodData.qty;
		},
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