import { AppState } from "../AppState.js"

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.code = data.code
    }
    
    get SnackTemplateCard() {
        return /*html*/ `
        <div class="col-4 p-2">
        <div class="card">
            <img src="${this.imgUrl}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="fs-2">$${this.price}</p>
                <p class="fs-4">${this.code}</p>
            </div>
        </div>
    </div>
        `
    }
    
    get BoughtSnackTemplateCard() {
        return `
        <p>Vending out...${this.name}</p>
        `
    }
}