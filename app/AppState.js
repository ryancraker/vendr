import { Snack } from './models/SnackModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  snacks = [
    new Snack({
      name: "Snack Cake",
      price: 2.25,
      imgUrl: "https://images.unsplash.com/photo-1671057078047-53e81101b0a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }),
    new Snack({
      name: "Cookie",
      price: 1.50,
      imgUrl: "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }),
    new Snack({
      name: "Chips",
      price: 2.75,
      imgUrl: "https://images.unsplash.com/photo-1694101493127-eca6dfef5011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }),
    new Snack({
      name: "Not Milk",
      price: 3.75,
      imgUrl: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    })
  ]

  money = 0;

  /** *@type {Snack[]} */
  myCart = []
}

export const AppState = createObservableProxy(new ObservableAppState())