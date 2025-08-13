import { v4 as uuidv4 } from "uuid";

export const Products = {
  Cloths: {
    Polos: [
      {
        id: uuidv4(),
        name: "Hanes Men",
        image:
          "https://m.media-amazon.com/images/I/51iQLUgUMzL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        quantity: 0,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "England Patriot",
        image:
          "https://fanatics.frgimages.com/new-england-patriots/mens-mitchell-and-ness-tom-brady-white-new-england-patriots-2000-legacy-authentic-jersey_ss5_p-203193843+u-1fo3txylvbvnaay8htt0+v-tfzr5skts5sopwtsz7dr.jpg?_hv=2&w=600",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
    Tshirt: [
      {
        id: uuidv4(),
        name: "3-Stripes Polo",
        image:
          "https://res.cloudinary.com/dtc2q8arn/image/upload/v1721129698/Go%20Live%20images/II5776/II5776_5_APPAREL_On_Model_Back_View_grey_eiiukd.jpg",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Santos Retro",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Pants: {
    Men: [
      {
        id: uuidv4(),
        name: "Baggy jean",
        image:
          "https://pbs.twimg.com/media/GxmIhfrXoAA-qY1?format=jpg&name=medium",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,

        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Cargo Pant",
        image:
          "https://pbs.twimg.com/media/GwzcmUyWwAAEZME?format=jpg&name=4096x4096",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
    Women: [
      {
        id: uuidv4(),
        name: "Heathyoga",
        image:
          "https://m.media-amazon.com/images/I/61VDRD5sw7L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,

        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Hungson",
        image:
          "https://m.media-amazon.com/images/I/51hv72zIDHL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Jersey: {
    Football: [
      {
        id: uuidv4(),
        name: "Liverpool Retro",
        image:
          "https://pbs.twimg.com/media/GyNevbfWgAEi45t?format=jpg&name=medium",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Real Madrid Retro",
        image:
          "https://pbs.twimg.com/media/GyLYrWmWsAAMj7W?format=jpg&name=medium",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
    Basketball: [
      {
        id: uuidv4(),
        name: "The Fresh Prince of Bel Air",
        image:
          "https://m.media-amazon.com/images/I/71BJISayXmL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Tour Merch",
        image:
          "https://m.media-amazon.com/images/I/81rUjJxb0wL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Caps: {
    Unisex: [
      {
        id: uuidv4(),
        name: "NPJY Baseball Cap",
        image:
          "https://m.media-amazon.com/images/I/71wJKbKtgYL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Cream", "Khaki"],
        price: 130,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Newsboy Cap",
        image:
          "https://m.media-amazon.com/images/I/615H2fDU96L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy", "White"],
        price: 85,
        quantity: 1,
        amount: 0,
      },
      {
        id: uuidv4(),
        name: "Adjustable Baseball Cap",
        image:
          "https://m.media-amazon.com/images/I/71OHDmYq28L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Red", "Black"],
        price: 75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Shorts: {
    Unisex: [
      {
        id: uuidv4(),
        name: "AIMPACT Mens",
        image:
          "https://m.media-amazon.com/images/I/813zxcLK9lL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Cream", "Khaki"],
        price: 130,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "MIER",
        image:
          "https://m.media-amazon.com/images/I/8113xOF7HML._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy", "White"],
        price: 85,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Mammgic",
        image:
          "https://m.media-amazon.com/images/I/71jo4YhSgeL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Red", "Black"],
        price: 75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Shoes: {
    Unisex: [
      {
        id: uuidv4(),
        name: "Falcon 5 Sneaker",
        image:
          "https://m.media-amazon.com/images/I/71DZ2p2173L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Cream", "Khaki"],
        price: 130,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Men Swift Run Legacy",
        image:
          "https://m.media-amazon.com/images/I/71ozLnN9+gL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy", "White"],
        price: 85,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Under Armour",
        image:
          "https://m.media-amazon.com/images/I/51QbiMp2w4L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Red", "Black"],
        price: 75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Jackets: {
    Unisex: [
      {
        id: uuidv4(),
        name: "ZAPT 1000D",
        image:
          "https://m.media-amazon.com/images/I/61tQhK2tsTL._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Cream", "Khaki"],
        price: 130,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Beleafs Men",
        image:
          "https://m.media-amazon.com/images/I/61Wlbr+wv5L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Navy", "White"],
        price: 85,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Legendary Whitetails",
        image:
          "https://m.media-amazon.com/images/I/71kiKJpww7L._AC_UL480_FMwebp_QL65_.jpg",
        colors: ["Red", "Black"],
        price: 75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },
};

export const DiscountedProduct = {
  Cloths: {
    Polos: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
    Tshirt: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Pants: {
    Men: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Black", "Midnight Blue"],
        price: 50,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
    Women: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxfianKW8AAIlRS?format=jpg&name=small",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxK-KyFW8AADe6J?format=jpg&name=small",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Jersey: {
    Football: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxfianKW8AAIlRS?format=jpg&name=small",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxK-KyFW8AADe6J?format=jpg&name=small",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
    Basketball: [
      {
        id: uuidv4(),
        name: "Classic Navy Suit",
        image:
          "https://pbs.twimg.com/media/GxfianKW8AAIlRS?format=jpg&name=small",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Slim Fit Black Suit",
        image:
          "https://pbs.twimg.com/media/GxK-KyFW8AADe6J?format=jpg&name=small",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
    ],
  },

  Caps: {
    Unisex: [
      {
        id: uuidv4(),
        name: "Vintage Cream Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Modern Navy Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 0,
      },
      {
        id: uuidv4(),
        name: "Sporty Red Cap",
        image:
          "https://pbs.twimg.com/media/Gw5Gs-KXEAEjLoV?format=jpg&name=large",
        colors: ["Red", "Black"],
        price: 75,
        discountPercent: 15,
        discountPrice: 63.75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Shorts: {
    Unisex: [
      {
        id: uuidv4(),
        name: "Vintage Cream Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Modern Navy Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Sporty Red Cap",
        image:
          "https://pbs.twimg.com/media/Gw5Gs-KXEAEjLoV?format=jpg&name=large",
        colors: ["Red", "Black"],
        price: 75,
        discountPercent: 15,
        discountPrice: 63.75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Shoes: {
    Unisex: [
      {
        id: uuidv4(),
        name: "Vintage Cream Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Modern Navy Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Sporty Red Cap",
        image:
          "https://pbs.twimg.com/media/Gw5Gs-KXEAEjLoV?format=jpg&name=large",
        colors: ["Red", "Black"],
        price: 75,
        discountPercent: 15,
        discountPrice: 63.75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },

  Jackets: {
    Unisex: [
      {
        id: uuidv4(),
        name: "Vintage Cream Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Modern Navy Cap",
        image:
          "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Sporty Red Cap",
        image:
          "https://pbs.twimg.com/media/Gw5Gs-KXEAEjLoV?format=jpg&name=large",
        colors: ["Red", "Black"],
        price: 75,
        discountPercent: 15,
        discountPrice: 63.75,
        quantity: 1,
        amount: 63.75,
      },
    ],
  },
};
