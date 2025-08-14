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
        name: "BMW men's black polo",
        image:
          "https://ajebomarket.com/cdn/shop/files/a83ab56d19b5f3825b7e16b08d281741_cleanup.png?v=1753449296&width=360",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Motorsport black polo",
        image:
          "https://ajebomarket.com/cdn/shop/files/e64d18f33b0a641c269baada4c9b2ce1_cleanup.png?v=1753361584&width=360",
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
        name: "Manchester United",
        image:
          "https://pbs.twimg.com/media/GyD1-i3XYAAnS6v?format=jpg&name=large",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Chelsea",
        image:
          "https://pbs.twimg.com/media/GyTEHLJXYAQ1V7S?format=jpg&name=medium",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
      {
        id: uuidv4(),
        name: "Bayern",
        image:
          "https://pbs.twimg.com/media/GyI8VtRWoAAARbL?format=jpg&name=large",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
      {
        id: uuidv4(),
        name: "Santos",
        image:
          "https://pbs.twimg.com/media/GxhVc3FXsAAK6nn?format=jpg&name=medium",
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
        name: "Japan",
        image:
          "https://pbs.twimg.com/media/Gxuw9aFWkAAvbbX?format=jpg&name=900x900",
        colors: ["Navy Blue", "Charcoal Gray"],
        price: 120,
        discountPercent: 20,
        discountPrice: 96,
        quantity: 1,
        amount: 96,
      },
      {
        id: uuidv4(),
        name: "Chicago Bulls",
        image:
          "https://images.footballfanatics.com/chicago-bulls/chicago-bulls-scottie-pippen-1997/98-hardwood-classics-alternate-swingman-jersey-by-mitchell-and-ness-black-mens_ss4_p-11884905+u-k24u4k930yrqaosamsl8+v-38cf7bf9dbad4d18bbc3f941696d6d84.jpg?_hv=2&w=400",
        colors: ["Black", "Midnight Blue"],
        price: 150,
        discountPercent: 10,
        discountPrice: 135,
        quantity: 1,
        amount: 135,
      },
      {
        id: uuidv4(),
        name: "Kelvin Garnett",
        image:
          "https://images.footballfanatics.com/minnesota-timberwolves/mens-mitchell-and-ness-kevin-garnett-blue-minnesota-timberwolves-2003/04-hardwood-classics-nba-75th-anniversary-diamond-swingman-jersey_pi4563000_ff_4563506-9868c4f3c3f45f741c6f_full.jpg?_hv=2&w=400",
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
        name: "Awolowo/Ebuka Cap",
        image:
          "https://capkings.ng/wp-content/uploads/2024/08/IMG_1323-400x533.jpg",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Nike Dri-FIT club",
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bf6022f-1143-4531-9347-e5b00ec1db51/K+NK+DF+CLUB+CAP+US+CB+FTHLT.png",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 0,
      },
      {
        id: uuidv4(),
        name: "Gatsby Cap",
        image: "https://capkings.ng/wp-content/uploads/2024/03/a1-400x500.jpg",
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
        name: "PSG x Jordan 24/25 short sleeve training set",
        image:
          "https://ajebomarket.com/cdn/shop/files/1bc64bb2-feea-4544-938b-2100528b7e88.jpg?v=1737029647&width=360",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Essential Adidas Outfit",
        image:
          "https://ajebomarket.com/cdn/shop/files/a-12b0.jpg?v=1707066133&width=360",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Adidad Camouflage",
        image:
          "https://ajebomarket.com/cdn/shop/files/a-6b1.jpg?v=1707066135&width=360",
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
        name: "Converse Chuck",
        image:
          "https://ajebomarket.com/cdn/shop/files/44660_p_1493336742733.jpg?v=1707066464&width=360",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "Kenneth Cole",
        image:
          "https://ajebomarket.com/cdn/shop/files/m_5ca2e675bbf07659fb9fa6cb_1.jpg?v=1707062698&width=360",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Kenneth Cole Brown",
        image:
          "https://ajebomarket.com/cdn/shop/files/ajebo_0012_img_6267.jpg?v=1707065315&width=360",
        colors: ["Red", "Black"],
        price: 75,
        discountPercent: 15,
        discountPrice: 63.75,
        quantity: 1,
        amount: 63.75,
      },
      {
        id: uuidv4(),
        name: "Ben Sherman",
        image:
          "https://ajebomarket.com/cdn/shop/files/ben-sherman-black-madison-perforated-faux-leather-sneakers_1__1_4.jpg?v=1707063772&width=823",
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
        name: "HB Green Men's Lightweight",
        image:
          "https://ajebomarket.com/cdn/shop/files/8d389fc5d4ee146a4506860c13d7190f_cleanup.png?v=1753793484&width=360",
        colors: ["Cream", "Khaki"],
        price: 130,
        discountPercent: 30,
        discountPrice: 91,
        quantity: 1,
        amount: 91,
      },
      {
        id: uuidv4(),
        name: "GG White track jacket",
        image:
          "https://ajebomarket.com/cdn/shop/files/9b494028359d2c38c46b9f8c91ad03fc_cleanup.png?v=1753706768&width=360",
        colors: ["Navy", "White"],
        price: 85,
        discountPercent: 10,
        discountPrice: 76.5,
        quantity: 1,
        amount: 76.5,
      },
      {
        id: uuidv4(),
        name: "Burberry soft shell black",
        image:
          "https://ajebomarket.com/cdn/shop/files/17d_1.jpg?v=1707066914&width=360",
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
