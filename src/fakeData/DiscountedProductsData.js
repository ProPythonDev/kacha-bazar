
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));
  
 

export const PopularProductData = [
  {
    id: 1,
    title: "Organic Bell Pepper",
    unit: "22ct",
    description:
     "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 10,
    oldPrice: 12,
    sales: 17,
    sku: "9AF4E2",
    stock: 70,
    img: images['product-1.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "bell-pepper" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 2,
    title: "Rainbow Chard",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FD",
    stock: 0,
    img: images['product-2.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "rainbow-chard" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 3,
    title: "Clementine",
    unit: "5ct",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FC",
    stock: 0,
    img: images['product-3.png'],
    category: "Fresh Fruits",

    tag: [
      { id: 1, name: "clementine" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 4,
    title: "Rainbow Peppers",
    unit: "4ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4FA",
    stock: 52,
    img: images['product-4.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "rainbow-peppers" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 5,
    title: "Blueberry",
    unit: "25qt",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F9",
    stock: 99,
    img: images['product-5.png'],
    category: "Fresh Fruits",
    tag: [
      { id: 1, name: "blueberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 6,
    title: "Calabaza Squash",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F8",
    stock: 59,
    img: images['product-6.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "calabaza-squash" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 7,
    title: "Lettuce",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 14,
    oldPrice: 0,
    sales: 0,
    sku: " 9AF4F7",
    stock: 103,
    img: images['product-7.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "lettuce" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 8,
    title: "Radicchio",
    unit: "12ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "F0056",
    stock: 0,
    img: images['product-8.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "radicchio" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 9,
    title: "Parsley",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F5",
    stock: 97,
    img: images['product-9.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "parsley" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 10,
    title: "Strawberrie",
    unit: "25oz",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 13,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F4",
    stock: 47,
    img: images['product-10.png'],
    category: "Fresh Fruits",
    tag: [
      { id: 1, name: "strawberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 11,
    title: "Cauliflower",
    unit: "35lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F3",
    stock: 90,
    img: images['product-11.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "cauliflower" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 12,
    title: "Organic Purple Cauliflower",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 11,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F2",
    stock: 90,
    img: images['product-12.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "cauliflower" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 13,
    title: "Ahold Acorn Squash",
    unit: "1ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F1",
    stock: 0,
    img: images['product-13.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "squash" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 14,
    title: "Bok Choy Cabbage",
    unit: "1lb",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4F1",
    stock: 97,
    img: images['product-14.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "cabbage" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 15,
    title: "Strawberries Package",
    unit: "25oz",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 14,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EF",
    stock: 86,
    img: images['product-15.png'],
    category: " Fresh Fruits",
    tag: [
      { id: 1, name: "strawberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 16,
    title: "Aloe Vera Leaf",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 15,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EE",
    stock: 65,
    img: images['product-16.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "aloe-vera-leaf" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 17,
    title: "Pineapple Imported",
    unit: "5lb",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4ED",
    stock: 70,
    img: images['product-17.png'],
    category: "Fresh Fruits",
    tag: [
      { id: 1, name: "pineapple" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 18,
    title: "Organic Broccoli",
    unit: "10oz",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 12,
    oldPrice: 0,
    sales: 0,
    sku: "9AF4EC",
    stock: 110,
    img: images['product-18.png'],
    category: "Fresh Vegetable",
    tag: [
      { id: 1, name: "broccoli" },
      { id: 2, name: "fresh vegetable" },
    ],
  },

];

export const DiscountProductData=[
  
  {
    id: 1,
    title: "Organic Bell Pepper",
    unit: "22ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 10,
    oldPrice: 12,
    sales: 17,
    sku: "9AF4E2",
    stock: 110,
   images: [{id:1,small:images['product-19.png']},{id:2,medium:images['product-19-2x.png']}],
    category: "Fresh Vegetable",
    href:"organic-bell-pepper",
    tag: [
      { id: 1, name: "bell-pepper" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 2,
    title: "Mini Pumpkin",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 10,
    oldPrice: 12,
    sales: 17,
    sku: "F0054",
    stock: 110,
    images: [{id:1,small:images['product-20.png']},{id:2,medium:images['product-20-2x.png']}],
    category: "Fresh Vegetable",
    href:"mini-pumpkin",
    tag: [
      { id: 1, name: "pumpkin" },
      { id: 2, name: "fresh vegetable" },
    ],
  }, 
  {
    id: 3,
    title: "Iglotex Cauliflower",
    unit: "each",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 14,
    oldPrice: 15,
    sales: 7,
    sku: "9AF4DC",
    stock: 110,
    images: [{id:1,small:images['product-21.png']},{id:2,medium:images['product-21-2x.png']}],
    category: "Fresh Vegetable",
    href:"iglotex-cauliflower",
    tag: [
      { id: 1, name: "cauliflower" },
      { id: 2, name: "fresh vegetable" },
    ],
  }, 
  {
    id: 4,
    title: "French Green Beans",
    unit: "16ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 11,
    oldPrice: 12,
    sales: 8,
    sku: "F0054",
    stock: 110,
    images: [{id:1,small:images['product-22.png']},{id:2,medium:images['product-22-2x.png']}],
    category: "Fresh Vegetable",
    href:"french-green-beans",
    tag: [
      { id: 1, name: "beans" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
   {
    id: 5,
    title: "Escarole",
    unit: "1ct",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 13,
    oldPrice: 14,
    sales: 7,
    sku: "9AF4D9",
    stock: 110,
    images: [{id:1,small:images['product-23.png']},{id:2,medium:images['product-23-2x.png']}],
    category: "Fresh Vegetable",
    href:"escarole",
    tag: [
      { id: 1, name: "escarole" },
      { id: 2, name: "fresh vegetable" },
    ],
  },
  {
    id: 6,
    title: "Haitian Mangoe",
    unit: "8ct",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 8,
    oldPrice: 10,
    sales: 20,
    sku: "9AF4D5",
    stock: 110,
    images: [{id:1,small:images['product-24.png']},{id:2,medium:images['product-24-2x.png']}],
    category: "Fresh Fruits",
    href:"haitian-mangoe",
    tag: [
      { id: 1, name: "mango" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 7,
    title: "Cranberries",
    unit: "9.5oz",
    description:
      "Most fresh vegetables are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat. ... The root vegetables include beets, carrots, radishes, sweet potatoes, and turnips. Stem vegetables include asparagus and kohlrabi.",
    price: 13,
    oldPrice: 15,
    sales: 13,
    sku: "9AF4D3",
    stock: 110,
    images: [{id:1,small:images['product-25.png']},{id:2,medium:images['product-25-2x.png']}],
    category: " Fresh Fruits",
    href:"cranberries",
    tag: [
      { id: 1, name: "cranberries" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 8,
    title: "Mandarin Clementine",
    unit: "22lb",
    description:
      "In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits.",
    price: 11,
    oldPrice: 12,
    sales: 8,
    sku: "9AF4D2",
    stock: 110,
    images: [{id:1,small:images['product-26.png']},{id:2,medium:images['product-26-2x.png']}],
    category: "Fresh Fruits",
    href:"mandarin-clementine",
    tag: [
      { id: 1, name: "clementine" },
      { id: 2, name: "fresh fruits" },
    ],
  },
  {
    id: 9,
    title: "Orange Imported",
    unit: "1kg",
    description:
      "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    price: 9,
    oldPrice: 10,
    sales: 10,
    sku: "9AF4CA",
    stock: 110,
    images: [{id:1,small:images['product-27.png']},{id:2,medium:images['product-27-2x.png']}],
    category: "Organic Food",
    href:"orange-imported",
    tag: [
      { id: 1, name: "organic food" },
      { id: 2, name: "orange" },
    ],
  },
  {
    id: 10,
    title: "China Fuji Apple",
    unit: "1kg",
    description:
      "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    price: 10,
    oldPrice: 11,
    sales: 7,
    sku: "F0054",
    stock: 110,
    images: [{id:1,small:images['product-28.png']},{id:2,medium:images['product-28-2x.png']}],
    category: "Organic Food",
    href:"china-fuji-apple",
    tag: [
      { id: 1, name: "organic food" },
      { id: 2, name: "china apple" },
    ],
  },
  {
    id: 11,
    title: "Sugar Free Orange Jelly",
    unit: "375gm",
    description:
      "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    price: 10,
    oldPrice: 12,
    sales: 17,
    sku: "F0054",
    stock: 110,
    images: [{id:1,small:images['product-29.png']},{id:2,medium:images['product-29-2x.png']}],
    category: "Organic Food",
    href:"sugar-free-orange-jelly",
    tag: [
      { id: 1, name: "organic food" },
      { id: 2, name: "orange-jelly" },
    ],
  },
  {
    id: 12,
    title: "Pineapple",
    unit: "1pcs",
    description:
      "Organic food is food produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.",
    price: 10,
    oldPrice: 11,
    sales: 9,
    sku: "9AF4C5",
    stock: 110,
    images: [{id:1,small:images['product-30.png']},{id:2,medium:images['product-30-2x.png']}],
    category: "Organic Food",
    href:"pineapple",
    tag: [
      { id: 1, name: "organic food" },
      { id: 2, name: "pineapple" },
    ],
  },
]



