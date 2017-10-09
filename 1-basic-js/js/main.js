var userBasket = Basket;

function createItemsFromData(arg){

  dataGenerate(arg)

  productData.forEach((item) => {
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

   var button = FactoryHTML(
   'button',
   'button-add',
   (item.status == 'inactive' ? 'Add' : 'Remove')
  );

   button.onclick = function(){
     console.log(item)
     if(item.status == 'inactive'){
       dataSwitchStatus(item.id);
       item.status = 'active'
       userBasket.addItem(item);
       ManageBasket();
       button.innerHTML = 'Remove';
       button.className = 'button-remove';
     } else {
       dataSwitchStatus(item.id);
       userBasket.removeItem(item);
       item.status = 'inactive'
       ManageBasket();
       button.innerHTML = 'Add';
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
  this.status = item.status

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
    alert('Nope! Input value is lesser than 0 or not even a number at all')
  }
}

function FilterData(){
  let value = document.getElementById('data-filter').value;
  let filteredData = dataFilter(value)

  document.getElementsByClassName('products')[0].innerHTML = null;

  filteredData.forEach((i) => {
      createItemBar(new Item(i))
    })
}
