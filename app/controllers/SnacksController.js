import { AppState } from "../AppState.js";
import { snackService } from "../services/snackServices.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawMoney() {
    setText('total', AppState.total)
}

function _drawSnacks() {
    console.log("Draw Snacks to Controller")
    const snacks = AppState.snacks
    let html = ''
    snacks.forEach(snack => html += snack.SnackTemplateCard)
    setHTML('snacks', html)
}

/* function _drawList() {
    const snacks = AppState.mySnacks
    console.log(snacks)
    setHTML('boughtSnacks',snacks.BoughtSnackTemplateCard)
    
} */

export class SnacksController {
    constructor() {
        console.log("Snacks are displayed!")
        _drawSnacks()
    }
    
   /*  purchaseSnack(name) {
        console.log('Purchased Snack in Controller', name)
        snackService.purchaseSnack(name)
        setText('total', AppState.total)
        _drawList()
    } */
    
    input(code) {
        AppState.myCode += code
        console.log(AppState.myCode)
        
        if(AppState.myCode.length == 2) {
            const snacks = AppState.snacks
            const findSnack = snacks.find(snack => snack.code == AppState.myCode)
            
            if(findSnack == undefined) {
                window.alert("Item does not exist")
                AppState.myCode = ''
                setText('code', AppState.myCode) 
                return
            } else {
                
            }
            snackService.myCode(AppState.myCode)
            setHTML('boughtSnacks',findSnack.BoughtSnackTemplateCard)
            console.log(findSnack) 
        }
        _drawMoney()
        setText('code', AppState.myCode) 
    }
}