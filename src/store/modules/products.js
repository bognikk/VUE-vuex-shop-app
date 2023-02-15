export default {
  namespaced: true,
  state() {
    return {
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
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
