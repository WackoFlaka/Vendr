import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  
  total = 0
  
  snacks = [
    new Snack({name: 'Dorritos', price: 3.50, code: 'A4', imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
    new Snack({name: 'Cheetos', price: 3.50, code: 'C2', imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
    new Snack({name: 'Lays', price: 3.50, code: 'B5', imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
    new Snack({name: 'Skittles', price: 2.25, code: 'D8', imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
    new Snack({name: 'Crunch', price: 2, code:'A6', imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
    new Snack({name: 'Gummy Worms', code:'E7', price: 4.25, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})
  ]
  
  mySnacks = null
  myCode = ''
}

export const AppState = createObservableProxy(new ObservableAppState())