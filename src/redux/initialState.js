export const initialState = {
  data: {
    flours: [
      {
        name: 'Polselli Viviance',
        value: 1,
        price: 5,
        url: 'https://abcfoodservice.it/26180-home_default/vivid-type-00-flour-cuffs-5-kg.jpg',
      },
      {
        name: 'Caputo Pizzeria',
        value: 1,
        price: 6,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREr4UjF_KIcDWL61McID0Ts2o1hHkRGW_DxKZ4UAST39-rmnUHECAM39D7jvjj3-QdwcZdmO4&usqp=CAc',
      },
      {
        name: 'Petra 5037',
        value: 1,
        price: 5,
        url: 'https://jakumammy.pl/1086-full_default/maka-do-pizzy-petra-5037-unica-125kg.jpg',
      },
      {
        name: 'Stragonni Pizzeria',
        value: 1,
        price: 8,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOJzCD2zxPDG2CIp7RHPUJJkt8HOIl4eXdjuXQGgt4yeU7IB_yjCFMq3ShTJGrLZggFgGF5Vk&usqp=CAc',
      },
    ],
    ovens: [
      {
        name: 'Koda',
        value: 1,
        price: 150,
        url: 'https://m.media-amazon.com/images/I/71RJNc1wotL._AC_SL1500_.jpg',
      },
      {
        name: 'Spicy Caliente',
        value: 1,
        price: 50,
        url: 'https://jakumammy.pl/737-large_default/spice-caliente.jpg',
      },
      {
        name: 'F1 Pizza Oven',
        value: 1,
        price: 120,
        url: 'https://a.allegroimg.com/s1024/0cd098/8740018948d6820dcb3054e60ff1',
      },
      {
        name: 'DeliVita Oven',
        value: 1,
        price: 200,
        url: 'https://delivita.com/app/uploads/2020/09/Asset-4-HOME_TRNSP.png',
      },
    ],
    acessories: [
      {
        name: 'Pizza Cut',
        value: 1,
        price: 5,
        url: 'https://img.joomcdn.net/11572f7dc5f204e0063f6620f97bb9957cbe9e93_original.jpeg',
      },
      {
        name: 'Pizza Shovel',
        value: 1,
        price: 7,
        url: 'https://m.media-amazon.com/images/I/61OHX8B16eL._AC_SX466_.jpg',
      },
      {
        name: 'Pizza Landing Net',
        value: 1,
        price: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uaGHTetvOo-Dbh9IyzDfUDwfTyps-jh1ow&usqp=CAU',
      },
      {
        name: 'Pizza Termometr',
        value: 1,
        price: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjF3wRsNog858Jz5ptjncXWOTr4wxhnJPplELYo3ANnbNbpyF56UwPlbZf5mHj_CPbO3Ep8Qw&usqp=CAc',
      },
    ],
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
    basket: [],
  },
};
