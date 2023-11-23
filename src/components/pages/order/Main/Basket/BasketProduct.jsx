import React, { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import BasketCard from "./BasketCard"
import { IMAGE_COMING_SOON } from "../../../../../enums/product"

export default function BasketProducts() {
    const { basket, isModeAdmin, handleDeleteBasketProduct, handleProductSelected } =
    useContext(OrderContext)

    const handleOnDelete = (event, id) => {
        event.stopPropagation()
        handleDeleteBasketProduct(id)
    }

    const handleCardClick = (id) => {
        if (!isModeAdmin) return
        handleProductSelected(id)
    }

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => (
                <div className="basket-card" key={basketProduct.id}>
                    <BasketCard
                        {...basketProduct}
                        imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON}
                        onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                        isModeAdmin={isModeAdmin}
                        onClick={() => handleCardClick(basketProduct.id)}
                    />
                </div>
            ))}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        /* border: 1px solid blue; */
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;
        &:first-child {
            margin-top: 20px;
          /* border: 1px solid red; */
        }
        &:last-child {
            margin-bottom: 20px;
        }
    }
`