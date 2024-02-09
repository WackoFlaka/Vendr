import { AppState } from "../AppState.js";
import { moneyService } from "../services/moneyServices.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
    setText('total', AppState.total)
}

export class moneyController {
    constructor() {
        console.log("Money are displayed!")
    }
    
    addMoney() {
        console.log('Adding money to the vending machine')
        moneyService.addMoney()
        _drawMoney()
    }
}