import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findIndexById, findObjectById, removeObjectById } from "../utils/array"

export const useBasket = () => {
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (idProductToAdd) => {
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

        if (productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
    }

    const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
        // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = { id: idProductToAdd, quantity: 1 }
        const newBasket = [newBasketProduct, ...basketCopy]
        setBasket(newBasket)
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        //1. copy du state (optional because filter returns a new array )
        const basketCopy = deepClone(basket)

        //2. manip de la copie state
        //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
        const basketUpdated = removeObjectById(idBasketProduct, basketCopy)

        //3. update du state
        setBasket(basketUpdated)
    }

    return { basket, handleAddToBasket, handleDeleteBasketProduct }
}

