const Basket = (() =>{
  //closure
  var data = [];

  //public api
  return {
    getData: () => {
      return data;
    },

    addItem: (newItem) => {
      console.log('Adding item to the basket', newItem)
      data.push(newItem);
    },

    removeItem: (item) => {
      console.log('Removing item from the basket', item)
      data.splice(data.indexOf(item),1);
    },

    clear: () => {
      console.log('Clearing basket')
      data = [];
    },

    calculatePrice: () => {
      let sum = 0;
      data.forEach((item) => {
        sum += item.price
      });
      return sum;
    }
  }

})()
