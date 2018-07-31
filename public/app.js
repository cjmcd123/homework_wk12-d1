var app = function() {

  // var catList = document.createElement("ul");
  // catList.classList.add("cats");
  //
  // var listName = document.createElement("li");
  // listName.innerText = "Name: Dog";
  //
  // var listFood = document.createElement("li");
  // listFood.innerText = "Favourite food: Your Soul";
  //
  // var img = document.createElement("img");
  // img.width = "500";
  // img.src = "https://i.imgur.com/gdWIxn2.jpg"
  //
  // catList.appendChild(listName);
  // catList.appendChild(listFood);
  // catList.appendChild(img);
  //
  // var cats = document.querySelector("#cats");
  // cats.appendChild(catList);



  var cats_array = [
    {name: "Boba", favFood: "Sock fluff", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
    {name: "Barnaby", favFood: "Tuna", img: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
    {name: "Max", favFood: "Whiskas Temptations", img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
    {name: "Dog", favFood: "Your Soul", img: "https://i.imgur.com/gdWIxn2.jpg"},
    {name: "A Cat", favFood: "Pasta", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Fluffles", favFood: "Salmon", img: "http://www.technocrazed.com/wp-content/uploads/2013/05/kitler5249.jpg"},
    {name: "Cuddles", favFood: "Doggy Treats", img: "https://thumbs-prod.si-cdn.com/azaY6UJQr6w7GMO5NScOuYhUbIM=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/ef/ff/efff9ae5-1832-489f-bb1f-f1a00944a8aa/hedgehog.jpg"}
  ]

  for (var cat of cats_array) {
    addCat(cat.name, cat.favFood, cat.img);
  }
}

var addCat = function (name, favFood, img) {

  var catList = createCatList();
  var listName = createListName(name);
  var listFood = createListFood(favFood);
  var img = createImg(img);

  appendElements(catList, listName, listFood, img);
}

var createCatList = function () {
  var catList = document.createElement("div");
  catList.classList.add("cats");
  return catList;
}

var createListName = function (name) {
  var listName = document.createElement("p");
  listName.innerText = "Name: " + name;
  return listName;
}

var createListFood = function (favFood) {
  var listFood = document.createElement("p");
  listFood.innerText = "Favourite food: " + favFood;
  return listFood;
}

var createImg = function (image) {
  var img = document.createElement("img");
  img.width = "500";
  img.src = image;
  return img;
}

var appendElements = function(catList, listName, listFood, img){
  catList.appendChild(listName);
  catList.appendChild(listFood);
  catList.appendChild(img);

  var cats = document.querySelector("#cats");
  cats.appendChild(catList);
}


window.onload = app;
