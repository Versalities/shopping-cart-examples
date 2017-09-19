var userBasket = Basket;

var productData;

function createItemsFromData(arg){
  let limit = arg || 10;
  let data = MockData(limit);

  productData = data;

  data.forEach((item) => {
    createItemBar(new Item(item))
  })
}

createItemsFromData();

function createItemBar(item){
  //Targeting parent DOM node
   var productsHTML = document.getElementsByClassName('products')[0];

   //Creating elements
   var outerDiv = FactoryHTML('div', 'item-bar');

   var innerTitle = FactoryHTML('h3', 'item-title', item.title);

   var innerInfo = FactoryHTML('p', 'item-price', `Price: ${item.price}`);

   var innerCategory = FactoryHTML('h5', 'item-category', `Category: ${item.category}`);

   var button = FactoryHTML('button', 'button-add', 'Добавить');

   button.onclick = function(){
     if(this.className == 'button-add'){
       userBasket.addItem(item.item);
       ManageBasket();
       button.innerHTML = 'Убрать';
       button.className = 'button-remove';
     } else {
       userBasket.removeItem(item.item);
       ManageBasket();
       button.innerHTML = 'Добавить';
       button.className = 'button-add';
     }
   }


   outerDiv.appendChild(innerTitle);
   outerDiv.appendChild(innerCategory);
   outerDiv.appendChild(innerInfo);
   outerDiv.appendChild(button);

   productsHTML.appendChild(outerDiv);

}

function Item(item){
  this.id = item.id;
  this.title = item.title;
  this.category = item.category;
  this.price = item.price;

  this.item = item;
}

function ManageBasket(){
  var place = document.getElementsByClassName('basket')[0];
  place.innerHTML = null;
  let data = userBasket.getData().slice();

  data.forEach((i) => {
    place.appendChild( FactoryHTML('div', 'basket-item', i.title) );
  })

  document.getElementsByClassName('total-price')[0].innerHTML = `Total Price: ${userBasket.calculatePrice()}`
}

function GenerateData(){
  let value = document.getElementById('data-generator').value;
  if(value > 0){
    userBasket.clear();
    ManageBasket();
    document.getElementsByClassName('products')[0].innerHTML = null;
    createItemsFromData(value);
  } else {
    alert('Nope! Input value is lesser than 0 or even not a number at all')
  }
}

function FilterData(){
  let value = document.getElementById('data-filter').value;
  let data = productData.slice();
  document.getElementsByClassName('products')[0].innerHTML = null;
  if(value.length > 0){
  data.filter(i => i.category == value).forEach((i) => {
      createItemBar(new Item(i))
  })
} else {
  productData.forEach((i) => {
      createItemBar(new Item(i))
  })
}
}
