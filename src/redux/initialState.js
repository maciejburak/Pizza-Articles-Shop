export const initialState = {
  data: {
    products:[],
    /*flours: [
      {
        name: 'Polselli Viviance',
        value: 1,
        price: 5,
        url: 'https://abcfoodservice.it/26180-home_default/vivid-type-00-flour-cuffs-5-kg.jpg',
        description:
          '"00" type soft wheat flour. Vivace is a flour of superior quality that allows to obtain a dough that is always extensible and easy to work. Recommended for long leavening doughs, it is suitable for preparing both flat and pan pizza.',
        produced: 'Spain',
        type:'flour',
      },
      {
        name: 'Caputo Pizzeria',
        value: 1,
        price: 6,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREr4UjF_KIcDWL61McID0Ts2o1hHkRGW_DxKZ4UAST39-rmnUHECAM39D7jvjj3-QdwcZdmO4&usqp=CAc',
        description:
          'Professional pizza flour: this 100% wheat flour is a culinary essential, perfect for long fermentation baking. Originating in Italy, our family company is dedicated to the gold standard of Neapolitan pizza flour established since 1924',
        produced: 'Germany',
        type:'flour',
      },
      {
        name: 'Petra 5037',
        value: 1,
        price: 5,
        url: 'https://jakumammy.pl/1086-full_default/maka-do-pizzy-petra-5037-unica-125kg.jpg',
        description:
          'Soft wheat flour type 0, W 300-330 designed for medium and long maturation, it expresses its potential at its best with indirect processing while ensuring excellent results even with the direct method.',
        produced: 'Italy',
        type:'flour',
      },
      {
        name: 'Stragonni Pizzeria',
        value: 1,
        price: 8,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOJzCD2zxPDG2CIp7RHPUJJkt8HOIl4eXdjuXQGgt4yeU7IB_yjCFMq3ShTJGrLZggFgGF5Vk&usqp=CAc',
        description:
          'Developed in collaboration with the pizzaioli master chefs of the Associazione Verace Pizza Napoletana. Suitable for all direct and indirect doughs for Neapolitan pizza. Medium-high protein content, kneads into a smooth, supple dough that is easy to work',
        produced: 'Italy',
        type:'flour',
      },
    ],
    ovens: [
      {
        name: 'Koda',
        value: 1,
        price: 150,
        url: 'https://m.media-amazon.com/images/I/71RJNc1wotL._AC_SL1500_.jpg',
        description:
          'Cook Neapolitan pizza in 60 seconds with Koda oven, the restaurant-grade portable pizza oven for your garden. Simple to use and engineered without compromise for the best possible cooking results.',
        size: '62 x 39 x 29cm',
        type:'oven',
      },
      {
        name: 'Spicy Caliente',
        value: 1,
        price: 50,
        url: 'https://jakumammy.pl/737-large_default/spice-caliente.jpg',
        description:
          'Special electric oven ideal for cooking pizza . Spice Caliente has been designed and built with a cooking surface in pure refractory stone (diameter 32cm) aimed at obtaining the result of a round pizza at home as with the same stone used in pizza ovens.',
        size: '50 X 35 X 24 cm',
        type:'oven',
      },
      {
        name: 'F1 Pizza Oven',
        value: 1,
        price: 120,
        url: 'https://a.allegroimg.com/s1024/0cd098/8740018948d6820dcb3054e60ff1',
        description:
          'With the electric and for domestic use intended F1 Pizza Oven you can bake two pizzas on a certified standard refractory stone 50×50 cm. The inner cooking chamber is characterized by the presence of a series of lamps for an effective lightening.',
        size: '54 X 59 X 27 cm',
        type:'oven',
      },
      {
        name: 'DeliVita Oven',
        value: 1,
        price: 200,
        url: 'https://delivita.com/app/uploads/2020/09/Asset-4-HOME_TRNSP.png',
        description:
          'The Delivita portable pizza oven has been inspired by the most traditional Roman style ovens, yet it features the most modern manufacturing techniques. Designed and hand made in Yorkshire, this stunning pizza oven will look absolutely amazing in your garden, with its clean, simple lines and beautiful colour options making a statement of true unrivalled sophistication.',
        size: '65 × 59 × 35 cm',
        type:'oven',
      },
    ],
    acessories: [
      {
        name: 'Pizza Cut',
        value: 1,
        price: 5,
        url: 'https://img.joomcdn.net/11572f7dc5f204e0063f6620f97bb9957cbe9e93_original.jpeg',
        description:
          'Pizza knurling wheel with 100 mm blade blades. Straight blade made of steel, stainless steel, handle with a mold of steel.',
        type:'acessorie',
      },
      {
        name: 'Pizza Shovel',
        value: 1,
        price: 7,
        url: 'https://m.media-amazon.com/images/I/61OHX8B16eL._AC_SX466_.jpg',
        description:
          'Aluminum blade has a slimmer design than our wood peel options allowing it to more easily slide under, lift or flip whatever is in the oven. Perfect for lifting pizzas, cakes, bread, cupcakes or muffin pans.',
        type:'acessorie',
      },
      {
        name: 'Pizza Landing Net',
        value: 1,
        price: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uaGHTetvOo-Dbh9IyzDfUDwfTyps-jh1ow&usqp=CAU',
        description:
          'Gi Metal Professional with a diameter of 30 cm is made of aluminum. Reinforced blind rim made of one piece of aluminum and crosswise interlaced wires. The size of the pizza nets may vary by 2.5%.',
        type:'acessorie',
      },
      {
        name: 'Pizza Termometr',
        value: 1,
        price: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjF3wRsNog858Jz5ptjncXWOTr4wxhnJPplELYo3ANnbNbpyF56UwPlbZf5mHj_CPbO3Ep8Qw&usqp=CAc',
        description:
          'Laser thermometers / infrared thermometers allow you to measure the temperature without touching the measured object. Measuring range -60 ° C - +1000 ° C',
        type:'acessorie',
      },
    ],*/
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
