let productData;


function dataGenerate(arg) {
  let limit = arg || 10;
  let data = MockData(limit);

  for (item of data) {
    item.status = 'inactive';
  };

  productData = data;
}

function dataFilter(value) {
  let filterMatch = new RegExp(value, 'i');

  return productData.filter(item => filterMatch.test(item.category));
}

function dataSwitchStatus(id) {
  for (item of productData) {
    if (item.id === id) {
      item.status = (item.status === 'inactive' ? 'active' : 'inactive');
    }
  }
}
