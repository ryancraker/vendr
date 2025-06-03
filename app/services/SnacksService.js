import { AppState } from "../AppState.js";

class SnacksService {

  addQuarter() {
    AppState.money += .25
  }

  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    if (AppState.money < snackToBuy.price) {
      return
    }
    AppState.money -= snackToBuy.price
    console.log(snackName + ' purchased');
    AppState.myCart.push(snackToBuy)
  }
}

export const snacksService = new SnacksService()