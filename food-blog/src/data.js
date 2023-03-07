import {
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
  post14,
  post15,
  post16,
  post17,
  post18,
  gala,
  dasha,
  mary
} from "./assets/index";
const posts = [
  {
    id: 1,
    postImg: post1,
    postCategory: "Desserts",
    postItemCategory: "desert",
    postTitle: "Simple strawberry dessert",
    postData: "12 feb 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
    numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
    perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
    voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
    suscipit fuga odit vero modi, deserunt, totam natus provident debitis
    earum dolore atque magnam! Officia veniam minima reprehenderit
    corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
    recusandae iusto quidem distinctio animi cupiditate temporibus
    inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
    reiciendis at libero, deleniti error temporibus, et culpa perferendis
    reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 2,
    postImg: post2,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Homemade pizza",
    postData: "14 jan 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: mary,
    profileName: "Марія Красива",
  },
  {
    id: 3,
    postImg: post3,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Thai ramen",
    postData: "08 mar 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: gala,
    profileName: "Галина Весела",
  },
  {
    id: 4,
    postImg: post4,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Italian pasta",
    postData: "19 mar 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 5,
    postImg: post5,
    postCategory: "Breakfast",
    postItemCategory: "breakfast",
    postTitle: "Seafood sandwiches",
    postData: "01 apr 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 6,
    postImg: post6,
    postCategory: "Desserts",
    postItemCategory: "desert",
    postTitle: "Vanilla tartlets",
    postData: "05 apr 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: mary,
    profileName: "Марія Красива",
  },
  {
    id: 7,
    postImg: post7,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Shrimps in cream sauce with lemon",
    postData: "21 apr 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: gala,
    profileName: "Галина Весела",
  },
  {
    id: 8,
    postImg: post8,
    postCategory: "Breakfast",
    postItemCategory: "breakfast",
    postTitle: "The best spices for breakfast",
    postData: "01 may 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: gala,
    profileName: "Галина Весела",
  },
  {
    id: 9,
    postImg: post9,
    postCategory: "Desserts",
    postItemCategory: "desert",
    postTitle: "Traditional Italian lemon dessert",
    postData: "09 may 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 10,
    postImg: post10,
    postCategory: "Breakfast",
    postItemCategory: "breakfast",
    postTitle: "Scrambled eggs with peas",
    postData: "21 may 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 11,
    postImg: post11,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Greek meat",
    postData: "06 jun 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 12,
    postImg: post12,
    postCategory: "Dessert",
    postItemCategory: "desert",
    postTitle: "Honey pancakes",
    postData: "26 jun 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: mary,
    profileName: "Марія Красива",
  },
  {
    id: 13,
    postImg: post13,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Steamed broccoli",
    postData: "10 jul 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 14,
    postImg: post14,
    postCategory: "Dessert",
    postItemCategory: "desert",
    postTitle: "Plum dessert",
    postData: "31 jul 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: mary,
    profileName: "Марія Красива",
  },
  {
    id: 15,
    postImg: post15,
    postCategory: "Dessert",
    postItemCategory: "desert",
    postTitle: "Citrus dessert",
    postData: "09 aug 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: gala,
    profileName: "Галина Весела",
  },
  {
    id: 16,
    postImg: post16,
    postCategory: "Breakfast",
    postItemCategory: "breakfast",
    postTitle: "Homemade cheeseburger",
    postData: "01 sep 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: gala,
    profileName: "Галина Весела",
  },
  {
    id: 17,
    postImg: post17,
    postCategory: "Desserts",
    postItemCategory: "desert",
    postTitle: "Plum jam",
    postData: "15 sep 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: dasha,
    profileName: "Даша Щаслива",
  },
  {
    id: 18,
    postImg: post18,
    postCategory: "Lunch",
    postItemCategory: "lunch",
    postTitle: "Tomato soup with mussels",
    postData: "15 oct 2022",
    postDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum
numquam quasi odit omnis soluta iste, velit ea molestiae voluptates
perferendis saepe ex vel veritatis ipsa reprehenderit repellendus odio
voluptatum! Voluptas quaerat, excepturi ex qui in commodi mollitia
suscipit fuga odit vero modi, deserunt, totam natus provident debitis
earum dolore atque magnam! Officia veniam minima reprehenderit
corrupti maiores ab tempora? Eveniet incidunt voluptate cumque
recusandae iusto quidem distinctio animi cupiditate temporibus
inventore aperiam, hic nobis. Fuga inventore, atque ipsa labore
reiciendis at libero, deleniti error temporibus, et culpa perferendis
reprehenderit.`,
    profileImg: mary,
    profileName: "Марія Красива",
  },
];

export default posts;
