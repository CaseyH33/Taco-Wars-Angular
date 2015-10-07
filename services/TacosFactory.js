tacoWars.factory('TacosFactory', function TacosFactory() {
  var factory = {};
  factory.tacos = [
    {
      type: "Carne Asada",
      quantity: 0,
      minPrice: 25,
      maxPrice: 99,
      currentPrice: 0
    },
    {
      type: "Pollo",
      quantity: 0,
      minPrice: 23,
      maxPrice: 118,
      currentPrice: 0
    },
    {
      type: "Carnitas",
      quantity: 0,
      minPrice: 32,
      maxPrice: 148,
      currentPrice: 0
    },
    {
      type: "Al Pastor",
      quantity: 0,
      minPrice: 43,
      maxPrice: 198,
      currentPrice: 0
    },
    {
      type: "Adobada",
      quantity: 0,
      minPrice: 98,
      maxPrice: 374,
      currentPrice: 0
    },
    {
      type: "Chorizo",
      quantity: 0,
      minPrice: 224,
      maxPrice: 963,
      currentPrice: 0
    },
    {
      type: "Cabeza",
      quantity: 0,
      minPrice: 742,
      maxPrice: 3598,
      currentPrice: 0
    },
    {
      type: "Lengua",
      quantity: 0,
      minPrice: 697,
      maxPrice: 2963,
      currentPrice: 0
    },
    {
      type: "Tripas",
      quantity: 0,
      minPrice: 354,
      maxPrice: 3275,
      currentPrice: 0
    },
    {
      type: "Pescado",
      quantity: 0,
      minPrice: 2306,
      maxPrice: 4712,
      currentPrice: 0
    },
    {
      type: "Camarones",
      quantity: 0,
      minPrice: 2904,
      maxPrice: 8487,
      currentPrice: 0
    }
  ];
  return factory;
});
