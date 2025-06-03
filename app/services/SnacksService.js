import { AppState } from "../AppState.js";

class SnacksService {

  addMoney(amount) {
    AppState.money += amount
  }

  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    if (AppState.money < snackToBuy.price) {
      return
    }
    if (snackToBuy.quantity <= 0) {
      return
    }
    snackToBuy.quantity--
    AppState.money -= snackToBuy.price
    console.log(snackName + ' purchased');
    AppState.myCart.push(snackToBuy)
  }
}

export const snacksService = new SnacksService()