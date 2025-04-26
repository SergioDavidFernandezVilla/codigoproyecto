const ProductsAPi = [
  {
    id: 1,
    name: "Camisa de manga corta",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2024/04/17/18/40/ai-generated-8702726_1280.jpg",
    image_alt: "camisa-corta-para-hombre",
    image_slug: "camisa-de-manga-corta-hombre",
    description: "Camisa de manga corta para hombre",
  },
  {
    id: 2,
    name: "Camisa de manga larga",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2024/08/30/11/45/ai-generated-9009134_1280.jpg",
    image_alt: "camisa-larga-para-hombre",
    image_slug: "camisa-de-manga-larga-hombre",
    description:
      "Camisa de manga larga para hombre, ideal para cualquier ocasión.",
  },
  {
    id: 3,
    name: "Pantalón de Vestir",
    price: 250,
    image:
      "https://cdn.pixabay.com/photo/2014/08/20/11/24/jeans-422967_1280.jpg",
    image_alt: "pantalon-de-vestir",
    image_slug: "pantalon-de-vestir",
    description: "Pantalón de vestir elegante, perfecto para eventos formales.",
  },
  {
    id: 4,
    name: "Zapatos Casuales",
    price: 350,
    image:
      "https://cdn.pixabay.com/photo/2019/10/29/19/42/shoes-4587588_1280.jpg",
    image_alt: "zapatos-casuales",
    image_slug: "zapatos-casuales",
    description: "Zapatos casuales para el día a día, cómodos y con estilo.",
  },
  {
    id: 5,
    name: "Gorra de Béisbol",
    price: 80,
    image: "https://cdn.pixabay.com/photo/2015/02/10/19/19/cap-631124_1280.jpg",
    image_alt: "gorra-de-beisbol",
    image_slug: "gorra-de-beisbol",
    description: "Gorra de béisbol clásica, ideal para protegerse del sol.",
  },
  {
    id: 6,
    name: "Bolso de Mano",
    price: 220,
    image:
      "https://cdn.pixabay.com/photo/2016/03/02/07/36/bag-1231143_1280.jpg",
    image_alt: "bolso-de-mano",
    image_slug: "bolso-de-mano",
    description:
      "Bolso de mano elegante y práctico, perfecto para llevar tus esenciales.",
  },
  {
    id: 7,
    name: "Vestido de Verano",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2015/06/19/23/06/dress-815832_1280.jpg",
    image_alt: "vestido-de-verano",
    image_slug: "vestido-de-verano",
    description: "Vestido ligero y fresco para los días de verano.",
  },
  {
    id: 8,
    name: "Chaqueta de Cuero",
    price: 450,
    image:
      "https://cdn.pixabay.com/photo/2015/04/07/18/49/jacket-712299_1280.jpg",
    image_alt: "chaqueta-de-cuero",
    image_slug: "chaqueta-de-cuero",
    description: "Chaqueta de cuero de alta calidad, un clásico atemporal.",
  },
  {
    id: 9,
    name: "Reloj de Pulsera",
    price: 300,
    image:
      "https://cdn.pixabay.com/photo/2015/01/21/14/14/wrist-watch-606014_1280.jpg",
    image_alt: "reloj-de-pulsera",
    image_slug: "reloj-de-pulsera",
    description: "Reloj de pulsera elegante y funcional.",
  },
  {
    id: 10,
    name: "Bufanda de Invierno",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2017/01/26/11/00/winter-2010627_1280.jpg",
    image_alt: "bufanda-de-invierno",
    image_slug: "bufanda-de-invierno",
    description: "Bufanda cálida para protegerte del frío invierno.",
  },
  {
    id: 11,
    name: "Zapatillas Deportivas",
    price: 320,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    image_alt: "zapatillas-deportivas",
    image_slug: "zapatillas-deportivas",
    description:
      "Zapatillas deportivas cómodas y duraderas para cualquier actividad.",
  },
  {
    id: 12,
    name: "Cinturón de Cuero",
    price: 150,
    image:
      "https://cdn.pixabay.com/photo/2017/02/26/14/47/belt-2101149_1280.jpg",
    image_alt: "cinturon-de-cuero",
    image_slug: "cinturon-de-cuero",
    description: "Cinturón de cuero elegante para complementar tu atuendo.",
  },
  {
    id: 13,
    name: "Lentes de Sol",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2016/03/26/21/52/sunglasses-1281584_1280.jpg",
    image_alt: "lentes-de-sol",
    image_slug: "lentes-de-sol",
    description: "Lentes de sol con estilo para proteger tus ojos del sol.",
  },
  {
    id: 14,
    name: "Sombrero de Paja",
    price: 70,
    image:
      "https://cdn.pixabay.com/photo/2018/08/01/09/05/hat-3576948_1280.jpg",
    image_alt: "sombrero-de-paja",
    image_slug: "sombrero-de-paja",
    description: "Sombrero de paja fresco y ligero para los días soleados.",
  },
  {
    id: 15,
    name: "Mochila Urbana",
    price: 280,
    image:
      "https://cdn.pixabay.com/photo/2017/01/09/14/39/backpack-1966041_1280.jpg",
    image_alt: "mochila-urbana",
    image_slug: "mochila-urbana",
    description:
      "Mochila urbana resistente y con compartimentos para tus objetos.",
  },
  {
    id: 16,
    name: "Jersey de Lana",
    price: 220,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/sweater-1835098_1280.jpg",
    image_alt: "jersey-de-lana",
    image_slug: "jersey-de-lana",
    description: "Jersey de lana cálido y cómodo para los días fríos.",
  },
  {
    id: 17,
    name: "Pantalones Cortos",
    price: 130,
    image:
      "https://cdn.pixabay.com/photo/2016/07/22/03/00/shorts-1534237_1280.jpg",
    image_alt: "pantalones-cortos",
    image_slug: "pantalones-cortos",
    description: "Pantalones cortos frescos y ligeros para el verano.",
  },
  {
    id: 18,
    name: "Botas de Invierno",
    price: 400,
    image:
      "https://cdn.pixabay.com/photo/2014/10/22/17/35/boots-498742_1280.jpg",
    image_alt: "botas-de-invierno",
    image_slug: "botas-de-invierno",
    description:
      "Botas cálidas y resistentes para mantener tus pies secos y cómodos en invierno.",
  },
  {
    id: 19,
    name: "Camiseta Estampada",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2017/08/02/15/24/t-shirt-2571492_1280.jpg",
    image_alt: "camiseta-estampada",
    image_slug: "camiseta-estampada",
    description: "Camiseta con un diseño moderno y estampado.",
  },
  {
    id: 20,
    name: "Falda Plisada",
    price: 160,
    image:
      "https://cdn.pixabay.com/photo/2022/07/10/17/06/pleated-skirt-7313437_1280.jpg",
    image_alt: "falda-plisada",
    image_slug: "falda-plisada",
    description: "Falda plisada elegante, perfecta para cualquier ocasión.",
  },
  {
    id: 21,
    name: "Pantalón Vaquero",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2014/08/20/11/24/jeans-422967_1280.jpg",
    image_alt: "pantalon-vaquero",
    image_slug: "pantalon-vaquero",
    description: "Pantalón vaquero clásico, un básico en tu guardarropa.",
  },
  {
    id: 22,
    name: "Vestido de Noche",
    price: 380,
    image:
      "https://cdn.pixabay.com/photo/2014/12/05/22/26/dress-558551_1280.jpg",
    image_alt: "vestido-de-noche",
    image_slug: "vestido-de-noche",
    description: "Vestido de noche sofisticado, ideal para eventos especiales.",
  },
  {
    id: 23,
    name: "Zapatillas de Lona",
    price: 140,
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/22/22/shoes-1284458_1280.jpg",
    image_alt: "zapatillas-de-lona",
    image_slug: "zapatillas-de-lona",
    description: "Zapatillas de lona cómodas, perfectas para un look casual.",
  },
  {
    id: 24,
    name: "Abrigo de Invierno",
    price: 480,
    image:
      "https://cdn.pixabay.com/photo/2016/10/26/05/00/coat-1770942_1280.jpg",
    image_alt: "abrigo-de-invierno",
    image_slug: "abrigo-de-invierno",
    description: "Abrigo grueso para protegerte del frío más intenso.",
  },
  {
    id: 25,
    name: "Traje Formal",
    price: 550,
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/14/19/fashion-2591518_1280.jpg",
    image_alt: "traje-formal",
    image_slug: "traje-formal",
    description: "Traje elegante para eventos formales, con diseño clásico.",
  },
  {
    id: 26,
    name: "Camiseta sin Mangas",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2014/10/22/20/21/t-shirt-498956_1280.jpg",
    image_alt: "camiseta-sin-mangas",
    image_slug: "camiseta-sin-mangas",
    description: "Camiseta fresca sin mangas, ideal para el verano.",
  },
  {
    id: 27,
    name: "Bolso de Hombro",
    price: 240,
    image:
      "https://cdn.pixabay.com/photo/2016/03/02/07/36/bag-1231143_1280.jpg",
    image_alt: "bolso-de-hombro",
    image_slug: "bolso-de-hombro",
    description: "Bolso de hombro práctico y elegante para el día a día.",
  },
  {
    id: 28,
    name: "Pantalón Chino",
    price: 190,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/06/48/pants-4821338_1280.jpg",
    image_alt: "pantalon-chino",
    image_slug: "pantalon-chino",
    description:
      "Pantalón chino cómodo y versátil, perfecto para cualquier ocasión.",
  },
  {
    id: 29,
    name: "Zapatos de Tacón",
    price: 320,
    image:
      "https://cdn.pixabay.com/photo/2019/09/17/19/01/high-heels-4484100_1280.jpg",
    image_alt: "zapatos-de-tacon",
    image_slug: "zapatos-de-tacon",
    description:
      "Zapatos de tacón elegantes para destacar en cualquier evento.",
  },
  {
    id: 30,
    name: "Sudadera con Capucha",
    price: 170,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/42/hoodie-1853259_1280.jpg",
    image_alt: "sudadera-con-capucha",
    image_slug: "sudadera-con-capucha",
    description: "Sudadera con capucha cómoda y abrigadora para uso diario.",
  },
  {
    id: 31,
    name: "Bañador de Playa",
    price: 110,
    image:
      "https://cdn.pixabay.com/photo/2016/09/17/00/00/swimwear-1674821_1280.jpg",
    image_alt: "bañador-de-playa",
    image_slug: "bañador-de-playa",
    description:
      "Bañador ligero y cómodo, ideal para disfrutar del sol y el agua.",
  },
  {
    id: 32,
    name: "Sandalias de Verano",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2016/08/11/10/30/sandals-1585139_1280.jpg",
    image_alt: "sandalias-de-verano",
    image_slug: "sandalias-de-verano",
    description:
      "Sandalias frescas y ligeras, perfectas para los días de verano.",
  },
  {
    id: 33,
    name: "Pijama de Algodón",
    price: 150,
    image:
      "https://cdn.pixabay.com/photo/2016/05/29/01/14/pajamas-1422386_1280.jpg",
    image_alt: "pijama-de-algodon",
    image_slug: "pijama-de-algodon",
    description: "Pijama suave y cómodo, hecho de algodón de alta calidad.",
  },
  {
    id: 34,
    name: "Guantes de Cuero",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2016/12/12/20/55/leather-gloves-1902784_1280.jpg",
    image_alt: "guantes-de-cuero",
    image_slug: "guantes-de-cuero",
    description: "Guantes de cuero elegantes, perfectos para el invierno.",
  },
  {
    id: 35,
    name: "Pañuelo de Seda",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/01/autumn-1839362_1280.jpg",
    image_alt: "pañuelo-de-seda",
    image_slug: "pañuelo-de-seda",
    description: "Pañuelo ligero y elegante, ideal para cualquier atuendo.",
  },
  {
    id: 36,
    name: "Blusa de Flores",
    price: 130,
    image:
      "https://cdn.pixabay.com/photo/2016/08/27/18/39/blouse-1624288_1280.jpg",
    image_alt: "blusa-de-flores",
    image_slug: "blusa-de-flores",
    description:
      "Blusa de flores con un diseño vibrante, perfecta para la primavera.",
  },
  {
    id: 37,
    name: "Cazadora Vaquera",
    price: 250,
    image:
      "https://cdn.pixabay.com/photo/2017/09/25/09/23/fashion-2785695_1280.jpg",
    image_alt: "cazadora-vaquera",
    image_slug: "cazadora-vaquera",
    description: "Cazadora vaquera clásica, un esencial en tu armario.",
  },
  {
    id: 38,
    name: "Leggins Deportivos",
    price: 140,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    image_alt: "leggins-deportivos",
    image_slug: "leggins-deportivos",
    description: "Leggins cómodos y elásticos, perfectos para el deporte.",
  },
  {
    id: 39,
    name: "Chaleco Acolchado",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2016/10/26/05/00/coat-1770942_1280.jpg",
    image_alt: "chaleco-acolchado",
    image_slug: "chaleco-acolchado",
    description: "Chaleco acolchado ligero y cálido, ideal para entretiempo.",
  },
  {
    id: 40,
    name: "Bolso Bandolera",
    price: 190,
    image:
      "https://cdn.pixabay.com/photo/2016/03/02/07/36/bag-1231143_1280.jpg",
    image_alt: "bolso-bandolera",
    image_slug: "bolso-bandolera",
    description: "Bolso bandolera práctico y de diseño moderno.",
  },
  {
    id: 41,
    name: "Gafas de Sol Aviador",
    price: 160,
    image:
      "https://cdn.pixabay.com/photo/2016/03/26/21/52/sunglasses-1281584_1280.jpg",
    image_alt: "gafas-de-sol-aviador",
    image_slug: "gafas-de-sol-aviador",
    description: "Gafas de sol con diseño aviador, un clásico con estilo.",
  },
  {
    id: 42,
    name: "Gorro de Lana",
    price: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/01/woman-1867636_1280.jpg",
    image_alt: "gorro-de-lana",
    image_slug: "gorro-de-lana",
    description: "Gorro de lana suave y cálido para protegerte del frío.",
  },
  {
    id: 43,
    name: "Pantalón Cargo",
    price: 210,
    image:
      "https://cdn.pixabay.com/photo/2016/08/11/11/35/man-1585294_1280.jpg",
    image_alt: "pantalon-cargo",
    image_slug: "pantalon-cargo",
    description: "Pantalón cargo resistente y con múltiples bolsillos.",
  },
  {
    id: 44,
    name: "Jersey de Cuello Alto",
    price: 230,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/sweater-1835098_1280.jpg",
    image_alt: "jersey-de-cuello-alto",
    image_slug: "jersey-de-cuello-alto",
    description: "Jersey de cuello alto cálido y elegante para el invierno.",
  },
  {
    id: 45,
    name: "Camisa Oxford",
    price: 170,
    image:
      "https://cdn.pixabay.com/photo/2015/05/15/12/48/shirt-768699_1280.jpg",
    image_alt: "camisa-oxford",
    image_slug: "camisa-oxford",
    description: "Camisa Oxford clásica, perfecta para un look casual-formal.",
  },
  {
    id: 46,
    name: "Falda Vaquera",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2022/05/02/18/43/fashion-7170806_1280.jpg",
    image_alt: "falda-vaquera",
    image_slug: "falda-vaquera",
    description: "Falda vaquera versátil y moderna para cualquier ocasión.",
  },
  {
    id: 47,
    name: "Zapatillas Urbanas",
    price: 240,
    image:
      "https://cdn.pixabay.com/photo/2019/10/29/19/42/shoes-4587588_1280.jpg",
    image_alt: "zapatillas-urbanas",
    image_slug: "zapatillas-urbanas",
    description: "Zapatillas urbanas cómodas y con estilo para el día a día.",
  },
  {
    id: 48,
    name: "Vestido Boho",
    price: 270,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/02/38/woman-1867606_1280.jpg",
    image_alt: "vestido-boho",
    image_slug: "vestido-boho",
    description: "Vestido bohemio, perfecto para un look relajado y elegante.",
  },
  {
    id: 49,
    name: "Reloj Deportivo",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2016/01/19/16/46/watch-1149577_1280.jpg",
    image_alt: "reloj-deportivo",
    image_slug: "reloj-deportivo",
    description:
      "Reloj deportivo resistente y funcional para actividades al aire libre.",
  },
  {
    id: 50,
    name: "Traje de Baño Entero",
    price: 160,
    image:
      "https://cdn.pixabay.com/photo/2022/04/28/07/39/beachwear-7160384_1280.jpg",
    image_alt: "traje-de-baño-entero",
    image_slug: "traje-de-baño-entero",
    description:
      "Traje de baño entero cómodo y elegante para tus días de playa.",
  },
  {
    id: 51,
    name: "Camiseta de Tirantes",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/tank-top-1835038_1280.jpg",
    image_alt: "camiseta-de-tirantes",
    image_slug: "camiseta-de-tirantes",
    description: "Camiseta de tirantes ligera y fresca para el verano.",
  },
  {
    id: 52,
    name: "Chaqueta Impermeable",
    price: 300,
    image:
      "https://cdn.pixabay.com/photo/2016/04/05/16/39/coat-1309564_1280.jpg",
    image_alt: "chaqueta-impermeable",
    image_slug: "chaqueta-impermeable",
    description: "Chaqueta impermeable, ideal para protegerte de la lluvia.",
  },
  {
    id: 53,
    name: "Mono Largo",
    price: 260,
    image:
      "https://cdn.pixabay.com/photo/2020/07/07/12/52/fashion-5381772_1280.jpg",
    image_alt: "mono-largo",
    image_slug: "mono-largo",
    description: "Mono largo cómodo y estiloso para cualquier ocasión.",
  },
  {
    id: 54,
    name: "Riñonera Deportiva",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/17/00/fanny-pack-1853507_1280.jpg",
    image_alt: "riñonera-deportiva",
    image_slug: "riñonera-deportiva",
    description: "Riñonera deportiva práctica y ligera para tus pertenencias.",
  },
  {
    id: 55,
    name: "Poncho de Lana",
    price: 190,
    image:
      "https://cdn.pixabay.com/photo/2017/01/08/21/48/poncho-1963936_1280.jpg",
    image_alt: "poncho-de-lana",
    image_slug: "poncho-de-lana",
    description: "Poncho de lana cálido y cómodo para el invierno.",
  },
  {
    id: 56,
    name: "Zapatillas de casa",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2019/12/15/16/57/slippers-4697072_1280.jpg",
    image_alt: "zapatillas-de-casa",
    image_slug: "zapatillas-de-casa",
    description: "Zapatillas de estar por casa, cómodas y suaves.",
  },
  {
    id: 57,
    name: "Bota de senderismo",
    price: 400,
    image:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/hiking-boots-2733307_1280.jpg",
    image_alt: "bota-de-senderismo",
    image_slug: "bota-de-senderismo",
    description: "Bota cómoda y resistente para el senderismo.",
  },
  {
    id: 58,
    name: "Gorro de pescador",
    price: 40,
    image:
      "https://cdn.pixabay.com/photo/2016/09/08/01/05/bucket-hat-1653766_1280.jpg",
    image_alt: "gorro-de-pescador",
    image_slug: "gorro-de-pescador",
    description: "Gorro para proteger del sol.",
  },
  {
    id: 59,
    name: "Botas de montar",
    price: 320,
    image:
      "https://cdn.pixabay.com/photo/2015/03/13/14/17/boots-671969_1280.jpg",
    image_alt: "botas-de-montar",
    image_slug: "botas-de-montar",
    description: "Botas cómodas para montar a caballo.",
  },
  {
    id: 60,
    name: "Vestido de flores",
    price: 280,
    image:
      "https://cdn.pixabay.com/photo/2016/09/01/09/54/woman-1635938_1280.jpg",
    image_alt: "vestido-de-flores",
    image_slug: "vestido-de-flores",
    description: "Vestido elegante para esta temporada.",
  },
  {
    id: 61,
    name: "Zapatillas de trail",
    price: 260,
    image:
      "https://cdn.pixabay.com/photo/2017/09/27/16/08/running-2792461_1280.jpg",
    image_alt: "zapatillas-de-trail",
    image_slug: "zapatillas-de-trail",
    description: "Zapatilla cómoda para ir por la montaña",
  },
  {
    id: 62,
    name: "Camisa de lino",
    price: 140,
    image:
      "https://cdn.pixabay.com/photo/2016/07/19/06/35/shirt-1527691_1280.jpg",
    image_alt: "camisa-de-lino",
    image_slug: "camisa-de-lino",
    description: "Camisa de lino fresca y cómoda para esta temporada",
  },
  {
    id: 63,
    name: "Pantalon de lino",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2016/08/05/13/10/man-1572896_1280.jpg",
    image_alt: "pantalon-de-lino",
    image_slug: "pantalon-de-lino",
    description: "Pantalon de lino para estar fresco y cómodo",
  },
  {
    id: 64,
    name: "Bolso de mano",
    price: 230,
    image: "https://cdn.pixabay.com/photo/2014/12/02/14/44/bag-554146_1280.jpg",
    image_alt: "bolso-de-mano",
    image_slug: "bolso-de-mano",
    description: "Bolso de mano elegante y práctico.",
  },
  {
    id: 65,
    name: "Sujetador deportivo",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2016/08/11/10/26/bra-1585127_1280.jpg",
    image_alt: "sujetador-deportivo",
    image_slug: "sujetador-deportivo",
    description: "Sujetador comodo para hacer deporte.",
  },
  {
    id: 66,
    name: "Traje de gala",
    price: 600,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/19/07/gown-1835462_1280.jpg",
    image_alt: "traje-de-gala",
    image_slug: "traje-de-gala",
    description: "Traje elegante para una noche especial.",
  },
];

export default ProductsAPi;
