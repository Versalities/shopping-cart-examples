export function generateData(data) {
  for (let item of data) {
    item.stats = 'inactive'
  }

  return {
    type: 'GENERATE_DATA',
    payload: data
  }
}
