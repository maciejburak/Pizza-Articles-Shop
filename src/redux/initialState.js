export const initialState = {
  data: {
    products: [],
    pictures: {
      ovensHeader:
        'https://cdn.thewirecutter.com/wp-content/media/2021/06/pizzaaovens-2048px-8752-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
      floursHeader:
        'https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg',
      acessoriesHeader:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZegVyIzvzjZsy43aNG1yrl1FGXhsj2_8n1w&usqp=CAU',
    },
    loading: {
      active: false,
      error: false,
    },
  },
  order: {
    basket: [],
    description: '',
  },
};
