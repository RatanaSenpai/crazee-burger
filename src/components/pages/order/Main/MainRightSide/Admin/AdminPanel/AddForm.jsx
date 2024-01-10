import React, { useContext, useState } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import Form from "./Form"
import SubmitButton from "./SubmitButton"
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths"

export default function AddForm() {
    // state
    const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
            price: replaceFrenchCommaWithDot(newProduct.price),
        }

        handleAdd(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)

        displaySuccessMessage()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewProduct({ ...newProduct, [name]: value })
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    // affichage
    return (
        <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
            <SubmitButton isSubmitted={isSubmitted} />
        </Form>
    )
}
