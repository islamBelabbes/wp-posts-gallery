// const wp_grid_items = () => {
//   const imgarr = [
//     "https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/11-La-Maison-Blanche-2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/16-Oak-House-2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/17-Wild-Stone-Residence-1-2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/09-2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/fghfgh-1.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/1-3.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/Shot2-1-2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/Garden-shot-1m2-1.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/32-12-Senses-Cafe2.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/33-Nail-SPA.jpg.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/31-Giraffe-Cafe3.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/3-3.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/2-3.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/23.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/11-3.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/Shot5-1.jpg",
//     "https://kayanplanning.com/wp-content/uploads/2023/02/07-Exotic-Residence-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-La-Maison-Blanche-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/16-Oak-House-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/17-Wild-Stone-Residence-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/09-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/fghfgh-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/1-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot2-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Garden-shot-1m2-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/32-12-Senses-Cafe2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/33-Nail-SPA.jpg.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/31-Giraffe-Cafe3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/3-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/2-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/23.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot5-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/07-Exotic-Residence-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-La-Maison-Blanche-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/16-Oak-House-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/17-Wild-Stone-Residence-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/09-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/fghfgh-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/1-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot2-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Garden-shot-1m2-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/32-12-Senses-Cafe2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/33-Nail-SPA.jpg.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/31-Giraffe-Cafe3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/3-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/2-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/23.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot5-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/07-Exotic-Residence-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-La-Maison-Blanche-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/16-Oak-House-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/17-Wild-Stone-Residence-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/09-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/fghfgh-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/1-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot2-1-2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Garden-shot-1m2-1.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/32-12-Senses-Cafe2.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/33-Nail-SPA.jpg.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/31-Giraffe-Cafe3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/3-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/2-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/23.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/11-3.jpg",
//     // "https://kayanplanning.com/wp-content/uploads/2023/02/Shot5-1.jpg",
//   ];
//   const categories = ["landing", "archive", "game", "logic"];
//   const imgarrclass = imgarr.map((item) => {
//     return {
//       img_src: item,
//       img_cat: categories[Math.floor(Math.random() * categories.length)],
//       post_url: "https://kayanplanning.com/wp-content",
//     };
//   });
//   return imgarrclass;
// };
// const wp_grid_items_arr = wp_grid_items();