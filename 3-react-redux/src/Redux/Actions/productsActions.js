export function generateData(data) {

  data.forEach((i) => {
    i.status = 'inactive'
  })

  return {
    type: 'GENERATE_DATA',
    payload: data
  }
}
