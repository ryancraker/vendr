export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackCardTemplate() {
    return `
    <div onclick="app.snacksController.buySnack('${this.name}')" type="button" role="button" class="col-md-2 m-1 snack-card">
          <img class="food-image" src="${this.imgUrl}" alt="picture of ${this.name}">
          <hr>
          <div class="d-flex justify-content-between">
            <span>${this.name}</span>
            <span>${this.price}</span>
          </div>
        </div>
        `
  }
}