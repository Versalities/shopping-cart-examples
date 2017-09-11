
//Function to generate some simple mock data.
const MockData = (arg) => {
  //variable to limit the amount of items in the array
  var bar = arg || Math.floor((Math.random() * 100) + 1);
  //list of items, will be returned
  var data = [];

  //function to assign random category to the item
  function assignCategory(){
    var categories = [
      'Sport',
      'Techonology',
      'Culture',
      'Hobby',
      'Entertaiment',
      'Music',
      'Education'
    ];
    let bar = Math.floor((Math.random() * categories.length-1) + 1);


    //It returns randomly picked category from the list
    return categories[bar];
  }

  //just as the function above, only with a price for an item
  function assignprice(category){
    let price = Math.floor((Math.random() * 10000) + 100);
    //assining some multipliers to the initial price, for fun
    switch(category){
      case 'Sport':
        return price * 1.5;
      case 'Techonology':
        return price * 1.75;
      case 'Culture':
        return price * 2;
      case 'Hobby':
        return price * 0.85;
      case 'Entertaiment':
        return price * 1.25;
      default:
        return price;
    }
  }

//Building our resulting mock data array
  for(let i = 1; i <= bar; i++){
    data.push({
      id:i,
      title: `Product №${i}`,
      category: assignCategory(),
      price:assignprice(this.category)
    })
  }

  return data;
}
