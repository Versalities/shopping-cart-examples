var productData;


function dataGenerate(arg) {
  let limit = arg || 10;
  let data = MockData(limit)

  data.forEach((item) => {
    item.status = 'inactive'
  })

  productData = data
}

function dataFilter(value) {
  let filterMatch = new RegExp(value, 'i');

  return productData.filter(item => filterMatch.test(item.category) );
}

function dataSwitchStatus(id) {
  productData.forEach((item) => {
    if(item.id === id) {
      item.status = (item.status === 'inactive' ? 'active' : 'inactive')
    }
  })
}
