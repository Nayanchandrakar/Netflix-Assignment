const random = (data) => {
  const randomNumber = Math.floor(Math.random() * data.length)
  const randomdata = data[randomNumber]
  return randomdata
}

const filterdata = (id, data) => {
  const singledata = data.filter((elem) => {
    if (elem?.show?.id == id) {
      return elem
    }
  })

  return singledata
}

export { random, filterdata }
