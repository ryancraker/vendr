import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";

export class SnacksController {
  constructor() {
    console.log('snacks ready');
    this.drawSnacks()
    AppState.on('money', this.drawMoneys)
    AppState.on('money', this.drawSnacks)
    AppState.on('myCart', this.drawMyCart)
  }

  drawSnacks() {
    const snacks = AppState.snacks
    const snacksCaseElem = document.getElementById('snacks-case')
    let snacksCase = ''
    snacks.forEach(snack => snacksCase += snack.SnackCardTemplate)
    snacksCaseElem.innerHTML = snacksCase
  }

  addMoney(amount) {
    snacksService.addMoney(amount)
    console.log(AppState.money);
  }

  drawMoneys() {
    console.log('money changed');
    let moneyElem = document.getElementById('money-total')
    moneyElem.innerText = AppState.money
  }
  buySnack(snackName) {
    console.log('buying ' + snackName);
    snacksService.buySnack(snackName)
  }

  drawMyCart() {
    const mySnacks = AppState.myCart
    const myCartElem = document.getElementById('my-cart')
    let myCart = ''
    mySnacks.forEach(cartItem => myCart += cartItem.SnackCartTemplate)
    myCartElem.innerHTML = myCart
    console.log(myCart);

  }
}