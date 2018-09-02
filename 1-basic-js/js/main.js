var userBasket = Basket;

function createItemsFromData(arg){

  dataGenerate(arg);

  for (item of productData) {
    createItemBar(new Item(item));
  }
}

createItemsFromData();

function createItemBar(item) {
  //Targeting parent DOM node
  let productsHTML = document.getElementsByClassName('products')[0];

   //Creating elements
  let outerDivStyle = (item.status === 'inactive' ?
    'item-bar item-bar-add' :
    'item-bar item-bar-remove'
  );
  let outerDiv = FactoryHTML('div', outerDivStyle);

  const innerTitle = FactoryHTML('h3', 'item-title', item.title);
  const innerInfo = FactoryHTML('p', 'item-price', `Price: ${item.price}`);
  const innerCategory = FactoryHTML('h5', 'item-category', `Category: ${item.category}`);

  var button = FactoryHTML(
    'button',
    'button-add',
    (item.status == 'inactive' ? 'Add' : 'Remove')
  );

  button.onclick = function(){
    console.log(item)
    if (item.status == 'inactive') {
      dataSwitchStatus(item.id);
      item.status = 'active'
      userBasket.addItem(item);
      ManageBasket();
      button.innerHTML = 'Remove';
      button.className = 'button-remove';
      outerDiv.className = 'item-bar item-bar-remove';
    } else {
      dataSwitchStatus(item.id);
      userBasket.removeItem(item);
      item.status = 'inactive'
      ManageBasket();
      button.innerHTML = 'Add';
      button.className = 'button-add';
      outerDiv.className = 'item-bar item-bar-add'
    }
  };

   outerDiv.appendChild(innerTitle);
   outerDiv.appendChild(innerCategory);
   outerDiv.appendChild(innerInfo);
   outerDiv.appendChild(button);

   productsHTML.appendChild(outerDiv);
}

function Item(item) {
  this.id = item.id;
  this.title = item.title;
  this.category = item.category;
  this.price = item.price;
  this.status = item.status;
}

function ManageBasket() {
  let place = document.getElementsByClassName('basket')[0];
  place.innerHTML = null;
  let data = userBasket.getData().slice();

  for (item of data) {
    place.appendChild( FactoryHTML('div', 'basket-item', item.title) );
  }

  document.getElementsByClassName('total-price')[0].innerHTML = `Total Price: ${userBasket.calculatePrice()}`
}

function GenerateData() {
  let value = document.getElementById('data-generator').value;

  if (value > 0) {
    userBasket.clear();
    ManageBasket();
    document.getElementsByClassName('products')[0].innerHTML = null;
    createItemsFromData(value);
  } else {
    alert('Nope! Input value is lesser than 0 or not even a number at all');
  }
}

function FilterData(){
  let value = document.getElementById('data-filter').value;
  let filteredData = dataFilter(value);

  document.getElementsByClassName('products')[0].innerHTML = null;

  for (item of filteredData) {
    createItemBar(new Item(item));
  }
}
