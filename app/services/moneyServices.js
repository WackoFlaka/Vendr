import { AppState } from "../AppState.js";

class moneyServices {
    addMoney() {
        console.log('Adding Money, but in Service')
        AppState.total += 0.25
    }
}

export const moneyService = new moneyServices()