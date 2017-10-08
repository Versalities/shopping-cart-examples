import { action, computed, observable } from 'mobx'

class productsStore {
  @observable products = []
  @observable basket = []

  @computed get totalPrice() {
    let sum = 0;
    this.basket.forEach((item) => {
      sum += item.price
    })

    return sum
  }

  @action generateProducts(data) {
    this.products = data;
    this.basket = [];
  }

  @action.bound
  addItem(item) {
    this.basket.push(item)

    this.changeStatus(item.id)
  }

  @action.bound
  removeItem(item) {
    let index = this.basket.indexOf(item);
    if (index >= 0) {
      this.basket.splice(index, 1);
    }

    this.changeStatus(item.id)
  }

  @action changeStatus(id) {
    this.products.forEach((item) => {
      if(item.id === id) {
        item.status = (item.status === 'inactive' ? 'active' : 'inactive')
      }
    })
  }
}

var store = window.store = new productsStore()

export default store
