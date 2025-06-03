import { ExampleController } from './controllers/ExampleController.js';
import { SnacksController } from './controllers/SnacksController.js';

class App {

  snacksController = new SnacksController()
}

window['app'] = new App()


