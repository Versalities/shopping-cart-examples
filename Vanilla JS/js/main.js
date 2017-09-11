var userBasket = Basket;

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



MockData(10).forEach((item) => {
  createItemBar(new Item(item))
})

function ManageBasket(){
  var place = document.getElementsByClassName('basket')[0];
  place.innerHTML = null;
  let data = userBasket.getData().slice();

  data.forEach((i) => {
    place.appendChild( FactoryHTML('div', 'basket-item', i.title) );
  })

  document.getElementsByClassName('total-price')[0].innerHTML = `Total Price: ${userBasket.calculatePrice()}`
}
