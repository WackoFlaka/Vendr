import { AppState } from "../AppState.js";

class snackServices {
    
   /*  purchaseSnack(name) {
        const snack = AppState.snacks
        const foundSnack = snack.find(snack => snack.name == name)
        
        if(AppState.total < foundSnack.price) {
            window.alert("Not enough money, dawg")
            // FULL STOP
            return 
        }
        console.log("Purchased Snack in Service")
        AppState.total -= foundSnack.price
        AppState.mySnacks = foundSnack
    } */
    
    myCode(code) {
        
        
        const snack = AppState.snacks
        const foundSnack = snack.find(snack => snack.code == code)
        
        if(foundSnack == undefined) {
            AppState.myCode = ''
            return 
        }
        
        if(AppState.total < foundSnack.price) {
            window.alert("Not enough money, dawg")
            // FULL STOP
            AppState.myCode = ''
            return 
        }
        
        AppState.total -= foundSnack.price
        AppState.myCode = ''
        
    }
}

export const snackService = new snackServices()